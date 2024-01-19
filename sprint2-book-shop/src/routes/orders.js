const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");
const {
  validate,
  validItem,
  validDelivery,
  validAddress,
  validReciver,
  validContact,
  validBookTitle,
  validTotalQunatity,
  validTotalPrice,
  validUserId,
} = require("../utils/validation");

router.use(express.json());

router.post("/", validateOrder, OrderController.order);
router.get("/", OrderController.get);
router.get("/:id", [validId, validate], OrderController.Detail);

const validateOrder = [
  validItem,
  validDelivery,
  validAddress,
  validReciver,
  validContact,
  validBookTitle,
  validTotalQunatity,
  validTotalPrice,
  validUserId,
  validate,
];

module.exports = router;
