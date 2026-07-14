import * as t from 'drizzle-orm/pg-core';
import { timestamps } from './schema-helper';
import { UsersTable } from './users.schema';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const SessionsTable = t.pgTable(
  'sessions',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    userId: t
      .uuid('user_id')
      .references(() => UsersTable.id, { onDelete: 'cascade' })
      .notNull(),
    token: t.text('token').notNull().unique(),
    expiresAt: t.timestamp('expires_at', { withTimezone: true }).notNull(),
    ipAddress: t.varchar('ip_address', { length: 255 }),
    userAgent: t.varchar('user_agent', { length: 255 }),
    impersonatedBy: t.text('impersonated_by'),
    ...timestamps,
  },
  (table) => [t.index('user_session_idx').on(table.userId)],
);

export type Session = typeof SessionsTable.$inferSelect;
export const insertSessionSchema = createInsertSchema(SessionsTable);
export const selectSessionSchema = createSelectSchema(SessionsTable);
