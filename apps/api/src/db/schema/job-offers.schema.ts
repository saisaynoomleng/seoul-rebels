import * as t from 'drizzle-orm/pg-core';
import { JobOfferStatus, timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const JobOffersTable = t.pgTable('job_offers', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  name: t.varchar('name', { length: 255 }).notNull(),
  body: t.text('body').notNull(),
  openedDate: t.timestamp('opened_date', { withTimezone: true }).notNull(),
  closedDate: t.timestamp('closed_date', { withTimezone: true }).notNull(),
  status: JobOfferStatus('status').notNull().default('open'),
  ...timestamps,
});

/**
 * Job Offer Type from PostgreSQL DB
 */
export type JobOffer = typeof JobOffersTable.$inferSelect;
/**
 * Validate Job Offer Insert Schema
 */
export const insertJobOfferSchema = createInsertSchema(JobOffersTable);
/**
 * Validate Job Offer Select Schema
 */
export const selectJobOfferSchema = createSelectSchema(JobOffersTable);
