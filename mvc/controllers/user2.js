const User = require("../models/user");

async function handlealluser(req, res) {
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
}

async function handlealluserpost(req, res) {
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
}
module.exports = { handlealluser, handlealluserpost };
