import mongoose from 'mongoose';
import { serverLogger } from './middlewares/logger';
import config from './config';

async function connectDB() {
  try {
    await mongoose.connect(config.DB_ADDRESS);
    serverLogger.info('Connected to MongoDB');
  } catch (error) {
    serverLogger.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

export default connectDB;
