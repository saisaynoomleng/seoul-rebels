import * as t from 'drizzle-orm/pg-core';
import { NewsletterSubscriptionStatus, timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const NewsletterSubscriptionsTable = t.pgTable(
  'newsletter_subscription',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    email: t.varchar('email', { length: 255 }).notNull().unique(),
    status: NewsletterSubscriptionStatus('status').notNull().default('active'),
    ...timestamps,
  },
);

/**
 * Newsletter Subscription Type from PostgreSQL DB
 */
export type NewsletterSubscription =
  typeof NewsletterSubscriptionsTable.$inferSelect;
/**
 * Validate Newsletter Subscription Insert Schema
 */
export const insertNewsletterSubscriptionSchema = createInsertSchema(
  NewsletterSubscriptionsTable,
);
/**
 * Validate Newsletter Subscription Select Schema
 */
export const selectNewsletterSubscriptionSchema = createSelectSchema(
  NewsletterSubscriptionsTable,
);
