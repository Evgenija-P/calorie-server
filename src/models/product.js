const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const categoryName = [
  "Каши",
  "Мясные продукты",
  "Птица",
  "Рыба",
  "Морепродукты",
  "Овощи",
  "Фрукты",
  "Зелень",
  "Ягоды",
  "Грибы",
  "Масло, маргарин, жиры",
  "Молочные продукты",
  "Яйца",
  "Колбаса и колбасные изделия",
  "Орехи",
  "Сухофрукты",
  "Сладости",
  "Хлебобулочные изделия",
  "Безалкогольные напитки",
];
const productSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 30,
    },
    protein: {
      type: Number,
      required: true,
      maxlength: 6,
    },
    fats: {
      type: Number,
      required: true,
      maxlength: 6,
    },
    carbohydrates: {
      type: Number,
      required: true,
      maxlength: 6,
    },
    kcal: {
      type: Number,
      required: true,
      maxlength: 6,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      required: true,
      enum: categoryName,
    },
  },
  { versionKey: false, timestamps: true }
);
productSchema.post("save", handleMongooseError);

const addProductSchema = Joi.object({
  title: Joi.string().required(),
  protein: Joi.number().required(),
  fats: Joi.number().required(),
  carbohydrates: Joi.number().required(),
  kcal: Joi.number().required(),
  favorite: Joi.boolean(),
  category: Joi.string()
    .valid(...categoryName)
    .required(),
});

const updateProductFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addProductSchema,
  updateProductFavoriteSchema,
};

const Product = model("product", productSchema);

module.exports = { Product, schemas };
