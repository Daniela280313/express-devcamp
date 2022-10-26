const {DataTypes} = require('sequelize')
const user = require('../models/user')
const sequelize = require('../config/seq')

//objeto User:
const User = user(sequelize , DataTypes)

exports.getAllUser = async (req , res)=>{
    const allUsers = await User.findAll()
        res
        .status(200)
        .json({
            "succes" : true,
            "data" : allUsers
        })
    }

    exports.getsingleUser = (req , res)=>{
        res
        .status(200)
        .json({
            "succes" : true,
            "data" : `single users ${req.params.id}`
        })
    }

    exports.createUser = (req , res)=>{
        res.status(201)
        .json({
            "succes" : true,
            "data" : "crear users"
        })
    }

    exports.updateUser = (req , res)=>{
        res.status(200)
        .json({
            "succes" : true,
            "data" : `actualizar users ${req.params.id}`
        })
    }

    exports.deleteUser = (req , res)=>{
        res.status(200)
        .json({
            "succes" : true,
            "data" : `eliminar users ${req.params.id}`
        })
    }

