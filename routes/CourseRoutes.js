const express = require ('express')
const { getAllCourse, getsingleCourse, updateCourse, deleteCourse, createCourse } = require('../controllers/CourseController')
const { 
       
} = require('../controllers/ReviewController')
const router = express.Router()

router.route('/')
.get(getAllCourse)
.post(createCourse)

router.route('/:id')
.get(getsingleCourse)
.put(updateCourse)
.delete(deleteCourse)


module.exports = router