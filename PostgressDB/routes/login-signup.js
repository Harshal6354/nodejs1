const express = require("express");
const {
  LoginData,
  SignUpData,
  Deletedata,
} = require("../controllers/login_signup");
const router_login_signUp = express.Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Add a new user
 *     tags: [signup_login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student added successfully
 */
router_login_signUp.post("/signup", SignUpData);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Add a new user
 *     tags: [signup_login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student added successfully
 */
router_login_signUp.post("/login", LoginData);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [signup_login]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router_login_signUp.delete("/user/:id", Deletedata);

module.exports = router_login_signUp;
