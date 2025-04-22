const express = require("express");
const router1 = require("./routes/user");
const PORT = 8000;
const app = express();

app.use(express.json());
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Student API",
      version: "1.0.0",
      description: "API for managing students",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./routes/*.js"], // file with Swagger comments
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use("/", router1);

app.listen(PORT, () => console.log(`server start at ${PORT}`));
