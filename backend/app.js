require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();
const db = require("./db");
const models = require("./models");
const config = require("./config/config");
const seedData = require("./seedData");
const path = require("path");

const startServer = async () => {
  const corsOptions = {
    origin: config.frontUrl,
    credentials: true,
  };

  app.use(cors(corsOptions));

  await db.init();
  await models.syncAll({ force: true }); // force: true 옵션을 추가 -> db가 실행될때마다 기존 테이블 삭제 후 새로 생성
  await seedData();

  app.use(express.json());

  app.use(require("./routes"));

  app.use(
    "/product-images",
    express.static(path.join(__dirname, "public/product-images"))
  );
  app.use(
    "/review-images",
    express.static(path.join(__dirname, "public/review-images"))
  );

  app.listen(config.expressPort, () => {
    console.log(`server listening on port ${config.expressPort}`);
  });
};

startServer();
