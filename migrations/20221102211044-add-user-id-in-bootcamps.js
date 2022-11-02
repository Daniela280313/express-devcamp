'use strict';

const { model } = require('mongoose');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //addColumn: argumentos
    //nombre de tabla donde poner la columna
    //nueva columna a poner
    //opciones de configuracion
   await queryInterface.addColumn('bootcamps','user_id',{type:Sequelize.INTEGER, references:{model: 'users', key: 'id'}, onUpdate: 'CASCADE', onDelete: 'SET NULL'}
   )
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('bootamps', 'user_id')
  }
};