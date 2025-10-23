import 'dotenv/config';

const config = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: process.env.PORT ?? '3000',
  DB_ADDRESS: process.env.DB_ADDRESS ?? 'mongodb://localhost:27017',
} as const;

export default config;
