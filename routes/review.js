const express = require("express");
const router =express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const Review=require("../models/review.js");
const Listing=require("../models/listing.js");
const {validateReview,isloggedin,isReviewauthor}=require("../middlewear.js")
const reviewcontroller=require("../controllers/review.js");
//create review
router.post("/",isloggedin,validateReview,wrapAsync(reviewcontroller.createreview));
// delete
router.delete("/:reviewId",isReviewauthor,wrapAsync(reviewcontroller.delete));
module.exports=router;