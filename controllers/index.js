const { ThemePark, Review } = require('../models')


  
const createThemePark = async (req, res) => {
    try {
        const themePark = await new ThemePark(req.body)
        await themePark.save()
        return res.status(201).json({
          themePark,
        });
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const getAllParks = async (req, res) => {
    try {
        const parks = await ThemePark.find()
        return res.status(200).json({ parks })
    } catch(err) {
        res.status(500).send(err.message)
    }
}

const getParkByID = async (req, res) => {
    try {
        const parkID = req.params.id
        const park = await ThemePark.findById(parkID).populate('review')
        return res.status(200).json({ park })
    } catch (err) {
        res.status(500).send(err.message)
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
      return res.status(201).json({ review })
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  const deleteReview = async (req, res) => {
    try {
      const { id } = req.params.id
      const deleted = await Comment.findByIdAndDelete(id)
      if (deleted) {
        return res.status(200).send("Review Deleted!")
      }
      throw new Error('Review not found')
    } catch (err) {
      return res.status(500).send(err.message)
    }
  }


module.exports = {
    createReview,
    createThemePark,
    getAllParks,
    deleteReview,
    getParkByID
}

