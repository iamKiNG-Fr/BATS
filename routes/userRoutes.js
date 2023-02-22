const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const { sequelize, bats_users } = require('../sequelize/models') 

const authController = require('../controllers/authControllers')

//get all users
router.get('', async (req, res) => {
    try{
        const users = await bats_users.findAll()

        return res.json(users)

    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})

//get single user
router.get('/:uuid', async (req, res) => {
    try{
        const uuid = req.params.uuid

        const singleUser = await bats_users.findOne({where: {uuid}})
        
       res.json(singleUser)
        
    } catch (err){
        console.error(err.message)
    }
})

//add user
router.post('', async (req, res) => {
    try{
        const {first_name, last_name, dob, gender, phone, email, country, state_of_residence, program, course, matric, post, grad_year, mascot, occupation, job_desc, emp_of_labour, vacancy, office_phone, office_address, password, cpassword} = req.body
        
        // let errors = []
       
        // // form validation 


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
           
            const user = await bats_users.create({ first_name, last_name, dob, gender, phone, email, country, state_of_residence, program, course, matric, post, grad_year, mascot, occupation, job_desc, emp_of_labour, vacancy, office_phone, office_address, password: hashedPassword})

            return res.json(user)
                   
            console.log('successfully registered')
        
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