import * as t from 'drizzle-orm/pg-core';
import { ProductsTable } from './products.schema';
import { StoresTable } from './stores.schema';
import { timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const InventoriesTable = t.pgTable('inventories', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  productId: t
    .uuid('product_id')
    .references(() => ProductsTable.id, { onDelete: 'cascade' })
    .notNull(),
  storeId: t
    .uuid('store_id')
    .references(() => StoresTable.id, { onDelete: 'cascade' })
    .notNull(),
  numberInStock: t.integer('number_in_stock').notNull(),
  ...timestamps,
});

export const Inventory = typeof InventoriesTable.$inferSelect;
export const insertInventorySchema = createInsertSchema(InventoriesTable);
export const selectInventorySchema = createSelectSchema(InventoriesTable);
