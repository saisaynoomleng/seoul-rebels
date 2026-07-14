import * as t from 'drizzle-orm/pg-core';
import { timestamps, AddressTypes } from './schema-helper';
import { UsersTable } from './users.schema';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const AddressesTable = t.pgTable('addresses', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  userId: t
    .uuid('user_id')
    .references(() => UsersTable.id, { onDelete: 'cascade' })
    .notNull(),
  street: t.text('street').notNull(),
  city: t.varchar('city', { length: 100 }).notNull(),
  state: t.varchar('state', { length: 100 }).notNull(),
  zip: t.varchar('zip', { length: 20 }).notNull(),
  country: t.varchar('country', { length: 50 }).notNull(),
  type: AddressTypes('type').notNull().default('shipping'),
  isDefault: t.boolean('is_default'),
  ...timestamps,
});

export type Address = typeof AddressesTable.$inferSelect;
export const insertAddressSchema = createInsertSchema(AddressesTable);
export const selectAddressSchema = createSelectSchema(AddressesTable);
