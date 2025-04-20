const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalmongoose=require("passport-local-mongoose");

const userschema=new Schema(
    {
        email:{
            type:String,
            required:true,
        },
    }
);
userschema.plugin(passportLocalmongoose);
module.exports=mongoose.model("User",userschema);

