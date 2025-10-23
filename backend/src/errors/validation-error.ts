import AppError, { ErrorCode } from './app-error';

export default class ValidationError extends AppError {
  constructor(details?: unknown, message = 'Invalid request body') {
    super(422, message, ErrorCode.VALIDATION_ERROR, details);
  }
}
