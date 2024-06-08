const { mongoose } = require("mongoose");

const adminLocationSchema =  mongoose.Schema(
    {picture:{type: String, required:[ true, "picture is required"]},


},
 {timeStamps: true})
const adminLocationModel = mongoose.model ("adminLocationModel", adminLocationSchema)
module.exports = adminLocationModel