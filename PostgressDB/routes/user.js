const express = require("express");
const { userdata, getdata } = require("../controllers/user");
const router1 = express.Router();

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Add a new student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - rollno
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               rollno:
 *                 type: integer
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student added successfully
 */
router1.post("/students", userdata); // Correct path for adding student

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     description: This endpoint retrieves all students from the database.
 *     responses:
 *       200:
 *         description: A list of students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   rollno:
 *                     type: integer
 *                   password:
 *                     type: string
 *       500:
 *         description: Server error
 */
router1.get("/students", getdata); // Correct path for getting all students

module.exports = router1;
