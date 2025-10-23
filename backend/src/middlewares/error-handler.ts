import { ErrorRequestHandler } from 'express';
import AppError, { ErrorCode } from '../errors/app-error';

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const appErr = err instanceof AppError
    ? err
    : new AppError(500, err.message ?? 'Internal Server Error', ErrorCode.INTERNAL);
  if (!res.headersSent) {
    res.status(appErr.statusCode).json({
      statusCode: appErr.statusCode,
      code: appErr.code,
      message: appErr.message,
      details: appErr.details ?? undefined,
    });
  }
};

export default errorHandler;
