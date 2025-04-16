const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { handlealluser, handlealluserpost } = require("../controllers/user2");

router.get("/", handlealluser).post("/p", handlealluserpost);

module.exports = router;
