const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  activateAccount,
  forgotPassword,
  resetPassword
} = require("../controllers/auth");
const requireLogin=require('../middlewere/requireLogin.js');
const { allpost,
  createpost,
  mypost
  } = require("../controllers/post");
router.post("/signup", signUp);

router.post("/account-activation", activateAccount);

router.post("/signin", signIn);

router.get("/allpost",requireLogin, allpost);
router.post("/createpost",requireLogin, createpost);
router.get("/mypost",requireLogin, mypost);


router.post("/forgot-password", forgotPassword);

router.post("/reset-password", resetPassword);

module.exports = router;
