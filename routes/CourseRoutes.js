const express = require ('express')
const { getsingleCourse,
        getCourse,
        updateCourse,
        deleteCourse,
        createCourse } = require('../controllers/BootcampController')
const router = express.Router()

router.route('/')
.get(getCourse)
.post(createCourse)

router.route('/:id')
.get(getsingleCourse)
.put(updateCourse)
.delete(deleteCourse)


module.exports = router