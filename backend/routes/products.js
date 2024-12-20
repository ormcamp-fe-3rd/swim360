const express = require("express");
const { Product, Review, Discount } = require("../models");
const { sequelize } = require("../db");
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
      return res.json({ isProductListExist: false });
    }

    return res.json(productList);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "서버 에러: " + error.message });
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
