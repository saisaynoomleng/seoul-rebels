import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import db from '../db';
import * as schema from '../db/schema';
import { admin, username } from 'better-auth/plugins';
import env from './env';

const trustedOrigins = env.ALLOWED_ORIGINS.split(',');

export const auth = betterAuth({
  appName: 'Seoul Rebels',

  baseURL: {
    allowedHosts: [env.ADMIN_APP_URL, env.WEB_APP_URL],
    protocol: 'http',
    fallback: env.BETTER_AUTH_URL,
  },

  secret: env.BETTER_AUTH_SECRET,

  database: drizzleAdapter(db, {
    provider: 'pg',
    usePlural: true,
    schema: {
      ...schema,
      users: schema.UsersTable,
      sessions: schema.SessionsTable,
      accounts: schema.AccountsTable,
      verifications: schema.VerificationTable,
    },
  }),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    minPasswordLength: 8,
    maxPasswordLength: 16,
    autoSignIn: true,
    sendResetPassword: async ({ user, url, token }) => {
      //send reset password email
    },
    resetPasswordTokenExpiresIn: 3600,
  },

  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }) => {
      //send verification email to user
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 3600,
  },

  plugins: [username(), admin()],

  trustedOrigins,

  advanced: {
    useSecureCookies: false,
    database: {
      generateId: 'uuid',
    },
  },

  experimental: {
    joins: false,
  },
});
