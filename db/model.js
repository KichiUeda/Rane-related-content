const config = require("../knexfile");
const knex = require("knex")(config[process.env.NODE_ENV]);

let findRelatedProductsByPID = async (product_id) => {
  let relatedProducts = await knex("related_id_join")
    .select("related_id")
    .where({ product_id });

  relatedProducts = relatedProducts.map((prod) => prod.related_id);

  return relatedProducts;
};

module.exports = {
  findRelatedProductsByPID,
};
