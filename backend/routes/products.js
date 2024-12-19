const express = require("express");
const { Product } = require("../models");
const router = express.Router();

//findById
router.get("/:id", async(req, res) => {
  try {
    const paramId = req.params.id;
    const products = await Product.findOne({
      where: {id:paramId}
    });
    if (!products) {
      return res.status(200).json({message: "해당하는 상품이 없습니다."})
    }
    res.json(products)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
