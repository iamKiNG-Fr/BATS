require('dotenv')

const express = require('express')
const router = express.Router()
const session = require('express-session')
const passport = require('passport')
const authController = require('../controllers/authControllers')
const flash = require('express-flash') 
const app = express()

//passport
const initialize= require('../passporConfig')
initialize(passport)

//middleware
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(express.urlencoded({extended: false}))
app.use(passport.initialize)
app.use(passport.session)
app.use(flash())

//routes

router.get('/login', authController.login)

router.post('/login', passport.authenticate('local',{
    successRedirect: "/about",
    failureredirect: "/auth/login",
    failureFlash: true 
}))

router.get('/register', authController.register)

module.exports = router