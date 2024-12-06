const { Sequelize } = require("sequelize");

// Sequelize 연결 생성
const sequelize = new Sequelize("board_2", "admin", "testpassword!#", {
  host: "orm-camp-frontend-3rd.c9aowuoc4o5u.ap-northeast-2.rds.amazonaws.com",
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
