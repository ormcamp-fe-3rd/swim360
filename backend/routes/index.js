const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/products", require("./products"));
router.use("/categories", require("./categories"));
router.use("/reviews", require("./reviews"));
router.use("/carts", require("./carts"));
router.use("/orders", require("./orders"));
router.use("/discounts", require("./discounts"));
router.use("/orderItems", require("./orderItems"));

module.exports = router;
