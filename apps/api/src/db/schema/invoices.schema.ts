import * as t from 'drizzle-orm/pg-core';
import { InvoiceCurrency, InvoiceStatus, timestamps } from './schema-helper';
import { UsersTable } from './users.schema';
import { AddressesTable } from './addresses.schema';
import { sql } from 'drizzle-orm';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const InvoicesTable = t.pgTable(
  'invoices',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    userId: t
      .uuid('user_id')
      .references(() => UsersTable.id, { onDelete: 'set null' }),
    shippingId: t
      .uuid('shipping_id')
      .references(() => AddressesTable.id, { onDelete: 'set null' }),
    shippingAddressSnapshot: t.varchar('shipping_address_snapshot').notNull(),
    stripePaymentIntentId: t
      .varchar('stripe_payment_intent_id', { length: 255 })
      .unique(),
    stripeCheckoutSessionId: t
      .varchar('stripe_checkout_session_id', { length: 255 })
      .unique(),
    totalSnapshot: t.integer('total_snapshot').notNull(),
    currency: InvoiceCurrency('currency').notNull(),
    trackingNumber: t
      .varchar('tracking_number', { length: 255 })
      .notNull()
      .unique(),
    status: InvoiceStatus('status').notNull().default('pending'),
    ...timestamps,
  },
  (table) => [
    t.check('total_check', sql`${table.totalSnapshot} > 0`),
    t.index('user_invoice_idx').on(table.userId),
  ],
);

export type Invoice = typeof InvoicesTable.$inferSelect;
export const insertInvoiceSchema = createInsertSchema(InvoicesTable);
export const selectInvoiceSchema = createSelectSchema(InvoicesTable);
