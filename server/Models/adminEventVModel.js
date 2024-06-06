const { mongoose } = require("mongoose");

const adminEventVSchema =  mongoose.Schema(
    {picture:{type: String, required:[ true, "picture is required"]},
    location: {type: String, required:[ true, "location is required"]},
    price: {type: String, required: [true, "price is required"]},

},
 {timeStamps: true})
const adminEventVModel = mongoose.model ("adminEventVModel", adminEventVSchema)
module.exports = adminEventVModel