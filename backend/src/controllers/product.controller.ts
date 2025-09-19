import { NextFunction, Request, Response } from 'express';
import Product from '../models/product.model';
import ConflictError from '../errors/conflict-error';

export const getProducts = (_req:Request, res:Response, _next:NextFunction) => {
  Product.find({})
    .then((products) => {
      res.json({ items: products, total: products.length });
    })
    .catch((err) => {
      throw new ConflictError(err);
    });
};
export const addProduct = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (e) {
    next(e);
  }
};
