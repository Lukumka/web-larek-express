import type { NextFunction, Request, Response } from 'express';
import NotFoundError from '../errors/not-found-error';
// eslint-disable-next-line max-len
const notFoundMiddleware = (_req: Request, _res: Response, next: NextFunction) => next(new NotFoundError());

export default notFoundMiddleware;
