const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')
// Test (passed)
router.get('/', (req, res) => res.send('This is root howdy hey !'))

// Create ThemePark (passed)
router.post('/themePark', controllers.createThemePark)
// Create Review (passed)
router.post('/themePark/review', controllers.createReview)

// Get All Parks (passed)
router.get('/themeParks', controllers.getAllParks)

// Get parks by id (passed)
router.get('/themeParks/:id', controllers.getParkById)
// Get Reviews by ID (passed insomnia test)
router.get('/reviews/:id', controllers.getReviewById)


// delete review***
router.delete('/deleteReview/:id', controllers.deleteReview)






module.exports = router;