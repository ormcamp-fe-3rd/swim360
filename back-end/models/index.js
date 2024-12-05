const User = require("./User");
const Review = require("./Review");

const syncAll = async () => {
  await User.sync();
  await Review.sync();
};

User.hasMany(Review, { foreignKey: "user_id" });
Review.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Order, { foreignKey: "order_id" });
Order.belongsTo(User, { foreignKey: "order_id" });

User.belongsTo(Cart, { foreignKey: "user_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });

Order.hasMany(OrderItem, { foreignKey: "order_id" });
OrderItem.belongsTo(Order, { foreignKey: "order_id" });

module.exports = {
  User,
  Review,
  syncAll,
};
