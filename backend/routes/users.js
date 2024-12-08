const express = require("express");
const router = express.Router();
const { User } = require("../models");

// 유저 전체 조회
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users).send();
  } catch (error) {
    console.log(error);
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
    res.json(newUser).send();
  } catch (error) {
    console.log(error);
  }
});

// 특정 유저 조회
router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findOne({ where: { id: userId } });
    res.send("특정 ID에 대한 유저 조회:" + userId);
  } catch (error) {
    console.log(error);
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
      return res.send({ status: 404, message: "User not found" });
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
    res.send(updatedUser);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
