import { drizzle } from 'drizzle-orm/node-postgres';
import { relations } from './relations';
import { Pool } from 'pg';
import env, { isProd } from '../lib/env';
import { remember } from '@epic-web/remember';

const createPool = () => {
  return new Pool({
    connectionString: env.DATABASE_URL,
    min: 2,
    max: 20,
  });
};

let client: Pool;

if (isProd()) {
  client = createPool();
} else {
  client = remember('dbPool', () => createPool());
}

const db = drizzle({ client, relations, logger: true });
export default db;
export * from './schema';
