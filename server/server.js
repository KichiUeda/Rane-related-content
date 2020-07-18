const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");

const app = express();
const db = require("../db/model");

app.use(morgan("dev"));
app.use(helmet());
app.use(helmet.noSniff());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("index");
});

app.get("/related", (req, res) => {
  res.status(400).send("Valid product ID required.");
});

app.get("/related/:product_id", async (req, res) => {
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

module.exports = app;
