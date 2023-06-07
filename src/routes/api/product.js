const express = require("express");

const { validateBody } = require("../../middlewares");

const ctrl = require("../../controllers/products/products");
const { productSchema } = require("../../schemas");

const validate = validateBody(productSchema);

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:productId", ctrl.getById);

router.post("/", validate, ctrl.add);

router.delete("/:productId", ctrl.remove);

router.put("/:productId", validate, ctrl.update);

module.exports = router;
