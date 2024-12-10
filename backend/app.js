require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./db");
const models = require("./models");
const config = require("./config/config");

const startServer = async () => {
  await db.init();
  await models.syncAll();

  app.use(express.json());

  app.use(require("./routes"));

  app.listen(config.expressPort, () => {
    console.log(`server listening on port ${config.expressPort}`);
  });
};

startServer();
