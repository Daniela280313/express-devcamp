const {DataTypes, ValidationError, json} = require('sequelize')
const user = require('../models/user')
const sequelize = require('../config/seq')

//objeto User:
const User = user(sequelize , DataTypes)

exports.getAllUser = async (req , res)=>{
    try {
        const allUsers = await User.findAll()
        res
        .status(200)
        .json({
            "success" : true,
            "data" : allUsers
        })
    } catch (error) {
        res.status(400).json({
            "success":false,
            "errors": "error de servidor"
        })   
    }
    
    }

    exports.getsingleUser = async (req , res)=>{
        try {
            //seleccionar usuario por id
        const singleUser = await User.findByPk(req.params.id)
        if(!singleUser){
            res.status(400).json({
                "success": false,
                "errors": "usuario no encontrado"
            })   
        } else{
         //enviar response
         res.status(200)
         .json({
             "success" : true,
             "data" : singleUser
         })
        }

        } catch (error) {
            
        }
    }

    exports.createUser = async (req , res)=>{
        try{
            //grabar nuevo usuario
            const newUser = await User.create(req.body);
            //enviar response con nuevo usuario
            res.status(201)
            .json({
                "success" : true,
                "data" : newUser
            })
        }catch(error){
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

        exports.updateUser = async (req, res)=>{
            try{
                const singleUser = await User.findByPk(req.params.id)
                //si no existe
                if(!singleUser){
                    res.status(200).json({
                        "success":true,
                        "errors": "usuario no encontrado"
                    })
                }else{
                await User.update(req.body,{
                    where:{
                        id: req.params.id
                    }
                })
                //volvemos a seleccionar
                const updateUser = await User.findByPk(req.params.id)
                //response con usuario actualizado
                res.status(200)
                .json({
                    "success":true,
                    "data": updateUser
                })
            }
            }catch(error){
                res.status(400).json({
                    "succes": false,
                    "error": "error en servidor"
                })
            }  
        }
    

    exports.deleteUser = async (req , res)=>{
        try {
            const deleteUser = await User.findByPk(req.params.id)
            //si no existe
            if(!singleUser){
                res.status(200).json({
                    "success":true,
                    "errors": "usuario no encontrado"
                })
            }else{
            await User.destroy(req.body,{
                where:{
                    id: req.params.id
                }
            })
            //volvemos a seleccionar
            const deleteUser = await User.findByPk(req.params.id)
            //response con usuario actualizado
            res.status(200)
            .json({
                "success":true,
                "data": updateUser
            })
        }
        } catch (error) {
            
        }
        await User.destroy({
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

