const express = require("express");
const router = express.Router();
const LikeController = require("../controllers/LikeController");

router.use(express.json());

router.post("/:id", LikeController.add);
router.delete("/:id", LikeController.remove);

module.exports = router;
