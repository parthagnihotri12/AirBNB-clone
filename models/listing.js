const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: String,
    url: String
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"  // Reference to the Review model
    }
],
owner:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User",
},

});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;