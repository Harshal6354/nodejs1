const { Sequelize } = require("sequelize");
const sequelize = require("../db");

const logindata = sequelize.define(
  "login",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "logins",
    timestamps: false, // If you're not using createdAt/updatedAt columns
  }
);

sequelize.sync({ force: true }); // Creates table if not exists
module.exports = logindata;
