const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
  open: Boolean,
});

export default mongoose.model("FAQ", faqSchema);
