const mongoose = require("mongoose")
const itSchema = mongoose.Schema({
// company: String,
// experience: Number,
// salary: Number
company: {
    type: String,
    required: true

},
experience: {
    type: Number,
    required: true

},
salary: {
    type: Number,
    required: true,
    min : 0,
    max : 10000000

}

})
module.exports = mongoose.model("it",
itSchema)