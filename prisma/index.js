const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/user", async (req, res) => {
  const { name, email } = req.body;

  try {
    //  Use `findFirst` instead of `findone`
    const userdata = await prisma.userdata.findFirst({
      where: {
        name: name,
        email: email,
      },
    });

    if (userdata) {
      return res.status(200).send("Valid user found");
    } else {
      return res.status(401).send(" Invalid user");
    }
  } catch (error) {
    console.error("Error checking user:", error);
    return res.status(500).send("Internal server error");
  }
});

app.listen(8000, () => console.log(" Server started on port 8000"));
