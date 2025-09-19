import AppError, { ErrorCode } from './app-error';

export default class ConflictError extends AppError {
  constructor(message:string, details?: unknown) {
    super(409, message, ErrorCode.CONFLICT, details);
  }
}
