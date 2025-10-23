import { Joi } from 'celebrate';

const ProductSchema = Joi.object({
  title: Joi.string().min(2).max(30).required(),
  image: Joi.object({
    fileName: Joi.string().required(),
    originalName: Joi.string().required(),
  }),
  category: Joi.string().required(),
  description: Joi.string().optional(),
  price: Joi.number().allow(null).optional(),
});

export default ProductSchema;
