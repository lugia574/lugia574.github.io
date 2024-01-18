const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/CategoryController");

router.use(express.json());

router.get("/", CategoryController.all);

module.exports = router;
