const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const { sequelize, bats_users, bats_admin } = require('../sequelize/models') 
const Sequelize  = require('sequelize')
const { where } = require('sequelize')
const Op = Sequelize.Op

//passport
const initializePassport = require('../passport-config')
const passport = require('passport')
const flash = require('express-flash')
initializePassport(passport)

//routes
router.get('/dashboard', checkAdminAuthenticated, async (req, res) => {
    res.render('../views/admin/adminDash', {title: 'BATS | Admin Dashboard'})
})

router.get('/admins',async (req, res) => {
    res.render('../views/admin/adminsPage', {title: 'BATS | Admin Page'})
})


// Register and login route
router.get('/auth/register', checkAdminAuthenticated,async (req, res) => {
    const errors = []
    res.render('../views/admin/adminReg', {title: 'BATS | Admin Register', errors, admin: req.body})
})

router.get('/auth/login', async (req, res) => {

    const message = req.flash('success')
    res.render('../views/admin/adminLogin', {title: 'BATS | Admin Login', message})
})

router.post('/auth/login', passport.authenticate('admin', {
    successRedirect: '/admin/dashboard',
    failureRedirect: '/admin/auth/login',
    failureFlash: true
}))

// auth protection
function checkAdminNotAuthenticated(req, res, next) {
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/admin/auth/login')
}

function checkAdminAuthenticated(req, res, next) {
    if(req.isAuthenticated()){
        return res.redirect('/admin/dashboard')
    }
    next()
}



//get admin
router.get('', async (req, res) => {
    try{
        const admins = await bats_admin.findAll()

        return res.json(admins)

    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})

//get single admin
router.get('/:uuid', async (req, res) => {
    try{
        const uuid = req.params.uuid

        const singleAdmin = await bats_admin.findOne({where: {uuid}})
        
       res.json(singleAdmin)
        
    } catch (err){
        console.error(err.message)
    }
})

//add admin
router.post('', async (req, res) => {
    try{
        const {first_name, last_name, email, password, cpassword, access} = req.body
        
        let errors = []
       
        // form validation 

        if(password.length < 5 ){
            errors.push({message : "passwords not long enough"})
        }

        if(password != cpassword ){
            errors.push({message : "passwords do not match"})
        }

        if(!access){
            errors.push({message : "select an access level"})
        }
        if(errors.length > 0 ){
            console.log(errors);
            res.render('../views/admin/adminReg', {title: 'BATS | Admin Register', errors, admin: req.body})
        }
       
        // Form validaiton passed
        else{

            let hashedPassword = await bcrypt.hash(password, 10)
           
            const user = await bats_admin.create({ first_name, last_name, email, password: hashedPassword, access})
            
            req.flash('success', 'successfully registered')
            
            return res.redirect('/admin/auth/login')
                   
        
        }
        
    } catch (err){
        console.error(err.message)
    }
})

//update admin
router.put('/update/:uuid', async (req, res) => {
    
    console.log("here");

    const uuid = req.params.uuid
    const {first_name, last_name, email} = req.body

    try{
        const user = await bats_users.findOne({where: {uuid}})

        user.first_name = first_name 
        user.last_name = last_name  
        user.email = email 
        
        await user.save()

        console.log('updated!');

        res.redirect('/admin/dashboard')
        
    } catch (err){
        console.error(err.message)
    }
})

//delete admin
router.delete('/:uuid', async (req, res) => {
    try{
        const uuid = req.params.uuid

        const user = await bats_admin.findOne({where: {uuid}})
        
        await user.destroy()

        return res.json({msg: 'user has been deleted!'})
        
    } catch (err){
        console.error(err.message)
    }
})




module.exports = router