const { mongoose } = require("mongoose");

const adminMcSchema =  mongoose.Schema(
    {picture:{type: String, required:[ true, "picture is required"]},
    name:{type: String, required:[ true, "name is required"]}

},
 {timeStamps: true})
const adminMcModel = mongoose.model ("adminMcModel", adminMcSchema)
module.exports =adminMcModel