const mongoose = require("mongoose");

const SubSectionSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    timeDurtion:{
        type:String,
    },
    description:{
        type:String,
    },
    videoUrl:{
        type:String,
    },
});

//ab isko export kar denge
module.exports = mongoose.model("SubSection",SubSectionSchema);