const { mongoose } = require("mongoose");

const adminEntertainmentSchema =  mongoose.Schema(
    {picture:{type: String, required:[ true, "picture is required"]},
    djname: {type: String, required:[ true, "djname is required"]},
    
},
 {timeStamps: true})
const adminEntertainmentModel = mongoose.model ("adminEntertainmenttmodel", adminEntertainmentSchema)
module.exports = adminEntertainmentModel