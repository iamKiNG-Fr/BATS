const { sequelize, bats_users } = require('../sequelize/models') 


const login = (req, res) => {
    res.render('../views/guest/login', {title: 'BATS | Login'})
}

const register =  (req, res) => {
    res.render('../views/guest/register', {title: 'BATS | Register'})
}

// const authLogin = (req, res) => {
//     const {email, password} = req.body

//     try{
        

//     } catch(err){
//         console.error(err.message);
//     }
// }

module.exports = {
    login,
    register
    // authLogin
}