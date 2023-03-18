const express = require('express')
const router = express.Router()

const { sequelize, bats_users } = require('../sequelize/models') 
const Sequelize  = require('sequelize')
const { where } = require('sequelize')
const Op = Sequelize.Op

//routes
router.get('/home', async (req, res) => {
    const userLocation = req.user.country
    const alumniNear = await bats_users.findAll({where: { country: userLocation}})
    const alumniNearNum = alumniNear.length-1

    res.render('../views/alumni/alumniHome', {title: 'BATS | Alumni Home', name: req.user.first_name, userUUId: req.user.uuid, alumniNearNum})
})

router.get('/track', async (req, res) => {
    try{        
        const alumni = await bats_users.findAll()
        const userNum = alumni.length
        const alumniNG = await bats_users.findAll({where: { country: "Nigeria" || "NG"}})
        const alumniNGNum = alumniNG.length
        const alumniDias = await bats_users.findAll({where: { country: {[Op.not]: "Nigeria"}}})
        const alumniDiasNum = alumniDias.length
        const vacancy = await bats_users.findAll({where: { emp_of_labour: 't'}})
        const vacancyNum = vacancy.length

        res.render('../views/alumni/alumniTrack', { title: 'BATS | Alumni Track', alumniNGNum, userNum, alumniDiasNum, vacancyNum, alumni:'', userUUId: req.user.uuid})

    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})

router.get('/address', async (req, res) => {
    try{
        const alumni = await bats_users.findAll({attributes: ['country', 'state_of_residence']})

        return res.json(alumni)

    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})

router.get('/about', (req, res) => {
    res.render('../views/alumni/alumniAbout', { title: 'BATS | Alumni About us', userUUId: req.user.uuid})
})

router.get('/contact', (req, res) => {
    res.render('../views/alumni/alumniContact', { title: 'BATS | Alumni Contact', userUUId: req.user.uuid})
})

router.get("/search", async (req, res) => {
    try {
        const {search, filter} = req.query
        console.log(search, filter);
        try {

            if(filter == 'first_name'){

                const alumni = await bats_users.findAll({where: {first_name: { [Op.like]: '%'+ search + '%'}}})
                const userNum = alumni.length

                return res.render('../views/alumni/alumniSearch', { title: 'BATS | Alumni Track', alumni, userNum, userUUId: req.user.uuid})
            }
            if(filter == 'last_name'){
    
                const alumni = await bats_users.findAll({where: {last_name: { [Op.like]: '%'+ search + '%'}}})
                const userNum = alumni.length
               
                return res.render('../views/alumni/alumniSearch', { title: 'BATS | Alumni Track', alumni, userNum, userUUId: req.user.uuid})

            }

            if(filter == 'grad_year'){
    
                const alumni = await bats_users.findAll({where: Sequelize.where(Sequelize.fn('year', Sequelize.col('grad_year')), 2020)})
                const userNum = alumni.length
                
                return res.render('../views/alumni/alumniSearch', { title: 'BATS | Alumni Track', alumni, userNum, userUUId: req.user.uuid})

            }else{
                const searchResult = await alumni.findAll({where: {first_name: { [Op.like]: '%'+ search + '%'}}})
                const userNum = alumni.length
                
                return res.render('../views/alumni/alumniSearch', { title: 'BATS | Alumni Track', alumni, userNum, userUUId: req.user.uuid})
            }
            

        } catch (error) {

            return console.log(error);
        }
         
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
})

router.get('/search/all', async (req, res) => {
    try{
        const alumni = await bats_users.findAll()
        const userNum = alumni.length
        const alumniNG = 0
        const alumniDias = 0
        const alumniNear = 0

        return res.render('../views/alumni/alumniSearch', { title: 'BATS | Alumni Track', alumni, alumniNear, userNum, alumniNG, alumniDias, userUUId: req.user.uuid})
    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})

router.get('/search/nigeria', async (req, res) => {
    try{
        const alumni = 0
        const alumniDias = 0
        const alumniNear = 0
        const alumniNG = await bats_users.findAll({where: { country: "Nigeria" || "NG"}})
        const alumniNGNum = alumniNG.length

        return res.render('../views/alumni/alumniSearch', { title: 'BATS | Alumni Track',alumni, alumniNear, alumniNG, alumniNGNum, alumniDias, userUUId: req.user.uuid})
    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})

router.get('/search/diaspora', async (req, res) => {
    try{
        const alumni = 0
        const alumniNear = 0
        const alumniNG = 0
        const alumniDias = await bats_users.findAll({where: { country: {[Op.not]: "Nigeria"}}})
        const alumniDiasNum = alumniDias.length

        return res.render('../views/alumni/alumniSearch', { title: 'BATS | Alumni Track', alumni, alumniNG, alumniDias, alumniDiasNum, alumniNear, userUUId: req.user.uuid})
    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})

router.get('/search/vacancy', async (req, res) => {
    try{
        const alumni = 0
        const alumniNG = 0
        const alumniDias = 0
        const alumniNear = 0
        const vacancy = await bats_users.findAll({where: { emp_of_labour: 't'}})
        const vacancyNum = vacancy.length      

        return res.render('../views/alumni/alumniSearch', { title: 'BATS | Alumni Track', vacancy, alumni, alumniDias, alumniNG, alumniNear, vacancyNum, userUUId: req.user.uuid})
    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})

router.get('/search/near', async (req, res) => {
    try{
        const userCountry = req.user.country
        const alumni = 0
        const alumniNG = 0
        const alumniDias = 0
        const alumniNear = await bats_users.findAll({where: { country: userCountry}})   

        return res.render('../views/alumni/alumniSearch', { title: 'BATS | Alumni Track', alumniNear, alumni, alumniDias, alumniNG, userUUId: req.user.uuid})
    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})


router.get('/:uuid', async (req, res) => {
    
    const uuid = req.params.uuid

    const alumni = await bats_users.findOne({where: {uuid}})

    return res.render('../views/alumni/alumniProfile', { title: `BATS | ${alumni.first_name} ${alumni.last_name}`, alumni, userUUId: req.user.uuid})
})

router.get('/me/:uuid', async (req, res) => {
    
    const uuid = req.params.uuid

    const alumni = await bats_users.findOne({where: {uuid}})

    return res.render('../views/alumni/alumniUserProfile', { title: `BATS | My profile`, alumni, userUUId: req.user.uuid})
})

router.get('/profile/update', async (req, res) => {
    try{
        return res.render('../views/alumni/alumniUpdate', { title: 'BATS | Profile Update', alumni: req.user,  userUUId: req.user.uuid})
    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})


module.exports = router