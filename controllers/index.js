const { ThemePark, Review } = require('../models')


  
const createThemePark = async (req, res) => {
    try {
        const themePark = await new ThemePark(req.body)
        await themePark.save()
        return res.json(review)
    } catch (err) {
        return res.json({ msg: err.message })
    }
}

const getAllParks = async (req, res) => {
    try {
        const parks = await ThemePark.find()
        return res.json(parks)
    } catch(err) {
        res.send({ msg: err.message })
    }
}

const getParkByID = async (req, res) => {
    try {
        const parkID = req.params.id
        const park = await ThemePark.findById(parkID).populate('review')
        return res.json(park)
    } catch (err) {
        res.json({msg: err.message})
    }
}

const createReview = async (req, res) => {
    try {
      const parkID = req.params.id
      const review = await new Review(req.body)
      await review.save()
      const park = await ThemePark.findById(parkID)
      park.review.push(review._id)
    //   await Story.findByIdAndUpdate(storyId, story)
      return res.status(201).json(review)
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  }

  const deleteReview = async (req, res) => {
    try {
      const id = req.params.id
      await Comment.findByIdAndDelete(id)
    } catch (err) {
      return res.send({msg: err.message})
    }
  }







module.exports = {
    createReview,
    createThemePark,
    getAllParks,
    deleteReview,
    getParkByID
}

