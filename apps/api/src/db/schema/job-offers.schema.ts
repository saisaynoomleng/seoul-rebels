import * as t from 'drizzle-orm/pg-core';
import { JobOfferStatus, timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const JobOffersTable = t.pgTable('job_offers', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  sanitySlug: t.varchar('sanity_slug', { length: 255 }).notNull(),
  name: t.varchar('name', { length: 255 }).notNull(),
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
