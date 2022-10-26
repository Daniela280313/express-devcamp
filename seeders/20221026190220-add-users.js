'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
      await queryInterface.bulkInsert('users', [{
      username: 'John Doe',
      email: 'cbo@misena.edu.co',
      password: '1234'
      },
    {
      username: 'Jane Doe',
      email: 'jane@misena.edu.co',
      password: '1234'
    },
    {
      username: 'Samuel Doe',
      email: 'samuel@misena.edu.co',
      password: '1234'
    }
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('users', null, {});
     
  }
};
