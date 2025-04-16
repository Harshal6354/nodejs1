const express = require("express");
const user = require("./MOCK_DATA (1).json");
const app = express();
const PORT = 5000;

app.route("/api/user/:id").get((req, res) => {
  const id1 = Number(req.params.id);
  const myuser = user.find((myuser) => myuser.id === id1);
  return res.status(201).json(myuser);
});

app.route("/api/user/:id").post((req, res) => {});

app.listen(PORT, () => console.log("server start"));
