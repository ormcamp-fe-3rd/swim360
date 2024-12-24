const express = require("express");
const { Order, OrderItem } = require("../models");
const router = express.Router();

//유저 id로 조회
router.get("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const orders = await Order.findAll({
      where: { user_id: userId },
      include: [
        {
          model: OrderItem,
        },
      ],
    });
    if (!orders) {
      res.status(404).json({ message: "Orders not found" });
    }
    // `totalQuantity` 계산 및 추가
    const formattedOrders = orders.map((order) => {
      const totalQuantity = order.OrderItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      return {
        ...order.toJSON(),
        totalQuantity,
      };
    });

    res.json(formattedOrders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", (req, res) => {});

router.post("/", async (req, res) => {
  try {
    const {
      receiver,
      phoneNumber,
      address,
      detailAddress,
      totalPrice,
      orderStatus,
      user_id,
      products,
    } = req.body;

    // 필수 데이터 검증
    if (
      !receiver ||
      !phoneNumber ||
      !address ||
      !totalPrice ||
      !products ||
      products.length === 0
    ) {
      return res.status(400).json({ error: "필수 정보가 누락되었습니다." });
    }

    // 주문 정보 저장
    const newOrder = await Order.create({
      receiver,
      phoneNumber,
      address,
      detailAddress,
      totalPrice,
      orderStatus,
      user_id,
    });

    // 주문 상품 정보 저장
    const orderItems = products.map((product) => ({
      order_id: newOrder.id, // 생성된 주문 ID와 연결
      size: product.size,
      quantity: product.quantity,
      total_price: product.totalPrice,
    }));

    await OrderItem.bulkCreate(orderItems);
    console.log("상품 저장 완료");

    res.status(200).json({
      message: "주문이 성공적으로 등록되었습니다.",
      orderId: newOrder.id,
    });
  } catch (error) {
    console.error("주문 등록 오류:", error);
    res.status(500).json({ error: "주문 등록 중 서버 오류 발생" });
  }
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
