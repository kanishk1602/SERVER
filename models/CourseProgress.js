const mongoose = require("mongoose");

const courseProgress = new mongoose.Schema({
    courseID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },
    completedVideos:[
        {
            type:mongoose.Aggregate.Schema.Types.ObjectId,
            ref:"SubSection",
        }
    ]
});

//ab isko export kar denge
module.exports = mongoose.model("courseProgress",courseProgress);