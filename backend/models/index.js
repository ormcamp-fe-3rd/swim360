const User = require("./User");
const Review = require("./Review");
const Order = require("./Order");
const OrderItem = require("./OrderItem");
const Product = require("./Product");
const Cart = require("./Cart");
const Category = require("./Category");
const Discount = require("./Discount");

const syncAll = async () => {
try {
  // Drop tables in reverse order of dependencies
  await Review.drop({ force: true })
  await OrderItem.drop({ force: true })
  await Cart.drop({ force: true })
  await Order.drop({ force: true })
  await Product.drop({ force: true })
  await Category.drop({ force: true })
  await Discount.drop({ force: true })
  await User.drop({ force: true })

  // Recreate tables in order of dependencies
  await User.sync({ force: true })
  await Category.sync({ force: true })
  await Discount.sync({ force: true })
  await Product.sync({ force: true })
  await Order.sync({ force: true })
  await Cart.sync({ force: true })
  await OrderItem.sync({ force: true })
  await Review.sync({ force: true })

  console.log('All tables synchronized successfully')
} catch (error) {
  console.error('Error synchronizing tables:', error)
  throw error
}
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

Discount.hasMany(Product, { foreignKey: "discount_id" });
Product.belongsTo(Discount, { foreignKey: "discount_id" });

Product.hasMany(Review, {foreignKey: "product_id"});
Review.belongsTo(Product, {foreignKey: "product_id"});

module.exports = {
  User,
  Review,
  Order,
  Product,
  Cart,
  OrderItem,
  Category,
  Discount,
  syncAll,
};
