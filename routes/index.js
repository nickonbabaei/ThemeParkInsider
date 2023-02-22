const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')
// Test (passed)
router.get('/', (req, res) => res.send('This is root!'))

// Create ThemePark
router.post('/themePark', controllers.createThemePark)
// Create Review
router.post('/themePark', controllers.createReview)

// Get All Parks
router.get('/themeParks', controllers.getAllParks)

// Get parks by id
router.get('/themeParks/:id', controllers.getParkByID)

// delete review***
router.delete('/deleteReview/:id', controllers.deleteReview)






module.exports = router;