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
    const data = JSON.parse(await fs.readFile('./data/items.json', 'utf-8'))
    data.map((el) => {
      delete el.id
      el.createdAt = el.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Items', data, {
      truncate: true, cascade: true, restartIdentity: true
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Items', null, {
      truncate: true, cascade: true, restartIdentity: true
    })
  }
};
