'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
    await queryInterface.bulkInsert('courses', [{
    title: 'javascipt',
    description: 'javascript con node.js',
    weeks: 4,
    enroll_cost: 1.000,
    minimum_skills: 'javascript',
    bootcamp_id: 1
    },
  {
    title: 'ingles',
    description: 'ingles en programacion',
    weeks: 6,
    enroll_cost: 30.000,
    minimum_skills: 'php',
    bootcamp_id: 2
  },
  {
    title: 'español',
    description: 'aprender español gratis :3',
    weeks: 5,
    enroll_cost: 25.000,
    minimum_skills: 'java',
    bootcamp_id: 3
  }
  
  ], {});
  
},

async down (queryInterface, Sequelize) {
   
  await queryInterface.bulkDelete('courses', null, {});

}
};
