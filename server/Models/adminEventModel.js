const { mongoose } = require("mongoose");

const adminEventSchema =  mongoose.Schema(
    {location:{type: String, required:[ true, "location is required"]},
    eventName: {type: String, required:[ true, "eventName is required"]},
    time: {type: String, required:[ true, "time is required"]},
    amount:{type: String, required:[ true, "amount is required"]},
    date: {type: String, required:[ true, "date is required"]},
    picture: {type: String, required: [true, "picture is required"]},
},
 {timeStamps: true})
const adminEventModel = mongoose.model ("AdminEventmodel", adminEventSchema)
module.exports = adminEventModel