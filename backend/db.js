const { Sequelize } = require("sequelize");

// Sequelize 연결 생성
const sequelize = new Sequelize("", "", "", {
  host: "",
  dialect: "mysql",
});

const init = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database authentication successful");
  } catch (err) {
    console.log("Database authentication Failed");
  }
};

module.exports = { sequelize, init };
