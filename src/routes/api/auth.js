const express = require("express");
const router = express.Router();
const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/users");
const ctrl = require("../../controllers/users/auth");

const validate = validateBody(schemas.registerUserSchema);

const validateLogin = validateBody(schemas.loginUserSchema);

router.post("/register", validate, ctrl.register);

router.post("/login", validateLogin, ctrl.login);

router.post("/logout", validateLogin, ctrl.logout);

router.get("/current", authenticate, ctrl.current);

module.exports = router;
