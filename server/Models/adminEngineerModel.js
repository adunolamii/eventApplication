const { mongoose } = require("mongoose");

const adminEngineerSchema =  mongoose.Schema(
    {picture:{type: String, required:[ true, "picture is required"]},
    name:{type: String, required:[ true, "name is required"]}

},
 {timeStamps: true})
const adminEngineerModel = mongoose.model ("adminEngineerModel", adminEngineerSchema)
module.exports = adminEngineerModel