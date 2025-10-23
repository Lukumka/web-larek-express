import AppError, { ErrorCode } from './app-error';

export default class ConflictError extends AppError {
  constructor(details?: unknown, message = 'Duplicate key') {
    super(409, message, ErrorCode.CONFLICT, details);
  }
}
