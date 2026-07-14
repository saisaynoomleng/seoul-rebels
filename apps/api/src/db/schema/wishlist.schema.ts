import * as t from 'drizzle-orm/pg-core';
import { UsersTable } from './users.schema';
import { timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';
import { ProductsTable } from './products.schema';

export const WishlistsTable = t.pgTable(
  'wishlists',
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
    addedAt: t
      .timestamp('added_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
    ...timestamps,
  },
  (table) => [t.index('user_wishlist_idx').on(table.userId)],
);

export type Wishlist = typeof WishlistsTable.$inferSelect;
export const insertWishlistSchema = createInsertSchema(WishlistsTable);
export const selectWishlistSchema = createSelectSchema(WishlistsTable);
