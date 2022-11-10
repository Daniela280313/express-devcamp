
//1. objeto de conexion 
const sequelize = require('../config/seq')
//2. Datatypes
const {Datatypes} = require('sequelize')
//3. el modelo 


exports.getBootcamps = async (req , res)=>{
    const getBootcamps = await Bootcamp.findAll()
        res
        .status(200)
        .json({
            "succes" : true,
            "data" : getBootcamps
        })
    }

    exports.getsingleBootcamp = async (req , res)=>{
        const singleBootcamp = await Bootcamp.findByPk(req.params.id)
        res
        .status(200)
        .json({
            "succes" : true,
            "data" : singleBootcamp
        })
    }

    exports.createBootcamp = async (req , res)=>{
        const newBootcamp = await Bootcamp.create(req.body);
        res.status(201)
        .json({
            "succes" : true,
            "data" : newBootcamp
        })
    }

    exports.updateBootcamp = async (req , res)=>{
        await Bootcamp.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        const singleBootcamp = await Bootcamp.findByPk(req.params.id)
        res.status(200)
        .json({
            "succes" : true,
            "data" : singleBootcamp
        })
    }

    exports.deleteBootcamp = async (req , res)=>{
        await Bootcamp.destroy({
            where: {
                id: req.params.id
            }
          });
        res.status(200)
        .json({
            "succes" : true,
            "data" : `eliminar bootcamp ${req.params.id}`
        })
    }

