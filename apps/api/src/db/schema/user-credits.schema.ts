import * as t from 'drizzle-orm/pg-core';
import { UsersTable } from './users.schema';
import { timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const UserCreditsTable = t.pgTable(
  'user_credits',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    userId: t
      .uuid('user_id')
      .references(() => UsersTable.id, { onDelete: 'cascade' })
      .notNull(),
    credits: t.integer('credits').default(0),
    expiresAt: t.timestamp('expires_at', { withTimezone: true }),
    ...timestamps,
  },
  (table) => [t.index('user_credits_idx').on(table.userId)],
);

export type UserCredit = typeof UserCreditsTable.$inferSelect;
export const insertUserCreditsSchema = createInsertSchema(UserCreditsTable);
export const selectUserCreditsSchema = createSelectSchema(UserCreditsTable);
