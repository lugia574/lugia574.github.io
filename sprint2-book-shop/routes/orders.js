const express = require("express");
const router = express.Router();

router.use(express.json());

// 주문하기
router.post("/", (req, res) => {
  res.status(200).json("");
});

// 주문 목록 조회
router.get("/", (req, res) => {
  res.status(200).json();
});

// 주문 상세 삼품 조회
router.get("/:id", (req, res) => {
  res.status(200).json();
});

module.exports = router;
