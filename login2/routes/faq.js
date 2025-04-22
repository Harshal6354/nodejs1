const express = require("express");
const FAQ = require("../models/FAQ.js");

const router4 = express.Router();

// Get all FAQs
/**
 * @swagger
 * tags:
 *   name: FAQs
 *   description: FAQ management
 */

/**
 * @swagger
 * /api/faqs:
 *   get:
 *     summary: Get all FAQs
 *     tags: [FAQs]
 *     responses:
 *       200:
 *         description: List of FAQs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   question:
 *                     type: string
 *                   answer:
 *                     type: string
 *                   open:
 *                     type: boolean
 *                   __v:
 *                     type: number
 */
router4.get("/", async (req, res) => {
  const faqs = await FAQ.find();
  res.json(faqs);
});

// Add a new question (no answer yet)
/**
 * @swagger
 * /api/faqs:
 *   post:
 *     summary: Add a new FAQ question
 *     tags: [FAQs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *             properties:
 *               question:
 *                 type: string
 *     responses:
 *       200:
 *         description: Question submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                 faq:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     question:
 *                       type: string
 *                     answer:
 *                       type: string
 *                     open:
 *                       type: boolean
 *                     __v:
 *                       type: number
 */
router4.post("/", async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ msg: "Question is required" });

  const faq = new FAQ({ question, answer: "", open: false });
  await faq.save();
  res.json({ msg: "Question submitted successfully", faq });
});

module.exports = router4;
