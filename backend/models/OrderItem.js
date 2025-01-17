const { DataTypes } = require("sequelize"); // 시퀄라이즈에 정의됨
const { sequelize } = require("../db.js");
// 모델

//주문_id(fk), 상품_id(fk),  가격
const OrderItem = sequelize.define(
  'OrderItem',
  {
    id: {
      autoIncrement: true, // 자동 증가
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  {
    tableName: 'ORDERITEMS',
    timestamps: true, // 키면 createdAt, updateAt 자동으로 저장됨
  }
)

module.exports = OrderItem; // 다른 데서 써야하니까 export
