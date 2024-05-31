const { mongoose } = require("mongoose");

const adminServicesSchema =  mongoose.Schema(
    {picture: {type: String, required: [true, "picture is required"]},
    services:{type: String, required:[ true, "services is required"]},
},
 {timeStamps: true})
const adminServicesModel = mongoose.model ("AdminServicesmodel", adminServicesSchema)
module.exports = adminServicesModel