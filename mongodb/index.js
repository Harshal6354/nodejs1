const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
// Middleware to parse JSON
app.use(express.urlencoded({ extended: true }));

// Schema
const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true, unique: true },
  gender: { type: String },
});

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://harshaldhanavade:Harshal%402003@harshal100.uj40c.mongodb.net/myDB?retryWrites=true&w=majority&appName=Harshal100/hiper"
  )
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

// Model
const User = mongoose.model("User", userSchema);

app.get("/api/user", async (req, res) => {
  try {
    const alluser = await User.find({});

    const html = `
        <ul>
          ${alluser.map((user) => `<li>${user.email}</li>`).join("")}
        </ul>
      `;

    res.send(html); // Important!
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching users");
  }
});

// POST Route
app.post("/api/user/p", async (req, res) => {
  const body = req.body;

  if (!body.firsttname || !body.lastname || !body.Gender || !body.email) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const result = await User.create({
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      gender: body.Gender,
    });
    console.log(result);
    return res.status(201).json({ msg: "Success", data: result });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Something went wrong", error: err });
  }
});

// Start Server
app.listen(5000, () => console.log("Server started on port 5000"));
