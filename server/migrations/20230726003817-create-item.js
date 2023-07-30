'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      des: {
        type: Sequelize.STRING,
        allowNull: false
      },
      used: {
        type: Sequelize.STRING
      },
      measurments: {
        type: Sequelize.JSON
      },
      size: {
        type: Sequelize.FLOAT
      },
      thumbnail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      otherPictures: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};