// const logindata = require("../model/login");
const Signupdata = require("../model/signup");

//login fun
async function LoginData(req, res) {
  try {
    const result = await Signupdata.findAll();
    res.status(200).json({ messsage: "login success", data: result });
  } catch (error) {
    console.log("something wrong", error);
    res.status(500).json({ error: "something wrong" });
  }
}
//signUp fun
async function SignUpData(req, res) {
  try {
    const { username, email, password } = req.body;

    const result = await Signupdata.create({ username, email, password });

    res.json({ message: "signup success", data: result });
  } catch (error) {
    console.log("something wrong", error);
    res.status(500).json({ error: "something wrong" });
  }
}

//delete fun
async function Deletedata(req, res) {
  const { id } = req.params;
  const result = await Signupdata.destroy({ where: { id } });

  if (result === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ message: "delete success", result });
}

async function updateData(req, res) {}
module.exports = { LoginData, SignUpData, Deletedata };
