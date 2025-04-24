const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db");

const Signupdata = sequelize.define(
  "login",
  {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

sequelize.sync({ alter: true });
module.exports = Signupdata;
