const express = require("express");
const { connection } = require("./connection");
const { checkauthrization, restrict } = require("./middleware/auth");
const path = require("path");
const PORT = 8000;
const app = express();
const { requestTouserLoggesIn } = require("./middleware/auth");
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
const staticrouter = require("./router/staticrouter");
const router = require("./router/url");
const router2 = require("./router/user");
const Url = require("./models/url");
const { url } = require("inspector");
const cookieparser = require("cookie-parser");
app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({ extended: false }));
app.use(checkauthrization);
connection(
  "mongodb+srv://harshaldhanavade:Harshal%402003@harshal100.uj40c.mongodb.net/G3"
)
  .then(() => console.log("connection succes"))
  .catch((err) => console.log(err));

app.use("/url", restrict(["NORMAL"]), router);
app.use("/user", router2);
app.use("/", staticrouter);
app.get("/test", async (req, res) => {
  const allurl = Url.findOne({ allurl });
  return res.render("home", { urls: allurl });
});

app.listen(PORT, () => console.log(`server port:${PORT} started`));
