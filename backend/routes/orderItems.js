const express = require("express");
const { OrderItem } = require("../models");
const { Product } = require("../models")
const router = express.Router();

//order id로 조회
router.get("/orders/:id", async (req, res) => {
  try {
    const orderId = req.params.id

    const orderItems = await OrderItem.findAll({
      where: { order_id: orderId },
      include: [
        {
          model: Product,
          attributes: ['id', 'name', 'imageUrl'],
        },
      ],
    })

    if (!orderItems || orderItems.length === 0) {
      res.status(404).json({ message: 'OrderItems not found' })
    }
    const formattedItems = orderItems.map((item) => {
      const product = item.Product
      if (product && Array.isArray(product.imageUrl)) {
        product.imageUrl = product.imageUrl.length > 0 ? product.imageUrl[0] : null
      }
      return item
    })

    res.json(formattedItems)

    // res.json(orderItems)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
