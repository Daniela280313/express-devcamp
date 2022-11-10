const express = require ('express')
const { 
        updateReviews,
        getsingleReviews,
        deleteReviews,
        createReviews,
        getAllReviews} = require('../controllers/ReviewController')
const router = express.Router()

router.route('/')
.get(getAllReviews)
.post(createReviews)

router.route('/:id')
.get(getsingleReviews)
.put(updateReviews)
.delete(deleteReviews)


module.exports = router