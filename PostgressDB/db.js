// const { Pool } = require("pg");

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "mydb2",
//   password: "Harshal@158",
//   port: 5432,
// });

// module.exports = pool;
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mydb2", "postgres", "Harshal@158", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  logging: false, //  disables the verbose SQL logging
});

sequelize
  .authenticate()
  .then(() => console.log(" DB connected"))
  .catch((err) => console.error(" DB connection failed:", err));

module.exports = sequelize;
