const express = require("express");
const path = require("path");
const cors = require("cors");
const router3bus = require("./routes/bus");
const router4 = require("./routes/faq");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000;
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const router = require("./routes/app");
const router2 = require("./routes/bot");
const router5 = require("./routes/helpneed");
const ticketrouter = require("./routes/ticket");
const { connection } = require("./connection");
app.set("view engine", "ejs");
app.set("views", path.resolve("./views/partials"));
app.use(bodyParser.json());

connection(
  "mongodb+srv://harshaldhanavade:Harshal%402003@harshal100.uj40c.mongodb.net/busbooking"
)
  .then((result) => {
    console.log("connected to server");
  })
  .catch((err) => {
    console.log("not connected");
  });

app.use(cors());

app.use(express.json());
// Swagger options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Simple API documentation",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to your API route files with Swagger comments
};

const SwaggerSpe = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(SwaggerSpe));
app.use("/", router);
app.use("/", router5);
app.use("/chat", router2);
app.use("/", ticketrouter);
app.use("/api/buses", router3bus);

app;
app.use("/FAQ", router4);

/**
 * @swagger
 * /userList:
 *   get:
 *     summary: Returns a greeting message
 *     tags: [Sample]
 *     responses:
 *       200:
 *         description: A successful response
 */

app.get("/userList", (req, res) => {
  console.log("server");
  return res.send("Hello from /user!");
});
// Start server
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
