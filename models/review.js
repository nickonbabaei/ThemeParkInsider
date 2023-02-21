const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
    {
        userName: { type: String, required: false },
        comment: { type: String, required: true },
        rating: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Review', Review)