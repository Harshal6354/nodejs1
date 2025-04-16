const express = require("express");

const router = express.Router();
const {
  handleGenetateUrl,
  getGeneratedUrl,
  getAllhistory,
} = require("../controller/url");

router.post("/", handleGenetateUrl).get("/:id", getGeneratedUrl);
router.get("/analytics", getAllhistory);

module.exports = router;
