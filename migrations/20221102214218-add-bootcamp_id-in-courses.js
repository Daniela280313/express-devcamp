'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('course','bootcamp_id',{type:Sequelize.INTEGER, references:{model: 'course', key: 'id'} , onUpdate: 'CASCADE', onDelete: 'SET NULL'})
  },

    async down (queryInterface, Sequelize) {
      await queryInterface.removeColumn('course', 'bootcamp_id')
  }
};
