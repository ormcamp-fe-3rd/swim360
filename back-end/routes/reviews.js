const express = require("express");
const router = express.Router();

// 해당 상품의 리뷰 모두 들고오기
router.get("/:id", (req, res) => {});

// 해당 사용자의 리뷰 모두 들고오기
router.get("/:id", (req, res) => {});

// 특정 사용자의 해당 상품 리뷰 들고오기
router.post("/", (req, res) => {});

// 특정 사용자의 해당 상품의  리뷰 수정하기
router.put("/:id", (req, res) => {});

// 특정 사용자의 해당 상품의 리뷰 삭제하기
router.delete("/:id", (req, res) => {});

module.exports = router;
