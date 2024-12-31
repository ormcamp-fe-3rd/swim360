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
      return res.status(404).json({ status: 'error', message: "User not found"})
    }
    
    return res.json({ status: 'success', data: user});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

//이메일아이디로 회원 조회
router.get('/email/:email', async (req, res) => {
  try {
    const userEmail = req.params.email

    const user = await User.findOne({ where: { emailId: userEmail } })

    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found' })
    }

    return res.json({ status: 'success', data: user})
  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: 'error', message: error.message })
  }
})

// 특정 유저 수정
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { phoneNumber, password } = req.body;


    // 유저 존재 여부 확인
    const user = await User.findOne({ where: { id: id } });
    if (!user) {
      return res.json({ status: 404, message: "User not found" });
    }

    // 유저 있으면 수정
    // update 성공시 1 반환, 실패시 0 반환
    const result = await User.update(
      { phoneNumber, password },
      {
        where: {
          id: id,
        },
      }
    );

    if(result[0] > 0){
      const updatedUser = await User.findOne({where: {id: id}});
      return res.json(updatedUser);
    }else{
      return res.status(400).json({ message: 'Update failed' })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
