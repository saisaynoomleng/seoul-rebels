import * as t from 'drizzle-orm/pg-core';
import { ContactUsStatus, timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const ContactUsTable = t.pgTable('contact_us', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  fullName: t.varchar('name', { length: 255 }).notNull(),
  email: t.varchar('email', { length: 255 }).notNull(),
  subject: t.text('subject').notNull(),
  body: t.text('body').notNull(),
  status: ContactUsStatus('status').notNull().default('new'),
  ...timestamps,
});

/**
 * Contact Us Type from PostgreSQL DB
 */
export type ContactUs = typeof ContactUsTable.$inferSelect;
/**
 * Validate Contact Us insert Schema
 */
export const insertContactUsSchema = createInsertSchema(ContactUsTable);
/**
 * Validate Contact Us Select Schema
 */
export const selectContactUsSchema = createSelectSchema(ContactUsTable);
