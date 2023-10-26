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
    const data = JSON.parse(await fs.readFile('./data/categories.json', 'utf-8'))
    data.map((el) => {
      el.createdAt = el.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Categories', data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {
      truncate: true, cascade: true, restartIdentity: true
    })
  }
};
