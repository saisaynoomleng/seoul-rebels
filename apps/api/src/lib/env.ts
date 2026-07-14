import dotenv from 'dotenv';
import * as z from 'zod';

process.env.APP_STAGE = process.env.APP_STAGE || 'dev';

const isDevelopment = process.env.APP_STAGE === 'dev';

dotenv.config({
  path: isDevelopment ? '.env' : '.env.test',
});

const schema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  APP_STAGE: z.enum(['dev', 'production', 'text']).default('dev'),

  PORT: z.coerce.number().default(8000),
  DATABASE_URL: z
    .string()
    .min(1, 'Database URL must have at least 1 character')
    .startsWith('postgresql://neondb_owner:'),
  ALLOWED_ORIGINS: z.string(),

  BETTER_AUTH_SECRET: z
    .string()
    .min(1, 'Better Auth secret must have at least 1 character')
    .max(32, 'Better Auth secret cannot exceeds 32 characters'),
  BETTER_AUTH_URL: z.url().default('http://localhost:8000'),

  LOG_LEVEL: z.string(),

  RATE_LIMIT_WINDOW: z.coerce.number(),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number(),
});

type Env = z.infer<typeof schema>;

let env: Env;

try {
  env = schema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.log('Invalid Env Var');

    error.issues.forEach((e) => {
      const path = e.path.join('.');

      console.log(`${path}: ${e.message}`);
    });

    process.exit(1);
  }

  throw error;
}

export const isProd = () => process.env.APP_STAGE === 'production';
export const isDev = () => process.env.APP_STAGE === 'dev';
export const isTest = () => process.env.APP_STAGE === 'test';

export default env;
