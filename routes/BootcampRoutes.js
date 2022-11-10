const express = require ('express')
const { getBootcamps, createBootcamp, getsingleBootcamp, updateBootcamp, deleteBootcamp } = require('../controllers/BootcampController')
const { 
       
} = require('../controllers/BootcampController')
const router = express.Router()

router.route('/')
.get(getBootcamps)
.post(createBootcamp)

router.route('/:id')
.get(getsingleBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp)


module.exports = router