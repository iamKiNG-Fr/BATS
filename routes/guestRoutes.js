const express = require('express')
const router = express.Router()

const guestController = require('../controllers/guestControllers')


router.get('/', guestController.guest_index)

router.get('/about', guestController.about)

router.get('/contact', guestController.contact)

router.get('/track', guestController.guest_track)

module.exports = router