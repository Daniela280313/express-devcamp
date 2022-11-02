const {DataTypes} = require('sequelize')
const reviews = require('../models/reviews')
const sequelize = require('../config/seq')

//objeto User:
const Reviews = reviews(sequelize , DataTypes)

exports.getAllReviews = async (req , res)=>{
    const allReviews = await Reviews.findAll()
        res
        .status(200)
        .json({
            "succes" : true,
            "data" : allReviews
        })
    }

    exports.getsingleReviews = async (req , res)=>{
     const singleReviews = await Reviews.findByPk(req.params.id)
        res
        .status(200)
        .json({
            "succes" : true,
            "data" : singleReviews
        })
    }

    exports.createReviews = async (req , res)=>{
        const newReviews = await Reviews.create(req.body);
        res.status(201)
        .json({
            "succes" : true,
            "data" : newUser
        })
    }

    exports.updateReviews = async (req , res)=>{
        await Reviews.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        const singleReviews = await Reviews.findByPk(req.params.id)
        res.status(200)
        .json({
            "succes" : true,
            "data" : singleReviews
        })
    }

    exports.deleteReviews = async (req , res)=>{
        await Reviews.destroy({
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

