const express = require("express");
const { Review, Product } = require("../models");
const router = express.Router();
const { Review } = require("../models");

// 해당 상품의 리뷰 모두 들고오기

router.get("/:productId", async (req, res) => {
  const { productId } = req.params; // URL 파라미터에서 productId 추출

  try {
    // 제품 정보를 가져오는 쿼리 (Product 모델)
    const product = await Product.findOne({
      where: { id: productId, reviews },
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // 해당 productId에 해당하는 리뷰들을 가져오는 쿼리
    const reviews = await Review.findAll({
      where: { id: productId },
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


// 해당 사용자의 리뷰 모두 들고오기
router.get("/user/:id", async(req, res) => {
  try{
    const userId = req.params.id;

    const reviews = await Review.findAll({
      where: { user_id: userId},
    });

    res.status(200).json(reviews)
  }catch(error){
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// 특정 사용자의 해당 상품 리뷰 들고오기
router.post("/", (req, res) => {});

// 특정 사용자의 해당 상품의  리뷰 수정하기
router.put("/:id", (req, res) => {});

// 특정 사용자의 해당 상품의 리뷰 삭제하기
router.delete("/:id", (req, res) => {});

module.exports = router;
