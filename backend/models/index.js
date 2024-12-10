const User = require("./User");
const Review = require("./Review");
const Order = require("./Order");
const OrderItem = require("./OrderItem");
const Product = require("./Product");
const Cart = require("./Cart");
const Category = require("./Category");

const syncAll = async () => {
  await User.sync();
  await Category.sync();
  await Product.sync();
  await Order.sync();
  await Cart.sync();
  await OrderItem.sync();
  await Review.sync();
};

User.hasMany(Review, { foreignKey: "user_id" });
Review.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });

Cart.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Cart, { foreignKey: "user_id" });

Order.hasMany(OrderItem, { foreignKey: "order_id" });
OrderItem.belongsTo(Order, { foreignKey: "order_id" });

Cart.belongsTo(Product, { foreignKey: "product_id" });
Product.hasMany(Cart, { foreignKey: "product_id" });

Product.hasMany(OrderItem, { foreignKey: "product_id" });
OrderItem.belongsTo(Product, { foreignKey: "product_id" });

Product.belongsTo(Category, { foreignKey: "category_id" });
Category.hasMany(Product, { foreignKey: "category_id" });

module.exports = {
  User,
  Review,
  Order,
  Product,
  Cart,
  OrderItem,
  Category,
  syncAll,
};
