const sequelize = require('sequelize')
const db = require('../config/dbConfig')

const bats = db.define('users', {
    fname: {
        type: sequelize.STRING
    },
    lname: {
        type: sequelize.STRING
    },
    dob: {
        type: sequelize.DATE
    },
    phone: {
        type: sequelize.STRING
    },
    email: {
        type: sequelize.STRING
    },
    country: {
        type: sequelize.STRING
    },
    state_of_residence: {
        type: sequelize.STRING
    },
    program: {
        type: sequelize.STRING
    },
    faculty: {
        type: sequelize.STRING
    },
    matric: {
        type: sequelize.STRING
    },
    post: {
        type: sequelize.STRING
    },
    gradyear: {
        type: sequelize.DATE
    },
    mascot: {
        type: sequelize.STRING
    },
    occupation: {
        type: sequelize.STRING
    },
    job_desc: {
        type: sequelize.STRING
    },
    office_phone: {
        type: sequelize.STRING
    },
    office_address: {
        type: sequelize.STRING
    },
    password: {
        type: sequelize.STRING
    },
    date_registered: {
        type: sequelize.DATE
    },
    access: {
        type: sequelize.STRING
    },
    profile_img: {
        type: sequelize.STRING
    },
})

module.exports = bats