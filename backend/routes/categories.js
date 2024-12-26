const express = require("express");
const router = express.Router();
const { Category } = require("../models");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({});

    if (!categories) {
      return res.status(404).json({ message: "저장된 카테고리가 없습니다." });
    }

    return res.json(categories);
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
