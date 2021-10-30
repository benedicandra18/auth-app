const mongoose = require("mongoose")
const Schema = mongoose.Schema

const DataSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    birthYear: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})

module.exports = Data = mongoose.model("data", DataSchema)