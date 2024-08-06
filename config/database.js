const mongoose = require("mongoose"); //mongoose ka instance laayenge
require("dotenv").config(); //environment configuration se chizo ko load krke process object me load krdo

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    })
};
