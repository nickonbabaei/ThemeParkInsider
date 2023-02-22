const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
    {
        comment: { type: String, required: true },
        rating: { type: String, required: false },
        themePark: { type: Schema.Types.ObjectId, ref: 'ThemePark'}
    },
    { timestamps: true },
)

module.exports =  Review