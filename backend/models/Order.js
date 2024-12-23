const { DataTypes } = require("sequelize"); // 시퀄라이즈에 정의됨
const { sequelize } = require("../db.js");
// 모델

//회원_id(fk), 상품_id(fk), 배송지, 금액, 주문상태
const Order = sequelize.define(
  "Order",
  {
    id: {
      autoIncrement: true, // 자동 증가
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    receiver: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    detailAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orderStatus: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "ORDERS",
    timestamps: true, // 키면 createdAt, updateAt 자동으로 저장됨
  }
);

module.exports = Order; // 다른 데서 써야하니까 export
