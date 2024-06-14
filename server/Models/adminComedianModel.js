const { mongoose } = require("mongoose");

const adminComedianSchema =  mongoose.Schema(
    {picture:{type: String, required:[ true, "picture is required"]},
    name:{type: String, required:[ true, "name is required"]}

},
 {timeStamps: true})
const adminComedianModel = mongoose.model ("adminComedianModel", adminComedianSchema)
module.exports = adminComedianModel