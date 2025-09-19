import { celebrate, Joi, Segments } from 'celebrate';
import type { RequestHandler } from 'express';

const validateBody = <T>(schema: Joi.ObjectSchema<T>): RequestHandler => (
  celebrate({
    [Segments.BODY]: schema,
  })
);

export default validateBody;
