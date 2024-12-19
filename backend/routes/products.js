const express = require("express");
const router = express.Router();
const { Product } = require("../models");

router.get("/:productId", async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findOne({
      where: { id: productId },
    });

    if (!product) {
      return res.json({ isProductExist: false });
    }

    return res.json(product);
  } catch (error) {
    return res.status(500).json({ error: " 서버 에러 " + error });
  }
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
