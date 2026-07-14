import * as t from 'drizzle-orm/pg-core';

export const timestamps = {
  createdAt: t
    .timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: t
    .timestamp('updated_at', { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
};

export const UserRoles = t.pgEnum('userRoles', ['user', 'admin']);

export const AddressTypes = t.pgEnum('addressTypes', [
  'shipping',
  'billing',
  'both',
]);

export const MembershipStatus = t.pgEnum('membershipStatus', [
  'active',
  'incomplete',
  'incomplete_expired',
  'trialing',
  'past_due',
  'canceled',
  'paused',
  'unpaid',
]);

export const BillingIntervals = t.pgEnum('billingIntervals', ['month', 'year']);

export const ProductStatus = t.pgEnum('productStatus', [
  'draft',
  'published',
  'out_of_stock',
]);

export const InvoiceStatus = t.pgEnum('invoiceStatus', [
  'pending',
  'paid',
  'canceled',
]);

export const InvoiceCurrency = t.pgEnum('invoiceCurrency', ['krw', 'usd']);

export const JobOfferStatus = t.pgEnum('jobOfferStatus', ['open', 'closed']);

export const JobApplicationStatus = t.pgEnum('jobApplicationStatus', [
  'new',
  'accepted',
  'rejected',
]);

export const PageReviewStatus = t.pgEnum('pageReviewStatus', [
  'new',
  'reviewed',
  'spam',
]);

export const NewsletterSubscriptionStatus = t.pgEnum(
  'newsletterSubscriptionStatus',
  ['active', 'unsubscribed'],
);

export const ContactUsStatus = t.pgEnum('contactStatus', [
  'new',
  'replied',
  'spam',
]);
