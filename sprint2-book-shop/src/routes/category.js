const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/categoryController");
const {
  validLimit,
  validCurrentPage,
  validate,
} = require("../utils/validation");

router.use(express.json());

router.get(
  "/",
  [[validLimit, validCurrentPage, validate]],
  CategoryController.all
);

module.exports = router;
