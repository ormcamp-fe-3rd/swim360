const express = require("express");
const { Product, Review } = require("../models");
const router = express.Router();

//모델명/검색모델명/검색모델의id ex.products/category/1
router.get("/:productId", async (req, res) => {
  const { productId } = req.params; // URL 파라미터에서 productId 추출

  try {
    const product = await Product.findOne({
      where: { id: productId },
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.json(product);
  } catch (error) {
    return res.status(500).json({ error: "서버 에러 " + error.message });
  }
});

router.get("/detail/:productId", async (req, res) => {
  const { productId } = req.params; // URL 파라미터에서 productId 추출

  try {
    // 제품 정보를 가져오는 쿼리 (Product 모델)
    const product = await Product.findOne({
      where: { id: productId },
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // 해당 productId에 해당하는 리뷰들을 가져오는 쿼리
    const reviews = await Review.findAll({
      where: { product_id: productId },
    });

    // 제품 정보와 리뷰를 함께 반환
    return res.json({
      product,
      reviews,
    });
  } catch (error) {
    return res.status(500).json({ error: "서버 에러 " + error.message });
  }
});

router.get("/category/:categoryId/", async (req, res) => {
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
