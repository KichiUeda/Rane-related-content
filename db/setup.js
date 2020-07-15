require("dotenv").config();

let knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
  },
});

knex.raw("CREATE DATABASE related_content").then(() => {
  knex.destroy();
});
