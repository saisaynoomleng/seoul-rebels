import * as t from 'drizzle-orm/pg-core';
import { timestamps } from './schema-helper';
import { sql } from 'drizzle-orm';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const MembershipsTable = t.pgTable(
  'memberships',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    pricePerMonthInKrw: t.integer('price_per_month_in_krw').notNull(),
    pricePerMonthInUsdInCents: t
      .integer('price_per_month_in_usd_in_cents')
      .notNull(),
    allowDiscountPercent: t.integer('allow_discount_percent'),
    ...timestamps,
  },
  (table) => [
    t.check('krw_price_check', sql`${table.pricePerMonthInKrw} > 0`),
    t.check('usd_price_check', sql`${table.pricePerMonthInUsdInCents} > 0`),
  ],
);

export type Membership = typeof MembershipsTable.$inferSelect;
export const insertMembershipSchema = createInsertSchema(MembershipsTable);
export const selectMembershipSchema = createSelectSchema(MembershipsTable);
