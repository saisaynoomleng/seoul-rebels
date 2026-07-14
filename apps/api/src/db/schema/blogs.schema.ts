import * as t from 'drizzle-orm/pg-core';
import { timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const BlogsTable = t.pgTable('blogs', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  sanitySlug: t.varchar('sanity_slug', { length: 255 }).notNull().unique(),
  ...timestamps,
});

/**
 * Blog type from PostgreSQL Databse
 */
export type Blog = typeof BlogsTable.$inferSelect;
/**
 * Validate Blog's PostgreSQL Schema Input
 */
export const insertBlogSchema = createInsertSchema(BlogsTable);
/**
 * Validate Blog's PostgreSQL Schema Select
 */
export const selectBlogSchema = createSelectSchema(BlogsTable);
