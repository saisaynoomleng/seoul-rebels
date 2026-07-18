import { createEnv } from '@t3-oss/env-nextjs';
import * as z from 'zod';

export const env = createEnv({
  emptyStringAsUndefined: true,
  client: {
    NEXT_PUBLIC_SANITY_DATASET: z
      .string()
      .min(1, 'Sanity Dataset must have at least 1 character'),
    NEXT_PUBLIC_SANITY_PROJECT_ID: z
      .string()
      .min(1, 'Sanity Project ID must have at least 1 character'),
    NEXT_PUBLIC_SANITY_API_VERSION: z
      .string()
      .min(1, 'Sanity API Version must have at least 1 character'),
    NEXT_PUBLIC_API_URL: z.url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});
