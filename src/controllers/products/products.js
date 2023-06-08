const { Product } = require("../../models/product");
const { HttpError, ctrlWrapper } = require("../../helpers");

const getAll = async (req, res) => {
  const result = await Product.find();
  res.json(result);
};

const getById = async (req, res) => {
  const id = req.params.id;
  const result = await Product.findById(id);
  if (result === null) {
    throw HttpError(404);
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await Product.create(req.body);
  res.status(201).json(result);
};

const remove = async (req, res) => {
  const result = await Product.findByIdAndRemove(req.params.id);
  if (!result) {
    throw HttpError(404);
  }
  res.json({ message: "Delete complited" });
};

const updateById = async (req, res) => {
  const result = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const updateFavorite = async (req, res) => {
  const result = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
};
