const { model } = require("mongoose");
const jwt = require("jsonwebtoken");
const secret = "harshal@1234";
// const SessionidTOmap = new Map();

// function setuser(id, user) {
//   SessionidTOmap.set(id, user);
// }4
function setuser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  );
}

function getuser(token) {
  if (!token) return null;
  return jwt.verify(token, secret);
}

module.exports = { setuser, getuser };
