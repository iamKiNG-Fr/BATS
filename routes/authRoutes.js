const express = require('express')
const router = express.Router()

const authController = require('../controllers/authControllers')
const app = express()

//routes

router.get('/login', authController.login)

router.get('/register', authController.register)

module.exports = router