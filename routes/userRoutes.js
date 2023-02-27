const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const { sequelize, bats_users } = require('../sequelize/models') 

// const authController = require('../controllers/authControllers')

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
            
            console.log('successfully registered')
            
            return res.redirect('/auth/success')
                   
        
        // }
        
    } catch (err){
        console.error(err.message)
    }
})

//update user
router.put('/:uuid', async (req, res) => {
    
    const uuid = req.params.uuid
    const {first_name, last_name, dob, gender, phone, email, country, state_of_residence, program, course, matric, post, grad_year, mascot, occupation, job_desc, emp_of_labour, vacancy, office_phone, office_address} = req.body
    
    try{
        const user = bats_users.findOne({where: {uuid}})

        user.first_name = first_name 
        user.last_name = last_name 
        user.dob = dob 
        user.gender = gender 
        user.phone = phone 
        user.email = email 
        user.country = country 
        user.state_of_residence = state_of_residence 
        user.program = program 
        user.course = course 
        user.matric = matric 
        user.post = post 
        user.grad_year = grad_year 
        user.mascot = mascot 
        user.occupation = occupation 
        user.job_desc = job_desc 
        user.emp_of_labour = emp_of_labour 
        user.vacancy = vacancy 
        user.office_phone = office_phone 
        user.office_address = office_address 
        
        user.save()
        
    } catch (err){
        console.error(err.message)
    }
})

//delete user
router.delete('/:uuid', async (req, res) => {
    try{
        const uuid = req.params.uuid

        const user = await bats_users.findOne({where: {uuid}})
        
        await user.destroy()

        return res.json({msg: 'user has been deleted!'})
        
    } catch (err){
        console.error(err.message)
    }
})

module.exports = router