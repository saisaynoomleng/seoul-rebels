import { createAuthClient } from 'better-auth/client';
import { env } from './env/client-env';

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_API,
});

export const { signIn, signUp, useSession } = createAuthClient();
