const { mongoose } = require("mongoose");

const adminUpcomingSchema =  mongoose.Schema(
    {location:{type: String, required:[ true, "location is required"]},
    date: {type: String, required:[ true, "date is required"]},
    description: {type: String},
    picture: {type: String, required: [true, "picture is required"]},
    time: {type: String, required:[ true, "time is required"]},
},
 {timeStamps: true})
const adminUpcomingModel = mongoose.model ("adminUpcomingtmodel", adminUpcomingSchema)
module.exports = adminUpcomingModel