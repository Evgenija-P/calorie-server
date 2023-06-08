const express = require("express");

const { validateBody, validateId } = require("../../middlewares");

const ctrl = require("../../controllers/products/products");
const { schemas } = require("../../models/product");

const validate = validateBody(schemas.addProductSchema);
const validateFavorite = validateBody(schemas.updateProductFavoriteSchema);

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", validateId, ctrl.getById);

router.post("/", validate, ctrl.add);

router.delete("/:id", validateId, ctrl.remove);

router.put("/:id", validateId, validate, ctrl.updateById);

router.patch("/:id/favorite", validateId, validateFavorite, ctrl.updateFavorite);

module.exports = router;
