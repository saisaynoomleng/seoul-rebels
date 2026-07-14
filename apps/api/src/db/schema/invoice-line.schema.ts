import * as t from 'drizzle-orm/pg-core';
import { ProductsTable } from './products.schema';
import { InvoicesTable } from './invoices.schema';
import { timestamps } from './schema-helper';
import { sql } from 'drizzle-orm';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const InvoiceLinesTable = t.pgTable(
  'invoice_lines',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    productId: t
      .uuid('product_id')
      .references(() => ProductsTable.id, { onDelete: 'set null' }),
    invoiceId: t
      .uuid('invoice_id')
      .references(() => InvoicesTable.id, { onDelete: 'cascade' })
      .notNull(),
    quantity: t.integer('quantity').notNull(),
    priceSnapshot: t.integer('price_snapshot').notNull(),
    totalSnapshot: t.integer('total_snapshot').notNull(),
    ...timestamps,
  },
  (table) => [
    t.check('price_check', sql`${table.priceSnapshot} > 0`),
    t.check('total_check', sql`${table.totalSnapshot} > 0`),
    t.check('quantity_check', sql`${table.quantity} > 0`),
  ],
);

export type InvoiceLine = typeof InvoiceLinesTable.$inferSelect;
export const insertInvoiceLineSchema = createInsertSchema(InvoiceLinesTable);
export const selectInvoiceLineSchema = createSelectSchema(InvoiceLinesTable);
