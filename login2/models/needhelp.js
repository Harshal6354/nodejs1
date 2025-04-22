const mongoose = require("mongoose");

const helpSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const helpneed = mongoose.model("Helpneed", helpSchema);

module.exports = helpneed;
