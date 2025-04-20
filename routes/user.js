const express = require("express");
const router =express.Router();
const User=require("../models/user.js");
const wrapAsync=require("../utils/wrapAsync.js");
const passport=require("passport");
const{saveRedirectUrl}=require("../middlewear.js");

const usercontroller=require("../controllers/user.js");
const user = require("../models/user.js");

router.route("/signup")
.get(usercontroller.rendersignupform)
.post(wrapAsync(usercontroller.signup));

router.route("/login")
.get(usercontroller.renderloginform)
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login",
failureFlash:true}),usercontroller.login);

router.get("/logout",usercontroller.logout);

module.exports=router;