import * as t from 'drizzle-orm/pg-core';
import { JobOffersTable } from './job-offers.schema';
import { JobApplicationStatus, timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const JobApplicationsTable = t.pgTable('job_applications', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  jobId: t
    .uuid('job_id')
    .references(() => JobOffersTable.id, { onDelete: 'cascade' })
    .notNull(),
  firstName: t.varchar('first_name', { length: 255 }).notNull(),
  lastName: t.varchar('last_name', { length: 255 }).notNull(),
  email: t.varchar('email', { length: 255 }).notNull(),
  phone: t.varchar('phone', { length: 255 }),
  street: t.varchar('street', { length: 255 }).notNull(),
  city: t.varchar('city', { length: 255 }).notNull(),
  state: t.varchar('state', { length: 255 }).notNull(),
  zip: t.varchar('zip', { length: 255 }).notNull(),
  country: t.varchar('country', { length: 255 }).notNull(),
  resumeUrl: t.varchar('resume_url', { length: 255 }).notNull(),
  status: JobApplicationStatus('status').notNull().default('new'),
  ...timestamps,
});

/**
 * Job Application Type from PostgreSQL DB
 */
export type JobApplication = typeof JobApplicationsTable.$inferSelect;
/**
 * Validate Job Application Insert Schema
 */
export const insertJobApplicationSchema =
  createInsertSchema(JobApplicationsTable);
/**
 * Validate Job Application Select Schema
 */
export const selectJobApplicationSchema =
  createSelectSchema(JobApplicationsTable);
