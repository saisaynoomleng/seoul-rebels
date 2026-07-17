import { createEnv } from '@t3-oss/env-nextjs';
import * as z from 'zod';

export const env = createEnv({
  emptyStringAsUndefined: true,
  server: {
    LOGO_WHITE_URL: z
      .url('Must be a valid URL')
      .startsWith('https://cdn.sanity.io/images/'),
    LOGO_BLACK_URL: z
      .url('Must be a valid URL')
      .startsWith('https://cdn.sanity.io/images/'),
    SANITY_READ_TOKEN: z
      .string()
      .min(1, 'Sanity read token must have at least 1 character'),
    SANITY_WRITE_TOKEN: z
      .string()
      .min(1, 'Sanity Write token must have at least 1 character'),
  },
  runtimeEnv: {
    LOGO_WHITE_URL: process.env.LOGO_WHITE_URL,
    LOGO_BLACK_URL: process.env.LOGO_BLACK_URL,
    SANITY_READ_TOKEN: process.env.SANITY_READ_TOKEN,
    SANITY_WRITE_TOKEN: process.env.SANITY_WRITE_TOKEN,
  },
});
