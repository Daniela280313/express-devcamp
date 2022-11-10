const {DataTypes, ValidationError} = require('sequelize')
const course = require('../models/course')
const sequelize = require('../config/seq')

//objeto User:
const Course = course(sequelize , DataTypes)

exports.getAllCourse = async (req , res)=>{
    try {
        const allCourse = await Course.findAll()
        res
        .status(200)
        .json({
            "succes" : true,
            "data" : allCourse
        })
    } catch (error) {
        res.status(400).json({
            "success":false,
            "errors": "error de servidor"
        })   
    }

    }

    exports.getsingleCourse = async (req , res)=>{
        try {
            const singleCourse = await Course.findByPk(req.params.id)
            res
            .status(200)
            .json({
                "succes" : true,
                "data" : singleCourse
            })
            if(!singleCourse){
                res.status(400).json({
                    "success": false,
                    "errors": "curso no encontrado"
                })   
            } else{
             //enviar response
             res.status(200)
             .json({
                 "success" : true,
                 "data" : singleCourse
             })
            }
        } catch (error) {
            
        }

    }

    exports.createCourse = async (req , res)=>{
        try {
            const newCourse = await Course.create(req.body);
            res.status(201)
            .json({
                "succes" : true,
                "data" : newCourse
            })
        } catch (error) {
            if(error instanceof ValidationError){
                //recorrer el arreglo de errores
                //map
               const msg_errores=error.errors.map(errorItem => errorItem.message)
                res.status(422).json({
                    "success":false,
                    "errors": msg_errores
                })
             }else{
                res.status(422).json({
                    "success":false,
                    "errors": "error de servidor"
                })   
             }
        }
    }

    exports.updateCourse = async (req , res)=>{
        try {
            const singleCourse = await Course.findByPk(req.params.id)
            if(!singleCourse){
                res.status(200).json({
                    "success":true,
                    "errors": "curso no encontrado"
                })
            }else{
            await Course.update(req.body,{
                where:{
                    id: req.params.id
                }
            })
            //volvemos a seleccionar
            const updateCourse = await Course.findByPk(req.params.id)
            //response con usuario actualizado
            res.status(200)
            .json({
                "success":true,
                "data": this.updateCourse
            })
        }
        } catch (error) {
            res.status(400).json({
                "succes": false,
                "error": "error en servidor"
            })
        }
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
            "data" : `eliminar cursos ${req.params.id}`
        })
    }

