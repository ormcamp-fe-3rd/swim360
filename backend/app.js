const express = require("express");
const app = express();
const db = require("./db");
const models = require("./models");

const startServer = async () => {
  await db.init();
  await models.syncAll();

  app.use(express.json());

  app.use(require("./routes"));

  app.listen(3000, () => {
    console.log("server listening on port 3000");
  });
};

startServer();
