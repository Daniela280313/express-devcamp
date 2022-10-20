const express = require ('express')
const { getsingleBootcamp,
        getBootcamps,
        updateBootcamp,
        deleteBootcamp,
        createBootcamp } = require('../controllers/BootcampController')
const router = express.Router()

router.route('/')
.get(getBootcamps)
.post(createBootcamp)

router.route('/:id')
.get(getsingleBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp)


module.exports = router