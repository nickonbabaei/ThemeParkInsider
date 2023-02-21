const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ThemePark = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: false },
        image: { type: String, required: true },
        review: { type: [Schema.Types.ObjectId], ref: 'Review', required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('ThemePark', ThemePark)