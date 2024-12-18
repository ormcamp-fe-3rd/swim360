const express = require("express");
const { Cart } = require("../models");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const cart = await Cart.findAll({ where: { user_id: id } });

    if (!cart) {
      return res.json({ isCartExist: false });
    }

    return res.json(cart);
  } catch (error) {
    return res.status(500).json({ error: " 서버 에러 " + error });
  }
});

router.get("/:id/count", async (req, res) => {
  const { id } = req.params;

  try {
    const carts = await Cart.findAll({
      where: { user_id: id },
    });

    if (!carts || carts.length === 0) {
      return res.json({ isCartExist: false });
    }
    const totalQuantity = carts.reduce((sum, cart) => sum + cart.quantity, 0);

    return res.json(totalQuantity);
  } catch (error) {
    return res.status(500).json({ error: " 서버 에러 " + error });
  }
});

router.post(`/`, async (req, res) => {
  try {
    const { price, userId, productId, quantity } = req.body;
    const existingProduct = await Cart.findOne({
      where: { product_id: productId },
    });
    if (existingProduct) {
      await existingProduct.increment("quantity", { by: quantity });
      return res.json({ existingProduct: true });
    } else {
      const newCart = await Cart.create({
        user_id: userId,
        product_id: productId,
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
