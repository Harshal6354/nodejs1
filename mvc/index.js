require("dotenv").config();

const userRouter = require("./routes/user");
const { connectiondb } = require("./connection");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
// Middleware to parse JSON
app.use(express.urlencoded({ extended: true }));

connectiondb(
  "mongodb+srv://harshaldhanavade:Harshal%402003@harshal100.uj40c.mongodb.net/Mongodb?retryWrites=true&w=majority&appName=Harshal100"
).then(() => console.log("server start"));
// MongoDB Connection

app.use("/api/user", userRouter);

// Start Server
app.listen(5000, () => console.log("Server started on port 5000"));
