const { sequelize, bats_users } = require('../sequelize/models') 


const login = (req, res) => {
    res.render('../views/guest/login', {title: 'BATS | Login'})
}

const register =  (req, res) => {
    res.render('../views/guest/register', {title: 'BATS | Register', errors: '', alumni: ''})
}

const success = (req, res) => {
    res.render('../views/guest/regSuccess', {title: 'BATS | Success'})
}


module.exports = {
    login,
    register,
    success
}