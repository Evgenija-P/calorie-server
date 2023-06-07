const express = require("express");
const logger = require("morgan");
const { format } = require("date-fns");
const fs = require("fs/promises");
const cors = require("cors");

const productsRouter = require("./src/routes/api/product");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(cors());
app.use(logger(formatsLogger));
app.use(express.json());

console.clear();

app.use(async (req, res, next) => {
  const date = format(new Date(), "dd-MM-yyyy HH:mm");
  await fs.appendFile("./public/server.log", `\n${req.method} ${req.url} ${date}`);

  next();
});

app.use("/api/products", productsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "server error" } = err;
  res.status(status).json({ message });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
