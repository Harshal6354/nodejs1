const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect(
  "mongodb+srv://harshaldhanavade:Harshal%402003@harshal100.uj40c.mongodb.net/hiper"
);
const userschema = new mongoose.Schema({
  name: String,
  rollno: Number,
});

const usermodel = mongoose.model("emp2", userschema);
const emp2 = new usermodel({
  name: "harshal",
  rollno: 29,
});
emp2.save();

app.listen(3000, () => console.log("server start"));
