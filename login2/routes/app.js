const express = require("express");
const { handleUser } = require("../controller/user");
const { getuser } = require("../controller/user");
const router = express.Router();

/**
 * @swagger
 * /user-login:
 *   post:
 *     summary: User login
 *     tags: [Login/SignUP]
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
 *                 example: harshal@gmail.com
 *               password:
 *                 type: string
 *                 example: 1234
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 token:
 *                   type: string
 *                   example: json-token
 *       400:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid credentials
 *       500:
 *         description: Internal Server Error
 */

router.post("/user-login", getuser);

/**
 * @swagger
 * /user-signin:
 *   post:
 *     summary: User signup (create new user)
 *     tags: [Login/SignUP]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *               - email
 *               - password
 *             properties:
 *               userName:
 *                 type: string
 *                 example: harshal
 *               email:
 *                 type: string
 *                 example: harshal@gmail.com
 *               password:
 *                 type: string
 *                 example: 1234
 *     responses:
 *       200:
 *         description: Signup successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *       400:
 *         description: Email already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Email already exists
 *       500:
 *         description: Internal Server Error
 */

router.post("/user-signin", handleUser);

module.exports = router;
