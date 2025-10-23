import { Request, Response, NextFunction } from 'express';
import { faker } from '@faker-js/faker';
import { serverLogger } from '../middlewares/logger';

const addOrder = (req:Request, res:Response, _next:NextFunction) => {
  serverLogger.info(req.body);
  res.status(201).send({
    id: faker.string.uuid(),
    total: req.body.total,
  });
};

export default addOrder;
