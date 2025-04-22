const express = require("express");
const path=require("path")
const app = express();
const PORT = 3000;
app.set("view engine","ejs")

app.set("views","./views")
app.get("/", (req, res) => {
  return res.json({ message: "success" });
});

app.listen(PORT, () => console.log(`server start port:${PORT}`));
