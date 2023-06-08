const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const validateId = (req, res, next) => {
  const id = req.params.id;
  console.log("validateId", id);

  if (!isValidObjectId(id)) {
    next(HttpError(400, `${id} is not correct id format`));
  }
  next();
};

module.exports = validateId;
