const express = require("express");
const { Cart } = require("../models");
const router = express.Router();

router.get("/:id", (req, res) => {});

router.post(`/`, async (req, res) => {
  try {
    const { price, userId, productId, quantity } = req.body;

    const newCart = await Cart.create({
      user_id: userId,
      product_id: productId,
      price,
      quantity,
    });

    res.json(newCart);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
