const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.status(400).send("A valid ID is required.");
});

route.get("/:product_id", (req, res) => {});

module.exports = route;
