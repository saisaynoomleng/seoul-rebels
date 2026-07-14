import { defineRelations } from 'drizzle-orm';
import * as schema from './schema';

export const relations = defineRelations(schema, (r) => ({
  UsersTable: {
    credits: r.many.UserCreditsTable({
      from: r.UsersTable.id,
      to: r.UserCreditsTable.userId,
    }),
    sessions: r.many.SessionsTable({
      from: r.UsersTable.id,
      to: r.SessionsTable.userId,
    }),
    accounts: r.many.AccountsTable({
      from: r.UsersTable.id,
      to: r.AccountsTable.userId,
    }),
    wishlists: r.many.WishlistsTable({
      from: r.UsersTable.id,
      to: r.WishlistsTable.userId,
    }),
    addresses: r.many.AddressesTable({
      from: r.UsersTable.id,
      to: r.AddressesTable.userId,
    }),
    memberships: r.many.MembershipsTable({
      from: r.UsersTable.id.through(r.UserMembershipsTable.userId),
      to: r.MembershipsTable.id.through(r.UserMembershipsTable.membershipId),
    }),
    productReviews: r.many.ReviewsTable({
      from: r.UsersTable.id,
      to: r.ReviewsTable.userId,
    }),
    invoices: r.many.InvoicesTable({
      from: r.UsersTable.id,
      to: r.InvoicesTable.userId,
    }),
    blogComments: r.many.BlogCommentsTable({
      from: r.UsersTable.id,
      to: r.BlogCommentsTable.userId,
    }),
  },
  BlogsTable: {
    comments: r.many.BlogCommentsTable({
      from: r.BlogsTable.id,
      to: r.BlogCommentsTable.blogId,
    }),
  },
  MembershipsTable: {
    users: r.many.UsersTable({
      from: r.MembershipsTable.id.through(r.UserMembershipsTable.membershipId),
      to: r.UsersTable.id.through(r.UserMembershipsTable.userId),
    }),
  },
  InvoicesTable: {
    invoiceLines: r.many.InvoiceLinesTable({
      from: r.InvoicesTable.id,
      to: r.InvoiceLinesTable.invoiceId,
    }),
    shippingAddress: r.one.AddressesTable({
      from: r.InvoicesTable.shippingId,
      to: r.AddressesTable.id,
    }),
  },
  InvoiceLinesTable: {
    product: r.one.ProductsTable({
      from: r.InvoiceLinesTable.productId,
      to: r.ProductsTable.id,
    }),
  },
  Products: {
    reviews: r.many.ReviewsTable({
      from: r.ProductsTable.id,
      to: r.ReviewsTable.productId,
    }),
    stores: r.many.StoresTable({
      from: r.ProductsTable.id.through(r.InventoriesTable.productId),
      to: r.StoresTable.id.through(r.InventoriesTable.storeId),
    }),
  },
  Stores: {
    products: r.many.ProductsTable({
      from: r.StoresTable.id.through(r.InventoriesTable.storeId),
      to: r.ProductsTable.id.through(r.InventoriesTable.productId),
    }),
  },
  JobOffersTable: {
    applications: r.many.JobApplicationsTable({
      from: r.JobOffersTable.id,
      to: r.JobApplicationsTable.jobId,
    }),
  },
  JobApplicationsTable: {
    previousEmployers: r.many.PreviousEmployersTable({
      from: r.JobApplicationsTable.id,
      to: r.PreviousEmployersTable.applicationId,
    }),
  },
}));
