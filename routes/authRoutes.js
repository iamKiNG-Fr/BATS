const express = require('express')
const router = express.Router()

const authController = require('../controllers/authControllers')

router.get('/login', authController.login)

router.get('/register', authController.register)

module.exports = router