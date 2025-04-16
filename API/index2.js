const express = require("express");
const user = require("./MOCK_DATA (1).json");
const fs = require("fs");
const { json } = require("stream/consumers");
const { error } = require("console");
const app = express();
const PORT = 5000;

//middeleware
app.use(express.urlencoded({ extended: false }));

//middleware 2
app.use((req, res, next) => {
  console.log("middelware1");
  const myuser = "Harshal";
  next();
});
//middleware 3
app.use((req, res, next) => {
  console.log("middelware2", myuser);
  next();
});

app.route("/api/user/:id").get((req, res) => {
  const id1 = Number(req.params.id);
  const myuser = user.find((myuser) => myuser.id === id1);
  return res.status(201).json(myuser);
});

// app.get("/api/user", (req, res) => {
//   return res.json(user);
// });

app.route("/api/user").post((req, res) => {
  const body = req.body;
  user.push({ ...body, id: user.length + 1 });
  fs.writeFile("./MOCK_DATA (1).json", JSON.stringify(user), (err, data) => {
    return res.json({ status: "pending2", id: user.length });
  });
});

app.route("/api/user/:id").delete((req, res) => {
  const body = req.body;

  fs.writeFile("./MOCK_DATA (1).json", JSON.stringify(user), (err, data) => {
    return res.json({ status: "pending2", id: user.length });
  });
});

app.listen(PORT, () => {
  console.log("server start2");
});
