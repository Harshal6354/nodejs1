const mongoose = require("mongoose");

const bookingTicketSchema = new mongoose.Schema({
  seatNo: Number,
  passengerName: String,
  passengerAge: Number,
  passengerGender: String,
  price: { type: Number, required: true },
  bookingDate: { type: Date, default: Date.now },
});

const BookingTicket = mongoose.model("BookingTicket", bookingTicketSchema);

module.exports = BookingTicket;
