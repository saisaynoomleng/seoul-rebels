import * as t from 'drizzle-orm/pg-core';
import { ProductStatus, timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const ProductsTable = t.pgTable('products', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  sanitySlug: t.varchar('sanity_slug', { length: 255 }).notNull().unique(),
  sanitySKU: t.varchar('sanity_sku', { length: 255 }).notNull().unique(),
  name: t.varchar('name', { length: 255 }).notNull(),
  priceInKrw: t.integer('price_in_krw').notNull(),
  priceInUsdInCents: t.integer('price_in_usd_in_cents').notNull(),
  status: ProductStatus('status').notNull().default('draft'),
  ...timestamps,
});

export type Product = typeof ProductsTable.$inferSelect;
export const insertProductSchema = createInsertSchema(ProductsTable);
export const selectProductSchema = createSelectSchema(ProductsTable);
