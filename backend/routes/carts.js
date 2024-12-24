const express = require("express");
const { Cart } = require("../models");
const { Product } = require("../models");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const cartItems = await Cart.findAll({
      where: {
        user_id: id,
      },
      include: [
        {
          model: Product,
          attributes: [
            "id",
            "brandName",
            "imageUrl",
            "name",
            "discountedPrice",
            "price",
          ],
        },
      ],
      attributes: ["quantity", "price", "size", "createdAt"],
    });

    if (!cartItems) {
      return res.status(404).json({ error: "장바구니 불러오기 싫패 " });
    }
    return res.json(cartItems);
  } catch (error) {
    return res.status(500).json({ error: " 서버 에러 " + error });
  }
});

router.get("/:id/count", async (req, res) => {
  try {
    const { id } = req.params;

    const carts = await Cart.findAll({
      where: { user_id: id },
    });

    if (!carts) {
      return res.status(404).json({ error: "장바구니 불러오기 싫패 " });
    }
    const totalQuantity = carts.reduce((sum, cart) => sum + cart.quantity, 0);

    return res.json(totalQuantity);
  } catch (error) {
    return res.status(500).json({ error: " 서버 에러 " + error });
  }
});

router.post(`/`, async (req, res) => {
  try {
    const cartItems = req.body;

    cartItems.forEach(async (cartItem) => {
      const existingProduct = await Cart.findOne({
        where: { product_id: cartItem.product_id, size: cartItem.size },
      });

      if (existingProduct) {
        await existingProduct.increment("quantity", { by: cartItem.quantity });
        await existingProduct.increment("price", { by: cartItem.price });
      } else {
        await Cart.create({
          user_id: cartItem.user_id,
          product_id: cartItem.product_id,
          size: cartItem.size,
          price: cartItem.price,
          quantity: cartItem.quantity,
        });
      }
    });

    return res.status(200).json({ message: "장바구니 업데이트 완료" });
  } catch (error) {
    return res.status(500).json({ error: " 서버 에러 " + error });
  }
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
