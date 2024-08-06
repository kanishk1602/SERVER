const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
        trim:true,
    },
    email: {
        type:String,
        required:true,
        trim:true,
    },
    password: {
        type:String,
        required:true,
    },
    accountType: {
        type:String,
        enum:["Admin","Student","Instructor"], //3 type hi value ho skti isiliye enum type ka banae
        required:true,
    },
    additionalDetailes: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile",
    },
    courses:[
        { 
            //array hoga
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course",
        }
    ],
    images:{
        type:String,
        required:true,
    },
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },
    courseProgress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress",
        }
    ],


})

//ab isko export kar denge
module.exports = mongoose.model("User",userSchema);