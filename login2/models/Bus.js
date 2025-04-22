const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  price: Number,
  totalSeats: Number,
  availableSeat: Number,
  arrivalTime: String,
  departureTime: String,
  scheduleID: Number,
  busName: String,
  fromLocation: String,
  toLocation: String,
  rating: Number,
});

const Bus = mongoose.model("Bus", busSchema);

module.exports = Bus;
