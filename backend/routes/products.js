const express = require("express");
const { Product } = require("../models");
const router = express.Router();

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

router.get("/:categoryId", async (req, res) => {
  const { categoryId } = req.params;

  try {
    const products = await Product.findAll({
      where: { category_id: categoryId },
    });

    if (!products) {
      return res.json({ isProductsExist: false });
    }

    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: " 서버 에러 " + error });
  }
});

//findById
router.get("/:id", async (req, res) => {
  try {
    const paramId = req.params.id;
    const products = await Product.findOne({
      where: { id: paramId },
    });
    if (!products) {
      return res.status(200).json({ message: "해당하는 상품이 없습니다." });
    }
    res.json(products);
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
