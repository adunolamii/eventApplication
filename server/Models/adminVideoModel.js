const { mongoose } = require("mongoose");

const adminVideoSchema =  mongoose.Schema(
    {picture:{type: String, required:[ true, "picture is required"]},
    name:{type: String, required:[ true, "name is required"]}

},
 {timeStamps: true})
const adminVideoModel = mongoose.model ("adminVideoModel", adminVideoSchema)
module.exports = adminVideoModel