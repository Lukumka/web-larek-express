import expressWinston from 'express-winston';
import winston, { createLogger, format } from 'winston';

export const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: 'request.log' }),
  ],
  format: winston.format.json(),
});

export const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: 'error.log' }),
  ],
  format: winston.format.json(),
});

export const serverLogger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'HH:mm:ss' }),
    format.colorize(),
    format.printf((info) => {
      const { level, timestamp } = info as any;
      const text = (info as any).stack ?? (info as any).message ?? (info as any).msg ?? '';
      return `[${timestamp}] ${level}: ${text}`;
    }),
  ),
  transports: [
    new winston.transports.Console(),
  ],
});
