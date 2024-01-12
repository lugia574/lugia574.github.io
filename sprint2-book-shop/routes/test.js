const express = require("express");
const testCon = require("../controller/testController");
const router = express.Router();

router.use(express.json());

router.get("/", testCon);

module.exports = router;
