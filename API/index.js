const express = require("express");
const user = require("./MOCK_DATA (1).json");
const app = express();
const PORT = 5000;

app.get("/user", (req, res) => {
  const html = `
    <ul>
    ${user.map((user) => `<li>${user.email}`)}</li>`;

  res.send(html);
});

app.get("/api/user", (req, res) => {
  res.setHeader("Myname", "harshal");
  return res.status(201).json(user);
});

app.get("/api/user/:id", (req, res) => {
  const id1 = Number(req.params.id);
  const myuser = user.find((myuser) => myuser.id === id1);
  if (!myuser) {
    return res.status(403).json({ message: "User not found" });
  }

  return res.json(myuser);
});
// app.post("/api/user", (req, res) => {
//   //   const id1 = Number(req.params.id);
//   //   const myuser = user.find((myuser) => myuser.id === id1);
//   return res.json({ status: "pending" });
// });

app.listen(PORT, () => console.log("SERVER STARTED"));
