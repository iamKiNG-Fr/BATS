const express = require('express')
const router = express.Router()
const { sequelize, bats_users } = require('../sequelize/models') 

const authController = require('../controllers/authControllers')
const app = express()

//passport
const initializePassport1 = require('../passport-config')
const passport = require('passport')
initializePassport1(passport)



//routes

router.get('/login', authController.login)

router.get('/register', authController.register)

router.get('/success', authController.success)

router.post('/login', passport.authenticate('alumni', {
    successRedirect: '/alumni/home',
    failureRedirect: '/auth/login',
    failureFlash: true
}))


module.exports = router
