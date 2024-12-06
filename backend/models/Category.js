const { DataTypes } = require("sequelize"); // 시퀄라이즈에 정의됨
const { sequelize } = require("./db");
// 모델

//이름, 상품_id(fk), 부모_id(fk)
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
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "CATEGORIES",
    timestamps: true, // 키면 createdAt, updateAt 자동으로 저장됨
  }
);

module.exports = Category; // 다른 데서 써야하니까 export
