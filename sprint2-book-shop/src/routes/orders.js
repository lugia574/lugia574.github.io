const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");
const { validate } = require("../utils/validation");

router.use(express.json());

router.post(
  "/",
  [
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
  ],
  OrderController.order
);
router.get("/", OrderController.get);
router.get("/:id", [validId, validate], OrderController.Detail);

module.exports = router;
