const products = require("../../models/products");
const { HttpError, ctrlWrapper } = require("../../helpers");

const getAll = async (req, res) => {
  const result = await products.getAllProducts();
  res.json(result);
};

const getById = async (req, res) => {
  const result = await products.getProductById(req.params.productId);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await products.addProduct(req.body);
  res.status(201).json(result);
};

const remove = async (req, res) => {
  const result = await products.removeProductById(req.params.productId);
  if (!result) {
    throw HttpError(404);
  }
  res.json({ message: "Delete complited" });
};

const update = async (req, res) => {
  const result = await products.updateProductById(req.params.productId, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  remove: ctrlWrapper(remove),
  update: ctrlWrapper(update),
};
