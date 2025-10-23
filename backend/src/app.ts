import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import productRouter from './routes/product.router';
import orderRouter from './routes/order.router';
import { errorLogger, requestLogger, serverLogger } from './middlewares/logger';
import connectDB from './db';
import errorHandler from './middlewares/error-handler';
import errorNormalizer from './middlewares/error-normalizer';
import config from './config';
import notFoundMiddleware from './middlewares/not-found-middleware';

dotenv.config();

const app = express();
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname, 'public')));
app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use('*', notFoundMiddleware);

app.use(errorNormalizer);
app.use(errorLogger);
app.use(errorHandler);

connectDB()
  .then(() => {
    app.listen(config.PORT, () => {
      serverLogger.info(`Server running on port ${config.PORT}`);
    });
  });
