const express = require("express");
const router =express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const{isloggedin,isOwner,validateListing}=require("../middlewear.js");
const listingcontroller=require("../controllers/listings.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage });


router.route("/")
.get(wrapAsync(listingcontroller.index))//index 
.post(isloggedin,upload.single('listing[image]'),validateListing,wrapAsync(listingcontroller.create))//create

//new route
router.get("/new",isloggedin,wrapAsync(listingcontroller.new));

router.route("/:id")
.get(wrapAsync(listingcontroller.show))//show
.put( isloggedin, isOwner,upload.single('listing[image]'), validateListing, wrapAsync(listingcontroller.update))//update
.delete(isloggedin,isOwner,wrapAsync(listingcontroller.delete));//delete

//edit
router.get("/:id/edit",isOwner, isloggedin,wrapAsync(listingcontroller.edit));

module.exports=router;