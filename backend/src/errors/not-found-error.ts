import AppError, { ErrorCode } from './app-error';

export default class NotFoundError extends AppError {
  constructor(details?: unknown, message = 'The requested resource was not found') {
    super(404, message, ErrorCode.NOT_FOUND, details);
  }
}
