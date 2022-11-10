'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
    await queryInterface.bulkInsert('bootcamps', [{
    username: 'John Doe',
    description: 'cbo@misena.edu.co',
    website: 'javascript3.com',
    phone: '123454645',
    average_rating: 2.0,
    average_cost: 1.000,
    user_id: 1
    },
  {
    username: 'Johnathan Doe',
    description: 'cbo123@misena.edu.co',
    website: 'javascript1.com',
    phone: '123454645',
    average_rating: 1.0,
    average_cost: 5.000,
    user_id: 2
  },
  {
    username: 'Daniela Doe',
    description: 'cbo1234@misena.edu.co',
    website: 'javascript4.com',
    phone: '123454645',
    average_rating: 3.0,
    average_cost: 2.000,
    user_id: 3
  }
  
  ], {});
  
},

async down (queryInterface, Sequelize) {
   
  await queryInterface.bulkDelete('bootcamps', null, {});
 
}
};
