const BookingTicket = require("../models/ticket");
const express = require("express");
const ticketrouter = express.Router();
/**
 * @swagger
 * /api/saveBooking:
 *   post:
 *     summary: Save booked tickets to the database
 *     description: This endpoint receives booked ticket data and saves it to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookedTickets:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     seatNo:
 *                       type: integer
 *                     passengerName:
 *                       type: string
 *                     passengerAge:
 *                       type: integer
 *                     passengerGender:
 *                       type: string
 *               totalAmount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server Error
 */
ticketrouter.post("/api/saveBooking", async (req, res) => {
  try {
    const { bookedTickets, totalAmount } = req.body;

    // Create a new booking ticket record
    const tickets = bookedTickets.map((ticket) => ({
      seatNo: ticket.seat,
      passengerName: ticket.passenger?.name,
      passengerAge: ticket.passenger?.age,
      passengerGender: ticket.passenger?.gender,
      price: totalAmount,
    }));

    const result = await BookingTicket.insertMany(tickets);

    res
      .status(200)
      .json({ message: "Booking details saved successfully!", result });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to save booking details", error: err.message });
  }
});

module.exports = ticketrouter;
