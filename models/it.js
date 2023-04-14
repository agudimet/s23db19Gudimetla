const mongoose = require("mongoose")
const itSchema = mongoose.Schema({
company: String,
experience: Number,
salary: Number
})
module.exports = mongoose.model("IT",
itSchema)