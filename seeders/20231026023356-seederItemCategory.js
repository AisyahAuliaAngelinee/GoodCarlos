'use strict';
const fs = require('fs').promises

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const data = JSON.parse(await fs.readFile('./data/itemCategories.json', 'utf-8'))
   data.map((el) => {
    el.createdAt = el.updatedAt = new Date()
   })

   await queryInterface.bulkInsert('ItemCategories', data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ItemCategories', null, {
      truncate: true, cascade: true, restartIdentity: true
    })
  }
};
