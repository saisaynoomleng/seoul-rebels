import * as t from 'drizzle-orm/pg-core';
import { UsersTable } from './users.schema';
import { timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const AccountsTable = t.pgTable(
  'accounts',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    userId: t
      .uuid('user_id')
      .references(() => UsersTable.id, { onDelete: 'cascade' })
      .notNull(),
    accountId: t.text('account_id').notNull(),
    providerId: t.text('provider_id').notNull(),
    accessToken: t.text('access_token'),
    refreshToken: t.text('refresh_token'),
    accessTokenExpriesAt: t.timestamp('access_token_expires_at', {
      withTimezone: true,
    }),
    refreshTokenExpiresAt: t.timestamp('refresh_token_expires_at', {
      withTimezone: true,
    }),
    scope: t.text('scope'),
    idToken: t.text('id_token'),
    password: t.text('password'),
    ...timestamps,
  },
  (table) => [t.index('user_account_idx').on(table.userId)],
);

export type Account = typeof AccountsTable.$inferSelect;
export const insertAccountSchema = createInsertSchema(AccountsTable);
export const selectAccountSchema = createSelectSchema(AccountsTable);
