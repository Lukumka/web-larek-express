import { ErrorRequestHandler } from 'express';
import { isCelebrateError } from 'celebrate';
import ValidationError from '../errors/validation-error';
import ConflictError from '../errors/conflict-error';

const errorNormalizer: ErrorRequestHandler = (err, _req, _res, _next) => {
  if (isCelebrateError(err)) {
    const errors = [...err.details].flatMap(([, je]) => (
      je.details.map((d) => ({ path: d.path, message: d.message, type: d.type }))
    ));
    throw new ValidationError(errors);
  }
  if (err.message.includes('E11000')) {
    throw new ConflictError('Duplicate key', err);
  }
};

export default errorNormalizer;
