const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware

app.use(express.json()); // handles application/json
app.use(express.urlencoded({ extended: true })); // handles application/x-www-form-urlencoded

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://harshaldhanavade:Harshal%402003@harshal100.uj40c.mongodb.net/hiper?retryWrites=true&w=majority&appName=Harshal100"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Schema + Model
const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: String,
  gmail: { type: String, required: true, unique: true },
  gender: String,
});
const User = mongoose.model("User", userSchema);

// POST route (with test data)
app.get("/test", async (req, res) => {
  const testUser = {
    firstname: "Harshal",
    lastname: "Dhanavade",
    gmail: "harshal2003@gmail.com",
    gender: "Male",
  };

  try {
    const result = await User.create(testUser);
    res.status(201).json({ msg: "Test User Created", data: result });
  } catch (err) {
    res.status(500).json({ msg: "Error", error: err });
  }
});

// Normal POST route
app.post("/api/user", async (req, res) => {
  const { firstname, lastname, gmail, gender } = req.body;

  if (!firstname || !lastname || !gmail || !gender) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const user = await User.create({ firstname, lastname, gmail, gender });
    return res.status(201).json({ msg: "User created", data: user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Something went wrong", error: err });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
