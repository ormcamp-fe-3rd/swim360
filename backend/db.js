const { Sequelize } = require("sequelize");
const config = require("./config/config");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    dialect: config.dialect,
    host: config.host,
    port: config.port,
  }
);

const init = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database authentication successful");
  } catch (err) {
    console.log("Database authentication Failed");
  }
};

module.exports = { sequelize, init };
