const { mongoose } = require("mongoose");

const admin2Schema =  mongoose.Schema(
    {location:{type: String, required:[ true, "location is required"]},
    eventName: {type: String, required:[ true, "eventName is required"]},
    time: {type: String, required:[ true, "time is required"]},
    amount:{type: String, required:[ true, "amount is required"]},
    date: {type: String, required:[ true, "date is required"]},
    descriptionForRegular: {type: String},
    descriptionForVip: {type: String},
   descriptionForTableForFive: {type: String},
    picture: {type: String, required: [true, "picture is required"]},
},
 {timeStamps: true})
const admin2Model = mongoose.model ("Admin2model", admin2Schema)
module.exports = admin2Model