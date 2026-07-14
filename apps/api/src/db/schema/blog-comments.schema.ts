import * as t from 'drizzle-orm/pg-core';
import { BlogsTable } from './blogs.schema';
import { UsersTable } from './users.schema';
import { timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const BlogCommentsTable = t.pgTable(
  'blog_comments',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    blogId: t
      .uuid('blog_id')
      .references(() => BlogsTable.id, { onDelete: 'cascade' })
      .notNull(),
    userId: t
      .uuid('user_id')
      .references(() => UsersTable.id, { onDelete: 'cascade' })
      .notNull(),
    body: t.text('body').notNull(),
    commentedAt: t
      .timestamp('commented_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
    ...timestamps,
  },
  (table) => [
    t.uniqueIndex('user_blog_comments_idx').on(table.userId, table.blogId),
  ],
);

/**
 * Blog Comment's type from PostgreSQL DB
 */
export type BlogComment = typeof BlogCommentsTable.$inferSelect;
/**
 * Validate Blog Comment Input Schema, PostgreSQL DB
 */
export const insertBlogCommentSchema = createInsertSchema(BlogCommentsTable);
/**
 * Validate Blog Comment Select Schema, PostgreSQL DB
 */
export const selectBlogCommentSchema = createSelectSchema(BlogCommentsTable);
