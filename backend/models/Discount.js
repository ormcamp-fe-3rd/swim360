const { DataTypes } = require("sequelize"); // 시퀄라이즈에 정의됨
const { sequelize } = require("../db.js");
// 모델

//할인이름, 할인률
const Discount = sequelize.define(
  "Discount",
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
    discountPercentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "DISCOUNTS",
    timestamps: true, // 키면 createdAt, updateAt 자동으로 저장됨
  }
);

module.exports = Discount; // 다른 데서 써야하니까 export
