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
            "brandName",
            "imageUrl",
            "name",
            "size",
            "discountedPrice",
            "price",
          ],
        },
      ],
      attributes: ["quantity", "price", "size", "createdAt"],
    });

    if (!cartItems || cartItems.length === 0) {
      return res.status(404).json({ error: "장바구니 데이터 없음 " });
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

    if (!carts || carts.length === 0) {
      return res.status(404).json({ error: "장바구니 데이터 없음 " });
    }
    const totalQuantity = carts.reduce((sum, cart) => sum + cart.quantity, 0);

    return res.json(totalQuantity);
  } catch (error) {
    return res.status(500).json({ error: " 서버 에러 " + error });
  }
});

router.post(`/`, async (req, res) => {
  try {
    const { price, user_id, size, product_id, quantity } = req.body;
    const existingProduct = await Cart.findOne({
      where: { product_id: product_id },
    });

    if (existingProduct) {
      await existingProduct.increment("quantity", { by: quantity });
      await existingProduct.increment("price", { by: price });
      return res.json({ existingProduct: true });
    } else {
      const newCart = await Cart.create({
        user_id: user_id,
        product_id: product_id,
        size,
        price,
        quantity,
      });
      return res.json(newCart);
    }
  } catch (error) {
    return res.status(500).json({ error: " 서버 에러 " + error });
  }
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
