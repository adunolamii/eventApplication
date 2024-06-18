const { mongoose } = require("mongoose");

const adminSoundSchema =  mongoose.Schema(
    {picture:{type: String, required:[ true, "picture is required"]},
    name:{type: String, required:[ true, "name is required"]}

},
 {timeStamps: true})
const adminSoundModel = mongoose.model ("adminMcModel", adminSoundSchema)
module.exports = adminSoundModel