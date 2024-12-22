require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();
const db = require("./db");
const models = require("./models");
const config = require("./config/config");
const seedData = require("./seedData");

const startServer = async () => {
  const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
  };

  app.use(cors(corsOptions));

  await db.init();
  await models.syncAll({force: true}); // force: true 옵션을 추가 -> db가 실행될때마다 기존 테이블 삭제 후 새로 생성
  await seedData(); 

  app.use(express.json());

  app.use(require("./routes"));

  app.listen(config.expressPort, () => {
    console.log(`server listening on port ${config.expressPort}`);
  });
};

startServer();
