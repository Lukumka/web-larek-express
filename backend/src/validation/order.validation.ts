import { Joi } from 'celebrate';

const OrderSchema = Joi.object({
  items: Joi.array()
    .items(Joi.string().length(24).hex()) // ObjectId
    .min(1)
    .required(),
  total: Joi.number().integer().positive().required(),
  payment: Joi.string().valid('card', 'online').required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  phone: Joi.string().min(5),
  address: Joi.string().min(1).required(),
});

export default OrderSchema;
