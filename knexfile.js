require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "related_content",
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
    },
    migrations: {
      tableName: "related_content",
    },
  },

  production: {
    client: "pg",
    connection: {
      database: "related_content",
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
    },
    migrations: {
      tableName: "related_content",
    },
  },
};
