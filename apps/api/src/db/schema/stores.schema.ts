import * as t from 'drizzle-orm/pg-core';
import { timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const StoresTable = t.pgTable('stores', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  sanitySlug: t.varchar('sanity_slug', { length: 255 }).notNull().unique(),
  name: t.varchar('name', { length: 255 }).notNull(),
  ...timestamps,
});

export type Store = typeof StoresTable.$inferSelect;
export const insertStoreSchema = createInsertSchema(StoresTable);
export const selectStoreSchema = createSelectSchema(StoresTable);
