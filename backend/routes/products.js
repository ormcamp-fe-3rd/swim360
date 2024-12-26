const express = require("express");
const { Product, Review, Discount } = require("../models");
const { sequelize } = require("../db");
const router = express.Router();

//모델명/검색모델명/검색모델의id ex.products/category/1
//메인 베스트상품 불러오기
router.get("/bestProducts", async (req, res) => {
  try {
    const bestProducts = await Product.findAll({
      order: [["salesVolume", "DESC"]],
      limit: 4,
      attributes: [
        "id",
        "name",
        "imageUrl",
        "brandName",
        "discountedPrice",
        "price",
      ],
      include: [
        {
          model: Discount,
          attributes: ["discountPercentage"],
          required: false,
        },
      ],
      group: ["Product.id", "Discount.id"],
    });

    if (!bestProducts || bestProducts.length === 0) {
      return res.status(404).json({ message: "BestProducts Not Found" });
    }

    res.json(bestProducts)
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "서버 에러: " + error.message });
  }
});

router.get("/category/:categoryId", async (req, res) => {
  const { categoryId } = req.params;

  // TODO: Discount(Discount Percentage), Review(rev) 테이블과 조인
  try {
    const productList = await Product.findAll({
      where: { category_id: categoryId },
      attributes: [
        "id",
        "brandName",
        "name",
        "description",
        "price",
        "discountedPrice",
        "size",
        "imageUrl",
        "salesVolume",
        "createdAt",
        [sequelize.fn("COUNT", sequelize.col("Reviews.id")), "reviewCount"], // 리뷰 수 계산
      ],
      include: [
        {
          model: Review,
          attributes: [],
          required: false,
        },
        {
          model: Discount,
          attributes: ["discountPercentage"],
          required: false,
        },
      ],
      group: ["Product.id", "Discount.id"],
    });

    if (!productList || productList.length === 0) {
      return res.status(404).json({ message: "해당하는 상품이 없습니다." });
    }


    res.json(productList)
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "서버 에러: " + error.message });
  }
});

router.get("/detail/:productId", async (req, res) => {
  const { productId } = req.params; // URL 파라미터에서 productId 추출

  try {
    // 제품 정보를 가져오는 쿼리 (Product 모델)
    const product = await Product.findOne({
      where: { id: productId },
      include: [
        {
          model: Discount,
          attributes: ["discountPercentage"],
          required: false,
        },
      ],
      group: ["Product.id", "Discount.id"],
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

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
