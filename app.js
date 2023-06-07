const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const productsRouter = require("./src/routes/api/product");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(cors());
app.use(logger(formatsLogger));
app.use(express.json());

// console.clear();

app.use("/api/products", productsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "server error" } = err;
  res.status(status).json({ message });
});

// app.listen(3000, () => {
//   console.log("Example app listening on port 3000!");
// });

//cG2Rrbzs@59Ed_J

module.exports = app;
