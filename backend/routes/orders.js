const express = require("express");
const { Order, OrderItem } = require("../models");
const router = express.Router();

//유저 id로 조회
router.get("/users/:id", async (req, res) => {
  try{
    const userId = req.params.id

    const orders = await Order.findAll({
      where: { user_id: userId },
      include: [
        {
          model: OrderItem,
        },
      ],
    })
    if (!orders) {
      res.status(404).json({ message: 'Orders not found' })
    }
    // `totalQuantity` 계산 및 추가
    const formattedOrders = orders.map((order) => {
      const totalQuantity = order.OrderItems.reduce((sum, item) => sum + item.quantity, 0)
      return {
        ...order.toJSON(),
        totalQuantity, 
      }
    })

    res.json(formattedOrders)

  }catch (error){
    console.log(error);
    res.status(500).json({ error: error.message});
  }
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
