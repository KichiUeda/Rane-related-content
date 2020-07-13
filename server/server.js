const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(helmet.noSniff());
app.use(express.static(path.resolve(__dirname, "../public")));

app.get("/", (req, res) => {
  res.status(200).send("index");
});

module.exports = app;
