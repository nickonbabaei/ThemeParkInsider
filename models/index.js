const mongoose = require('mongoose')
const review = require('./review')
const themePark = require('./themePark')

const Review = mongoose.model('Review', review)
const ThemePark = mongoose.model('ThemePark', themePark)

module.exports = {
  Review,
  ThemePark
}
