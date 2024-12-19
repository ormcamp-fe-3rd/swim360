const express = require("express");
const router = express.Router();
const { Product } = require("../models");

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

router.get("/:id", (req, res) => {});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
