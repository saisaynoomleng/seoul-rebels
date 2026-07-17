import { env } from '@/lib/env/server-env';
import { client } from './client';

const token = env.SANITY_WRITE_TOKEN;

export const writeClient = client.withConfig({
  token,
  useCdn: false,
});
