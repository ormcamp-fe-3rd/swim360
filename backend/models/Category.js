const { DataTypes } = require("sequelize"); // 시퀄라이즈에 정의됨
const { sequelize } = require("../db.js");
// 모델

//이름,  부모_id(fk)
const Category = sequelize.define(
  "Category",
  {
    id: {
      autoIncrement: true, // 자동 증가
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "CATEGORIES",
    timestamps: true,
  }
);

module.exports = Category;
