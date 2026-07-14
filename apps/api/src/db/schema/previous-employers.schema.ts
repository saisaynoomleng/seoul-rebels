import * as t from 'drizzle-orm/pg-core';
import { JobApplicationsTable } from './job-applications.schema';
import { timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const PreviousEmployersTable = t.pgTable('previous_employers', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  applicationId: t
    .uuid('application_id')
    .references(() => JobApplicationsTable.id, { onDelete: 'cascade' })
    .notNull(),
  name: t.varchar('name', { length: 255 }).notNull(),
  email: t.varchar('email', { length: 255 }).notNull(),
  phone: t.varchar('phone', { length: 255 }).notNull(),
  reasonForLeaving: t.text('reason_for_leaving').notNull(),
  previousRole: t.varchar('previous_role', { length: 255 }).notNull(),
  startedDate: t.timestamp('started_date', { withTimezone: true }).notNull(),
  endedDate: t.timestamp('ended_date', { withTimezone: true }),
  ...timestamps,
});

/**
 * Previous Employer Type from PostgreSQL DB
 */
export type PreviousEmployer = typeof PreviousEmployersTable.$inferSelect;
/**
 * Validate Previous Employer Insert Schema
 */
export const insertPreviousEmployerSchema = createInsertSchema(
  PreviousEmployersTable,
);
/**
 * Validate Previous Employer Select Schema
 */
export const selectPreviousEmployerSchema = createSelectSchema(
  PreviousEmployersTable,
);
