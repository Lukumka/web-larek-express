import { Router } from 'express';
import addOrder from '../controllers/order.controller';
import validateBody from '../middlewares/validation';
import OrderSchema from '../validation/order.validation';

const orderRouter = Router();

orderRouter.post('/', validateBody(OrderSchema), addOrder);

export default orderRouter;
