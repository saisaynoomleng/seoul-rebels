import * as t from 'drizzle-orm/pg-core';
import { timestamps, UserRoles } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const UsersTable = t.pgTable('users', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  name: t.varchar('name', { length: 100 }).notNull(),
  email: t.varchar('email', { length: 50 }).notNull().unique(),
  username: t.varchar('username', { length: 50 }).notNull().unique(),
  displayUsername: t.varchar('display_username', { length: 50 }),
  emailVerified: t.boolean('email_verified').notNull().default(false),
  imageUrl: t.varchar('image_url', { length: 255 }),
  role: UserRoles('role').notNull().default('user'),
  banned: t.boolean('banned').default(false).notNull(),
  banReason: t.text('ban_reason'),
  banExpires: t.timestamp('ban_expires', { withTimezone: true }),
  isDeleted: t.boolean('is_deleted').notNull().default(false),
  ...timestamps,
});

export type User = typeof UsersTable.$inferSelect;
export const insertUserSchema = createInsertSchema(UsersTable);
export const selectUserSchema = createSelectSchema(UsersTable);
