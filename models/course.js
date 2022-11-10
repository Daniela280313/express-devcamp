'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
       notEmpty:{ 
         args: true,
         msg: "titulo no debe de estar vacio"
       },
       notNull:{
         args: true,
         msg: "titulo no presente"
       }
      }
     }, 
     description:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
       notEmpty:{ 
         args: true,
         msg: "description no debe de estar vacio"
       },
       notNull:{
         args: true,
         msg: "description no presente"
       }
      }
     }, 

     weeks:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate:{
       notEmpty:{ 
         args: true,
         msg: "weeks no debe de estar vacio",
       },
       notNull:{
         args: true,
         msg: "weeks no presente",
       },
       isInt:{
        args: true,
        msg: "debe de ser entero",
       },
       max: 9,
       min: 0
      }
     }, 
     enroll_cost:{
      type: DataTypes.REAL,
      allowNull: false,
      unique: true,
      validate:{
       notEmpty:{ 
         args: true,
         msg: "enroll_cost no debe de estar vacio",
         isFloat: true
       },
       notNull:{
         args: true,
         msg: "enroll_cost no presente",
       },
       isFloat: {
        args: true,
         msg: "debe de ser tipo float",
       }
      }
     }, 
     minimum_skills:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
       isAlpha:{
         args: true,
         msg: " minimum_skills solo debe tener letras"
       },
       notEmpty:{ 
         args: true,
         msg: " minimum_skills no debe de estar vacio"
       },
       notNull:{
         args: true,
         msg: " minimum_skills no presente"
       }
      }
     }, 
    bootcamp_id: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps:false,
    modelName: 'Course',
  });
  return Course;
};