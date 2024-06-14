const { mongoose } = require("mongoose");

const adminDancerSchema =  mongoose.Schema(
    {picture:{type: String, required:[ true, "picture is required"]},
    name:{type: String, required:[ true, "name is required"]}

},
 {timeStamps: true})
const adminDancerModel = mongoose.model ("adminDancerModel", adminDancerSchema)
module.exports = adminDancerModel