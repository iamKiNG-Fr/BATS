'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bats_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid:{
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state_of_residence: {
        allowNull: false,
        type: Sequelize.STRING
      },
      program: {
        allowNull: false,
        type: Sequelize.STRING
      },
      matric: {
        allowNull: false,
        type: Sequelize.STRING
      },
      post: {
        type: Sequelize.STRING
      },
      grad_year: {
        allowNull: false,
        type: Sequelize.DATE
      },
      mascot: {
        type: Sequelize.STRING
      },
      occupation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      job_desc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      emp_of_labour: {
        allowNull: false,
        type: Sequelize.STRING
      },
      vacancy: {
        type: Sequelize.STRING
      },
      office_phone: {
        type: Sequelize.STRING
      },
      office_address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      date_registered: {
        allowNull: false,  
        type: Sequelize.DATE
      },
      access: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: "alumni"
      },
      profile_img: {
          type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bats_users');
  }
};