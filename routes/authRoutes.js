const express = require('express')
const router = express.Router()
const { sequelize, bats_users } = require('../sequelize/models') 

const authController = require('../controllers/authControllers')
const app = express()

//passport
const initializePassport = require('../passport-config')
const passport = require('passport')
initializePassport(passport)



//routes

router.get('/login', authController.login)

router.get('/register', authController.register)

router.post('/login', passport.authenticate('local', {
    successRedirect: '/alumni/home',
    failureRedirect: '/auth/login',
    failureFlash: true
}))


module.exports = router
