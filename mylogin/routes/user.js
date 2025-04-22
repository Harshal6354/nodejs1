const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 */
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  console.log("SignIn:", email, password);
  res.send(`User ${email} signed in successfully`);
});

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (email === "harshal@example.com" && password === "123456") {
    return res
      .status(200)
      .json({ message: `User ${email} logged in successfully` });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
