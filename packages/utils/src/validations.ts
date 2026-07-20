import * as z from 'zod';

/**
 * Validate Stockist Form Schema
 */
export const StockistFormSchema = z.object({
  _id: z.string().nullable(),
  name: z.string().min(1, 'Store name must have at least 1 character'),
  slug: z.string().min(1, 'Store slug must have at least 1 character'),
  email: z
    .email('Must be a valid email address')
    .min(1, 'Eamil must have at least 1 character'),
  phone: z.string().min(1, 'Phone number must have at least 1 character'),
  street: z.string().min(1, 'Street Address must have at least 1 character'),
  city: z.string().min(1, 'City must have at least 1 character'),
  state: z.string().min(1, 'State must have at least 1 character'),
  zip: z.string().min(1, 'Zip code must have at least 1 character'),
  country: z.string().min(1, 'Country must have at least 1 character'),
  latitude: z.coerce.number(),
  longitude: z.coerce.number(),
  imageAssetId: z.string(),
  imageAlt: z.string().min(1, 'Image Alt is required for accessiblity'),
  storeHours: z
    .array(
      z.object({
        _key: z.string(),
        _type: z.string(),
        day: z.coerce.number().min(0).max(6),
        openingHours: z.string().min(1, 'Input Opening Hours'),
        closingHours: z.string().min(1, 'Input Closing Hours'),
      }),
    )
    .length(7),
});
/**
 * Validate Stockist Form Input Schema
 */
export type StockistInputSchema = z.input<typeof StockistFormSchema>;
/**
 * Validate Stockist Form Output Schema
 */
export type StockistOutputSchema = z.output<typeof StockistFormSchema>;
/**
 * Validate Stockists Express API
 */
export const StockistSchema = z.object({
  sanityId: z.string().min(1, 'sanity id must have at least 1 character'),
  sanitySlug: z.string().min(1, 'snaity slug must have at least 1 character'),
  name: z.string().min(1, 'store name must have at least 1 character'),
});

/**
 * Validate Team Member Form Schema
 */
export const TeamMemberFormSchema = z.object({
  _id: z.string(),
  name: z.string().min(1, 'Member name must have at least 1 character'),
  slug: z.string().min(1, 'Slug must have at least 1 character'),
  position: z.string().min(1, 'Position must have at least 1 character'),
  imageAssetId: z.string(),
  imageAlt: z.string(),
});
/**
 * Validate Team Member Form input schema
 */
export type TeamMemberInputSchema = z.input<typeof TeamMemberFormSchema>;
/**
 * Validate Team Member Form output schema
 */
export type TeamMemberOutputSchema = z.output<typeof TeamMemberFormSchema>;
