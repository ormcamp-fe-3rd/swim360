const express = require("express");
const router = express.Router();
const { User } = require("../models");

// 유저 전체 조회
router.get("/", async (req, res) => {});

// 신규 유저 생성
router.post("/", async (req, res, next) => {});

// 특정 유저 조회
router.get("/:id", (req, res) => {});

// 특정 유저 수정
router.put("/:id", (req, res) => {});

module.exports = router;
