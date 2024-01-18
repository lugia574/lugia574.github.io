const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.use(express.json());

router.post("/join", UserController.join);
router.post("/login", UserController.login);
router.post("/reset", UserController.passwordResetRequest);
router.put("/reset", UserController.passwordReset);

module.exports = router;
