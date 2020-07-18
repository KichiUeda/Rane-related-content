const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(helmet.noSniff());
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.status(200).send("index");
});

app.get("/related/:product_id", (req, res) => {
  let { product_id } = req.params;

  res.status(200).send({ product_id });
});

module.exports = app;
