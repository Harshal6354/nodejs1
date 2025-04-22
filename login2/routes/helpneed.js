const express = require("express");
const helpneed = require("../models/needhelp");

const router5 = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Help:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - message
 *       properties:
 *         name:
 *           type: string
 *           example: Harshal Dhanavade
 *         email:
 *           type: string
 *           example: harshal@example.com
 *         message:
 *           type: string
 *           example: I need help with my booking.
 */

/**
 * @swagger
 * /api/help:
 *   post:
 *     summary: Submit a help query
 *     tags: [Help]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Help'
 *     responses:
 *       201:
 *         description: Successfully submitted
 *       500:
 *         description: Internal server error
 */

router5.post("/api/help", async (req, res) => {
  try {
    const help = new helpneed(req.body);
    await help.save();
    res.status(201).json({ message: "Saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving data", error });
  }
});

module.exports = router5;
