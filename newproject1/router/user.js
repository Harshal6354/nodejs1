const express = require("express");
const router2 = express.Router();
const { handleUser, handleUserlogin } = require("../controller/user");

router2.get("/", (req, res) => {
  return res.render("signup");
});
router2.post("/register", handleUser);
router2.post("/login", handleUserlogin);

module.exports = router2;
