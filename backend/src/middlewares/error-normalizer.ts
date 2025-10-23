import { ErrorRequestHandler, NextFunction } from 'express';
import { isCelebrateError } from 'celebrate';
import ValidationError from '../errors/validation-error';
import ConflictError from '../errors/conflict-error';

const errorNormalizer: ErrorRequestHandler = (err, _req, _res, next: NextFunction) => {
  if (isCelebrateError(err)) {
    const errors = [...err.details].flatMap(([, je]) => (
      je.details.map((d) => ({ path: d.path, message: d.message, type: d.type }))
    ));
    return next(new ValidationError(errors));
  }
  if (err.message.includes('E11000')) {
    return next(new ConflictError(err));
  }
  return next(err);
};

export default errorNormalizer;
