const express = require("express");
const router = express.Router();

router.use(express.json());

// 장바구니 담기
router.post("/", (req, res) => {
  res.status(200).json("");
});

// 장바구니 조회
router.get("/", (req, res) => {
  res.status(200).json();
});

// 장바구니 제거
router.delete("/:id", (req, res) => {
  res.status(200).json();
});

// 장바구니 선택 상품 조회
router.get("/", (req, res) => {
  res.status(200).json();
});

router.get("");

module.exports = router;
