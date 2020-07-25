require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "related_content",
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
    },
  },

  production: {
    client: "pg",
    connection: {
      database: "related_content",
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
    },
  },

  test: {
    client: "pg",
    connection: {
      database: "related_content",
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
    },
  },
};
