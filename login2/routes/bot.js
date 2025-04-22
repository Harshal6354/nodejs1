const express = require("express");

const router2 = express.Router();
const { handleChat } = require("../controller/user");
/**
 * @swagger
 * /chat:
 *   post:
 *     summary: Ask a question to the bus booking chatbot
 *     tags: [chat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 example: "How can I book a ticket?"
 *     responses:
 *       200:
 *         description: Bot's reply
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reply:
 *                   type: string
 *                   example: "You can book your bus ticket from our website under the Book Now section."
 */
router2.post("/", handleChat);

module.exports = router2;
