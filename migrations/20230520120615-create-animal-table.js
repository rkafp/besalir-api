'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('animal', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description_0: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      description_1: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      description_2: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      description_3: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      description_4: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('animal');
  }
};
