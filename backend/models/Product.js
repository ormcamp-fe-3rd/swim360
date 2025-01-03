const { DataTypes } = require("sequelize"); // 시퀄라이즈에 정의됨
const { sequelize } = require("../db.js");
// 모델

//이름, 정가, 할인가, 사이즈, 이미지, 판매량, 재고, 카테고리_id(fk), 할인_id(fk)
const Product = sequelize.define(
  "Product",
  {
    id: {
      autoIncrement: true, // 자동 증가
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    brandName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discountedPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.TEXT, // TEXT로 변경
      allowNull: false,
      get() {
        const rawValue = this.getDataValue("size");
        return rawValue ? JSON.parse(rawValue) : [];
      },
      set(value) {
        this.setDataValue("size", JSON.stringify(value));
      },
    },
    imageUrl: {
      type: DataTypes.TEXT, // TEXT로 변경
      allowNull: false,
      get() {
        const rawValue = this.getDataValue("imageUrl");
        return rawValue ? JSON.parse(rawValue) : [];
      },
      set(value) {
        this.setDataValue("imageUrl", JSON.stringify(value));
      },
    },
    salesVolume: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "PRODUCTS",
    timestamps: true, // 키면 createdAt, updateAt 자동으로 저장됨
  }
);

module.exports = Product; // 다른 데서 써야하니까 export
