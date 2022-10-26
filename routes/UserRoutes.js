const express = require ('express')
const { 
        createUser,
        getAllUser,
        getsingleUser,
        deleteUser,
        updateUser} = require('../controllers/UserController')
const router = express.Router()

router.route('/')
.get(getAllUser)
.post(createUser)

router.route('/:id')
.get(getsingleUser)
.put(updateUser)
.delete(deleteUser)


module.exports = router