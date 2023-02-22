const express = require('express')
const router = express.Router()

//routes

router.get('/home', (req, res) => {
    res.render('../views/alumni/alumniHome', {title: 'BATS | Track Alumni'})
})

module.exports = router