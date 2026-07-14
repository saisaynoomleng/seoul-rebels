import * as t from 'drizzle-orm/pg-core';
import {
  timestamps,
  MembershipStatus,
  BillingIntervals,
} from './schema-helper';
import { UsersTable } from './users.schema';
import { MembershipsTable } from './membership.schema';
import { sql } from 'drizzle-orm';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const UserMembershipsTable = t.pgTable(
  'user_memberships',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    userId: t
      .uuid('user_id')
      .references(() => UsersTable.id, { onDelete: 'cascade' })
      .notNull(),
    membershipId: t
      .uuid('membership_id')
      .references(() => MembershipsTable.id, { onDelete: 'restrict' })
      .notNull(),
    currentPeriodStart: t
      .timestamp('current_period_start', { withTimezone: true })
      .notNull(),
    currentPeriodEnd: t
      .timestamp('current_period_end', { withTimezone: true })
      .notNull(),
    stripeSubscriptionId: t
      .varchar('stripe_subscription_id', { length: 255 })
      .notNull()
      .unique(),
    billingIntervalSnapshot: BillingIntervals(
      'billing_interval_snapshot',
    ).notNull(),
    totalSnapshot: t.integer('total_snapshot').notNull(),
    status: MembershipStatus('status').notNull().default('incomplete'),
    ...timestamps,
  },
  (table) => [t.check('total_check', sql`${table.totalSnapshot} >= 0`)],
);

export type UserMembership = typeof UserMembershipsTable.$inferSelect;
export const insertUserMembershipSchema =
  createInsertSchema(UserMembershipsTable);
export const selectUserMembershipSchema =
  createSelectSchema(UserMembershipsTable);
