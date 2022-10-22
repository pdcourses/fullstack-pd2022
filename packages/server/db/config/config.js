require('dotenv/config');
module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSW || "postgres",
    database: "superheroes-pd2022",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {},
  production: {}
}
