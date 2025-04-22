const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "mysecret"; // Store this securely in environment variables

// Sign up user
async function handleUser(req, res) {
  try {
    const { userName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if (!userName || !email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "Missing required fields" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    // Respond with success
    return res.json({ message: "success", user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
}

// Login user
async function getuser(req, res) {
  try {
    const { email, password } = req.body;

    // Find user by email
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare password with hashed password
    const match = await bcrypt.compare(password, existingUser.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Respond with success and token
    return res.json({ message: "Login successful", token, user: existingUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
}

// Controller to handle chatbot questions
const handleChat = (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ message: "Question is required" });
  }

  // Process the question (you can replace this logic with your chatbot's response mechanism)
  let answer = "";

  if (question.toLowerCase().includes("book")) {
    answer =
      "To book a bus, please provide your destination and date of travel.";
  } else if (question.toLowerCase().includes("route")) {
    answer =
      "Our buses travel on several routes. Please specify your origin and destination.";
  } else if (question.toLowerCase().includes("")) {
    answer = "enter your question";
  } else {
    answer =
      "Sorry, I did not understand your question. Can you please clarify?";
  }

  // Respond with the chatbot answer
  res.json({ answer });
};

module.exports = { handleUser, getuser, handleChat };
