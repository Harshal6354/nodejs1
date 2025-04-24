const { message } = require("statuses");
const UserData = require("../model/user");
const userdata = async (req, res) => {
  try {
    const { name, Rollno, password, email } = req.body;

    const result = await UserData.create({ name, Rollno, password, email });

    res.json({ message: "student data" }, result);
  } catch (error) {
    console.error("Error inserting student:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

async function getdata(req, res) {
  const data1 = await UserData.findAll();
  res.json({ message: "succesful", data1 });
}

module.exports = { userdata, getdata };
