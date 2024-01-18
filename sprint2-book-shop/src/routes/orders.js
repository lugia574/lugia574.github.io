const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.use(express.json());

router.post("/", OrderController.order);
router.get("/", OrderController.get);
router.get("/:id", OrderController.Detail);

module.exports = router;
