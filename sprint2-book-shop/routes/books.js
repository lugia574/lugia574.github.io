const express = require("express");
const router = express.Router();

const { selectBooks, bookDetail } = require("../controller/BookController");

router.use(express.json());

router.get("/", selectBooks);
router.post("/:id", bookDetail);

module.exports = router;
