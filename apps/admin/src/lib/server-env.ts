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
  },
  runtimeEnv: {
    LOGO_WHITE_URL: process.env.LOGO_WHITE_URL,
    LOGO_BLACK_URL: process.env.LOGO_BLACK_URL,
  },
});
