const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')
// Test (passed)
router.get('/', (req, res) => res.send('This is root howdy hey !'))

router.post('/themePark/:id/review', controllers.createReview)
// Create ThemePark (passed)
router.post('/themePark', controllers.createThemePark)
// Create Review (passed)


// Get All Parks (passed)
router.get('/themeParks', controllers.getAllParks)

// Get parks by id (passed)
router.get('/themeParks/:id', controllers.getParkById)
// Get Reviews by ID (passed insomnia test)
router.get('/reviews/:id', controllers.getReviewById)


// delete review***
router.delete('/deleteReview/:id', controllers.deleteReview)






module.exports = router;