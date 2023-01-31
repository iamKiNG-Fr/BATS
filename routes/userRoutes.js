const express = require('express')
const router = express.Router()



const authController = require('../controllers/authControllers')

router.get('', (req, res) => {

})

router.get('/:id', (req, res) => {
    
})

router.post('', (req, res) => {
    console.log(req.body)
    res.redirect('/auth/login')
})

router.put('/:id', (req, res) => {
    
})


router.put('/:id', (req, res) => {
    console.log(req.body)
    res.redirect('/auth/login')
})

router.delete('/:id', (req, res) => {
    console.log(req.body)
    res.redirect('/auth/login')
})

module.exports = router