import * as t from 'drizzle-orm/pg-core';
import { PageReviewStatus, timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const PageReviewsTable = t.pgTable('page_reviews', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  name: t.varchar('name', { length: 255 }).notNull(),
  role: t.varchar('role', { length: 255 }).notNull(),
  reviewedAt: t
    .timestamp('reviewed_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
  body: t.text('body').notNull(),
  status: PageReviewStatus('status').notNull().default('new'),
  ...timestamps,
});

/**
 * Page Review Type from PostgreSQL DB
 */
export type PageReview = typeof PageReviewsTable.$inferSelect;
/**
 * Validate Page Review Insert Schema
 */
export const insertPageReviewSchema = createInsertSchema(PageReviewsTable);
/**
 * Validate Page Review Select Schema
 */
export const selectPageReviewSchema = createSelectSchema(PageReviewsTable);
