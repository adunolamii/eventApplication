const { mongoose } = require("mongoose");

const adminDjSchema =  mongoose.Schema(
    {picture:{type: String, required:[ true, "picture is required"]},
    name:{type: String, required:[ true, "name is required"]}

},
 {timeStamps: true})
const adminDjModel = mongoose.model ("adminDjModel", adminDjSchema)
module.exports = adminDjModel