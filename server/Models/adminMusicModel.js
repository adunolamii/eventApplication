const { mongoose } = require("mongoose");

const adminMusicSchema =  mongoose.Schema(
    {picture:{type: String, required:[ true, "picture is required"]},
    name:{type: String, required:[ true, "name is required"]}

},
 {timeStamps: true})
const adminMusicModel = mongoose.model ("adminMusic", adminMusicSchema)
module.exports = adminMusicModel