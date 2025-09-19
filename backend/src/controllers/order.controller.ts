import { Request, Response, NextFunction } from 'express';
import { faker } from '@faker-js/faker';

const addOrder = (req:Request, res:Response, _next:NextFunction) => {
  res.status(201).send({
    id: faker.string.uuid(),
    total: req.body.total,
  });
};

export default addOrder;
