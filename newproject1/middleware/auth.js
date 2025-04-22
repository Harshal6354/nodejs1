const { getuser } = require("../services/auth");

function checkauthrization(req, res, next) {
  const tokencookie = req.cookies?.token;
  req.user = null;
  if (!tokencookie) {
    return next();
  }
  const token = tokencookie;
  const user = getuser(token);
  res.user = user;
  return next();
}
// async function requestTouserLoggesIn(req, res, next) {
//   const userid = req.cookies?.uid;
//   if (!userid) return res.redirect("/login");
//   const user = getuser(userid);
//   if (!user) return res.redirect("/login");
//   req.user = user;
//   next();
// }

function restrict(role = []) {
  return function (req, res, next) {
    if (!user) return res.redirect("/login");

    if (!role.includes(req.user.role)) return res.end("unauthrize");

    return next();
  };
}
module.exports = { checkauthrization, restrict };
// module.exports = { requestTouserLoggesIn };
