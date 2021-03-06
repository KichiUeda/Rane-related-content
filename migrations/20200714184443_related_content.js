exports.up = async (knex) => {
  await knex.schema.createTable("related_id_join", (tbl) => {
    tbl.increments();
    tbl.integer("product_id");
    tbl.integer("related_id");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("related_id_join");
};
