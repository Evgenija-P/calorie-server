const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");
const { emailRegex, userNameRegexp, passwordRegexp } = require("../helpers/regExps");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      match: userNameRegexp,
    },
    email: { type: String, required: true, match: emailRegex, unique: true },
    password: { type: String, required: true, match: passwordRegexp },
    token: {
      type: String,
      default: "",
    },
    verify: {
      type: Boolean,
      default: true,
    },
    verificationToken: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().pattern(passwordRegexp).min(6).max(10).required(),
});

const loginUserSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().pattern(passwordRegexp).min(6).max(10).required(),
});

const schemas = {
  registerUserSchema,
  loginUserSchema,
};

const User = model("user", userSchema);

module.exports = { User, schemas };
