import * as t from 'drizzle-orm/pg-core';
import { UsersTable } from './users.schema';
import { ProductsTable } from './products.schema';
import { timestamps } from './schema-helper';
import { sql } from 'drizzle-orm';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const ReviewsTable = t.pgTable(
  'reviews',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    userId: t
      .uuid('user_id')
      .references(() => UsersTable.id, { onDelete: 'cascade' })
      .notNull(),
    productId: t
      .uuid('product_id')
      .references(() => ProductsTable.id, { onDelete: 'cascade' })
      .notNull(),
    name: t.varchar('name', { length: 255 }).notNull(),
    title: t.varchar('title', { length: 255 }).notNull(),
    body: t.text('body'),
    rating: t.integer().notNull().default(1),
    imageUrl: t.varchar('image_url', { length: 255 }),
    ...timestamps,
  },
  (table) => [
    t.uniqueIndex('user_product_idx').on(table.userId, table.productId),
    t.check('rating_check', sql`${table.rating} BETWEEN 1 AND 5`),
  ],
);

export type Review = typeof ReviewsTable.$inferSelect;
export const insertReviewSchema = createInsertSchema(ReviewsTable);
export const selectReviewSchema = createSelectSchema(ReviewsTable);
