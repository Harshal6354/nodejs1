const Bus = require("../models/Bus");
const express = require("express");

const router3bus = express.Router();

// Get all buses
/**
 * @swagger
 * tags:
 *   name: Buses
 *   description: Bus management
 */

/**
 * @swagger
 * /api/buses:
 *   get:
 *     summary: Get all buses
 *     tags: [Buses]
 *     responses:
 *       200:
 *         description: List of buses
 */

router3bus.get("/", async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching buses", error });
  }
});

// Search buses
/**
 * @swagger
 * /api/buses/search:
 *   get:
 *     summary: Search buses by source and destination
 *     tags: [Buses]
 *     parameters:
 *       - in: query
 *         name: from
 *         schema:
 *           type: string
 *         required: true
 *         description: Source location
 *       - in: query
 *         name: to
 *         schema:
 *           type: string
 *         required: true
 *         description: Destination location
 *     responses:
 *       200:
 *         description: List of matching buses
 *       400:
 *         description: Missing parameters
 */
router3bus.get("/search", async (req, res) => {
  const { from, to } = req.query;
  if (!from || !to) return res.status(400).json({ msg: "Missing parameters" });

  try {
    const buses = await Bus.find({
      fromLocation: { $regex: new RegExp(from, "i") },
      toLocation: { $regex: new RegExp(to, "i") },
    });
    res.json(buses);
  } catch (error) {
    res.status(500).json({ msg: "Error searching buses", error });
  }
});

module.exports = router3bus;
