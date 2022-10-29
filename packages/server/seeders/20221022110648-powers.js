'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Powers',
      [
        {
          name: 'fly',
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: 'fast speed',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'owl eyes',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'super strong',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'super jump',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      'Powers', null, {});
  }
};
