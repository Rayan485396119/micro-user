'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('users', [
      {
        name: "Royyan",
        profession:"admin micro",
        role:"admin",
        email:"rayansaputra431@gamil.com",
        password: await bcrypt.hash('royyan1801',10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Anto",
        profession:"fronend developer",
        role:"admin",
        email:"antosaputra431@gamil.com",
        password: await bcrypt.hash('anto231801',10),
        created_at: new Date(),
        updated_at: new Date()
      }
      ]);
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});
     
  }
};
