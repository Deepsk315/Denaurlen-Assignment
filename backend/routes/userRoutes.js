const express = require("express");
const {
  registerUser,
  loginUser,
  coinsUpdate,
  logoutUser,
} = require("../controllers/userController.js");
const { isAuthenticatedUser } = require("../middlewares/auth.js");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/user/postid").post(isAuthenticatedUser, coinsUpdate);
router.route("/logout").get(logoutUser);

module.exports = router;
