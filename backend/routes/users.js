const express = require("express");
const router = express.Router();
const { User } = require("../models");

// 유저 전체 조회
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();

    if (!users) {
      console.log("No Users yet");
      res.status(404).json('User not found')
    }

    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// 신규 유저 생성
router.post("/", async (req, res, next) => {
  try {
    const { name, nickname, age } = req.body;
    // 요청 파라미터 검증
    if (!name || !nickname || !age) {
      next(Error(`missing required parameters`));
    }

    const newUser = await User.create({ name, nickname, age });
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// 특정 유저 조회
router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findOne({ where: { id: userId } });

    if(!user){
      res.status(404).json({message: "User not found"})
    }
    
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// 특정 유저 수정
router.put("/:id", async (req, res) => {
  try {
    const { name, nickname, age, id } = req.body;
    // 요청 파라미터 검증
    if (!name || !nickname || !age) {
      next(Error(`missing required parameters`));
    }

    // 유저 존재 여부 확인
    const user = await User.findOne({ where: { id: id } });
    if (!user) {
      return res.json({ status: 404, message: "User not found" });
    }

    // 유저 있으면 수정
    await User.update(
      { name, nickname, age },
      {
        where: {
          id: id,
        },
      }
    );

    const updatedUser = await User.findOne({ where: { id: id } });
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
