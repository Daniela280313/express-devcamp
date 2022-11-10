'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
    await queryInterface.bulkInsert('reviews', [{
    title: 'javascipt',
    text: 'javascript con node.js',
    rating: 4.5,
    user_id: 1,
    bootcamp_id: 1
    },
  {
    title: 'php avanzado',
    text: 'php con node.js',
    rating: 2.3,
    user_id: 2,
    bootcamp_id: 2
  },
  {
    title: 'java basico',
    text: 'javas basic0 con node.js',
    rating: 5.0,
    user_id: 3,
    bootcamp_id: 3
  }
  
  ], {});
  
},

async down (queryInterface, Sequelize) {
   
  await queryInterface.bulkDelete('reviews', null, {});

}
};
