// const url = require("url");

// const fs = require("fs");
// const createServer = require("http");
const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("hello from home page" + "/hello");
});
app.listen(5000, () => console.log("server start"));
console.log(app);
