const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: String,
  squirrels: Number,
  fats: Number,
  carbohydrates: Number,
  kcal: Number,
});

const Product = model("product", bookSchema);

module.exports = Product;
