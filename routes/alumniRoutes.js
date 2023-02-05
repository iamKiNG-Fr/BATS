const express = require('express')
const router = express.Router()

router.get('/home', (req, res)=>
{
    res.render('../views/alumni/alumniHome.ejs', {title: "BATS | Alumni Home"})
})

module.exports = router