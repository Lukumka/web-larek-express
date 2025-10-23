import { Router } from 'express';
import { addProduct, getProducts } from '../controllers/product.controller';
import ProductSchema from '../validation/product.validation';
import validateBody from '../middlewares/validation';

const ProductRouter = Router();

ProductRouter.get('/', getProducts);
ProductRouter.post('/', validateBody(ProductSchema), addProduct);

export default ProductRouter;
