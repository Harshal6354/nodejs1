const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function Muser(req, res) {
  const myuser = prisma.myuser.create({
    data: {
      name: "Harshal",
      email: "harshal@gmail.com",
      password: "123456",
    },
  });
  console.log(myuser);
}
