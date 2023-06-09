const express = require("express");

const { validateBody, validateId, authenticate } = require("../../middlewares");

const ctrl = require("../../controllers/products/products");
const { schemas } = require("../../models/product");

const validate = validateBody(schemas.addProductSchema);
const validateFavorite = validateBody(schemas.updateProductFavoriteSchema);

const router = express.Router();

//all, not authorized
router.get("/", ctrl.getAll);

//only authorized
router.get("/userproducts", authenticate, ctrl.getUserProduct);

router.post("/userproducts", authenticate, validate, ctrl.add);

router.delete("/userproducts/:id", authenticate, validateId, ctrl.remove);

router.put("/userproducts/:id", authenticate, validateId, validate, ctrl.updateById);

router.patch("/userproducts/:id/favorite", authenticate, validateId, validateFavorite, ctrl.updateFavorite);

router.get("/:id", validateId, ctrl.getById);

module.exports = router;
