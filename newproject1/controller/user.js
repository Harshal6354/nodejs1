const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const { setuser } = require("../services/auth");
async function handleUser(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.render("home");
}
async function handleUserlogin(req, res) {
  const { email, password } = req.body;

  const existingUSer = await User.findOne({ email, password });
  if (!existingUSer)
    return res.render("login", {
      err: "invalid user",
    });
  // const sessionid = uuidv4();
  // setuser(sessionid, existingUSer);
  // res.cookie("uid", sessionid);
  const token = setuser(existingUSer);
  res.cookie("token", token);

  return res.render("home");
}

module.exports = { handleUser, handleUserlogin };
