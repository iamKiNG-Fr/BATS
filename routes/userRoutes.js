const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const { pool } = require("../model/dbConfig")


const authController = require('../controllers/authControllers')

//get all users
router.get('', async (req, res) => {
    try{
        const allUsers = await pool.query("SELECT * FROM users ")  
        
       res.json(allUsers.rows)
        
    } catch (err){
        console.error(err.message)
    }
})

//get single user
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id

        const singleUser = await pool.query("SELECT * FROM users WHERE id = $1 ", [id])  
        
       res.json(singleUser.rows)
        
    } catch (err){
        console.error(err.message)
    }
})

//add user
router.post('', async (req, res) => {
    try{
        const {fname, lname, dob, phone, email, country, state_of_residence, program, faculty, course, matric, gradyear, mascot, occupation, job_desc, office_phone, office_address, password, cpassword} = req.body
        
        let errors = []
       
        // form validation 


        // if(password.length < 5 ){
        //     errors.push({message : "passwords not long enough"})
        // }

        // if(password != cpassword ){
        //     errors.push({message : "passwords do not match"})
        // }

        // if(errors.length > 0 ){
        //     console.log(error);
        //     // res.render('../views/guest/register', {errors})
        // }
       
        // // Form validaiton passed
        // else{

            let hashedPassword = await bcrypt.hash(password, 10)

            const newuser = await pool.query(" INSERT INTO users (fname, lname, dob, phone, email, country, state_of_residence, program, faculty, course, matric, gradyear, mascot, occupation, job_desc, office_phone, office_address, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)",[fname, lname, dob, phone, email, country, state_of_residence, program, faculty, course, matric, gradyear, mascot, occupation, job_desc, office_phone, office_address, hashedPassword])  
            
            req.flash('success_msg','You are now registered, please log in')

            res.redirect('/auth/login')
        
        // }
        
    } catch (err){
        console.error(err.message)
    }
})

//update user
router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id

        const field = req.body

        const updateUser = await pool.query("UPDATE users SET $1=$2 WHERE id=$3",[ , ,id])  
        
       res.json(singleUser.rows)
        
    } catch (err){
        console.error(err.message)
    }
})

//delete user
router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id

        const deleteUser = await pool.query("DELETE FORM users WHERE id = $1 ", [id])  
        
       res.json(`User successfuly deleted`)
        
    } catch (err){
        console.error(err.message)
    }
})

module.exports = router