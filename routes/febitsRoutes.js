const express = require("express");
const axios = require("axios");

const route = express.Router();

route.get("/", (req, res) => {
  res.status(400).send("A valid ID is required.");
});

route.get("/:product_id", async (req, res) => {
  const { product_id } = req.params;
  try {
    let systemIcons = await getData(
      process.env.OVERVIEW_SERVICE,
      "system_req/platforms/",
      product_id
    );
    const title = await getData(
      process.env.DESC_SERVICE,
      "description/title/",
      product_id
    );
    const thumbnail = await getData(
      process.env.IMAGE_SERVICE,
      "api/",
      `${product_id}?type=cover`
    );
    const priceData = await getData(
      process.env.PRICE_SERVICE,
      "PriceAndPromotion/",
      product_id
    );

    let platforms = systemIcons.platforms.reduce((accum, current) => {
      console.log(accum);
      accum.push(current[2]);

      return accum;
    }, []);

    let os = systemIcons.os.reduce((accum, current) => {
      console.log(accum);
      accum.push(current[2]);

      return accum;
    }, []);

    res.status(200).json({
      product_id,
      platforms,
      os,
      title,
      thumbnail,
      priceData,
    });
  } catch (err) {
    console.log("Error in febits endpoint: ", err);
    res.status(500).send("Unable to process request.");
  }
});

const getData = async (API, endpoint, params) => {
  let response = await axios.get(API + endpoint + params);
  response = response.data;
  delete response.product_id;

  return response;
};

module.exports = route;
