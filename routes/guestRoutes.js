const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

const guestController = require('../controllers/guestControllers')


router.get('/', guestController.guest_index)

router.get('/about', guestController.about)

router.get('/contact', guestController.contact)

router.post('/contact', (req, res)=>{
    console.log(req.body);

    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth:{
    //         user: 'heyking.fr@gmail.com',
    //         pass: 'Chukumaeze1'
    //     }
    // })

    const transporter = nodemailer.createTransport({
        host: 'smtp.elasticemail.com',
        port: 2525,
        auth:{
            user: 'noreply@bats.com',
            pass: 'F06B69B36A71115BF5EFBBE4BB14A05A8C44'
        }
    })

    const mailOptions = {
        from: 'heyking.fr@gmail.com',
        to: 'heyking.fr@gmail.com',
        subject: `Message from ${req.body.guestname}: ${req.body.subject}`,
        text: `${req.body.message} , from ${req.body.name} ${req.body.email}`
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
})

router.get('/track', guestController.guest_track)

module.exports = router