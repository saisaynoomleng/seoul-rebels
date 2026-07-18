import express, { type Express } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import env, { isTest } from './lib/env';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';

import { router as StoreRouter } from './routes/stores.route';

const allowedOrigins = env.ALLOWED_ORIGINS.split(',');

const app: Express = express();

app.use('/api/auth/{*any}', toNodeHandler(auth));

app.use(helmet());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
app.use(
  morgan('dev', {
    skip: () => isTest(),
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  return res.json({ message: 'Health Check!' });
});

app.use('/api/stores', StoreRouter);

app.use((req, res) => {
  return res.status(404).json({ message: 'Route not allowed!' });
});

export default app;
