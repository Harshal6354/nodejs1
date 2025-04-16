const { getuser } = require("../services/auth");

async function requestTouserLoggesIn(req, res, next) {
  const userid = req.cookies?.uid;
  if (!userid) return res.redirect("/login");

  const user = getuser(userid);
  if (!user) return res.redirect("/login");
  req.user = user;
  next();
}

module.exports = { requestTouserLoggesIn };
