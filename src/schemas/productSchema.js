const Joi = require("joi");

const productSchema = Joi.object({
  title: Joi.string().required(),
  squirrels: Joi.number().required(),
  fats: Joi.number().required(),
  carbohydrates: Joi.number().required(),
  kcal: Joi.number().required(),
});

module.exports = productSchema;
