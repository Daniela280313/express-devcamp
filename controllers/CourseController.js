const {DataTypes} = require('sequelize')
const course = require('../models/course')
const sequelize = require('../config/seq')

//objeto User:
const Course = course(sequelize , DataTypes)

exports.getAllCourse = async (req , res)=>{
    const allCourse = await Course.findAll()
        res
        .status(200)
        .json({
            "succes" : true,
            "data" : allUsers
        })
    }

    exports.getsingleCourse = async (req , res)=>{
     const singleCourse = await Course.findByPk(req.params.id)
        res
        .status(200)
        .json({
            "succes" : true,
            "data" : singleUser
        })
    }

    exports.createCourse = async (req , res)=>{
        const newCourse = await Course.create(req.body);
        res.status(201)
        .json({
            "succes" : true,
            "data" : newUser
        })
    }

    exports.updateCourse = async (req , res)=>{
        await Course.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        const singleCourse = await Course.findByPk(req.params.id)
        res.status(200)
        .json({
            "succes" : true,
            "data" : singleUser
        })
    }

    exports.deleteCourse = async (req , res)=>{
        await Course.destroy({
            where: {
                id: req.params.id
            }
          });
        res.status(200)
        .json({
            "succes" : true,
            "data" : `eliminar users ${req.params.id}`
        })
    }

