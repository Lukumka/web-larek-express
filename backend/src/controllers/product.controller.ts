import { NextFunction, Request, Response } from 'express';
import Product from '../models/product.model';

export const getProducts = (_req:Request, res:Response, next:NextFunction) => {
  Product.find({})
    .then((products) => {
      res.json({ items: products, total: products.length });
    })
    .catch((err) => next(err));
};
export const addProduct = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};
