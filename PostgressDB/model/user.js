const { Sequelize } = require("sequelize");
const sequelize = require("../db");

const UserData = sequelize.define("student2", {
  name: Sequelize.STRING,
  Rollno: Sequelize.INTEGER,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

sequelize.sync({ force: true }); // Creates table if not exists

module.exports = UserData;
