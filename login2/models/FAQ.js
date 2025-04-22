const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
  open: Boolean,
});

const FAQ = mongoose.model("FAQ", faqSchema);

module.exports = FAQ;
