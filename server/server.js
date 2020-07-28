require("dotenv").config({
  path: "../.env",
});
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");

const app = express();

const relatedRoutes = require("../routes/relatedRoutes");
const febitsRoutes = require("../routes/febitsRoutes");

app.use(morgan("dev"));
app.use(helmet());
app.use(helmet.noSniff());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/:product_id", (req, res) => {
//   res.status(200).sendFile("index");
// });

app.use("/related/febits", febitsRoutes);
app.use("/related", relatedRoutes);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

module.exports = app;
