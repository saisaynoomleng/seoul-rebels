import * as t from 'drizzle-orm/pg-core';
import { timestamps } from './schema-helper';
import { createInsertSchema, createSelectSchema } from 'drizzle-orm/zod';

export const VerificationTable = t.pgTable(
  'verifications',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    identifier: t.text('identifier').notNull(),
    value: t.text('value').notNull(),
    expiresAt: t.timestamp('expires_at', { withTimezone: true }).notNull(),
    ...timestamps,
  },
  (table) => [t.index('verification_identifier_idx').on(table.identifier)],
);

export type Verification = typeof VerificationTable.$inferSelect;
export const insertVerificationSchema = createInsertSchema(VerificationTable);
export const selectVerificationSchema = createSelectSchema(VerificationTable);
