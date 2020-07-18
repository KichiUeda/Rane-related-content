const express = require("express");
const db = require("../db/model");

const route = express.Router();

route.get("/", (req, res) => {
  res.status(400).send("Valid product ID required.");
});

route.get("/:product_id", async (req, res) => {
  let { product_id } = req.params;

  try {
    let relatedProducts = await db.findRelatedProductsByPID(product_id);

    if (!relatedProducts || relatedProducts.length <= 0) {
      return res.status(404).send("Could not find this product.");
    }

    res.status(200).send(relatedProducts);
  } catch (err) {
    console.log("Error getting related products: ", err);
    res.status(500).send("Unable to retrieve related products.");
  }
});

module.exports = route;
