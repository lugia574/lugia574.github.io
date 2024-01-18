const express = require("express");
const router = express.Router();

const BookController = require("../controllers/BookController");

router.use(express.json());

router.get("/", BookController.select);
router.get("/:id", BookController.detail);

module.exports = router;
