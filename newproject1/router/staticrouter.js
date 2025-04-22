const express = require("express");
const Url = require("../models/url");
const User = require("../models/user");
const { restrict } = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  const allurl = await Url.find({ createdBY: req.user._id });
  res.render("home", {
    urls: allurl,
  });
});
router.get("/login", (req, res) => res.render("login"));
module.exports = router;
