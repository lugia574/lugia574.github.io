const express = require("express");
const router = express.Router();

const BookController = require("../controllers/BookController");
const {
  validate,
  validLimit,
  validCurrentPage,
  validId,
  validNews,
} = require("../utils/validation");

router.use(express.json());

router.get(
  "/",
  [validLimit, validCurrentPage, validNews, validate],
  BookController.get
);
router.get("/:id", [validId, validate], BookController.detail);

module.exports = router;
