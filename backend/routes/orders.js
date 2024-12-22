const express = require("express");
const { Order } = require("../models");
const router = express.Router();

//유저 id로 조회
router.get("/users/:id", async (req, res) => {
  try{
    const userId = req.params.id;

    const orders = await Order.findAll({
      where: {user_id: userId},
    });
    if (!orders) {
      res.status(404).json({ message: 'Orders not found' })
    }
    
    res.json(orders);
  }catch (error){
    console.log(error);
    res.status(500).json({ error: error.message});
  }
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
