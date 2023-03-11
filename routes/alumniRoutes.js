const express = require('express')
const router = express.Router()

const { sequelize, bats_users } = require('../sequelize/models') 
const Sequelize  = require('sequelize')
const { where } = require('sequelize')
const Op = Sequelize.Op

//routes
router.get('/home', (req, res) => {
    
    res.render('../views/alumni/alumniHome', {title: 'BATS | Alumni Home', name: req.user.first_name, userUUId: req.user.uuid})
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

        return res.render('../views/alumni/alumniSearch', { title: 'BATS | Alumni Track', alumni, userNum, userUUId: req.user.uuid})
    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})

router.get('/search/nigeria', async (req, res) => {
    try{
        const alumniNG = await bats_users.findAll({where: { country: "Nigeria" || "NG"}})
        const alumniNGNum = alumniNG.length

        return res.render('../views/alumni/alumniSearch', { title: 'BATS | Alumni Track',alumniNG, alumniDiasNum, userUUId: req.user.uuid})
    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})

router.get('/search/diaspora', async (req, res) => {
    try{
        const alumniDias = await bats_users.findAll({where: { country: {[Op.not]: "Nigeria"}}})
        const alumniDiasNum = alumniDias.length

        return res.render('../views/alumni/alumniSearch', { title: 'BATS | Alumni Track', alumniDias, alumniDiasNum, userUUId: req.user.uuid})
    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})

router.get('/search/vacancy', async (req, res) => {
    try{
        const vacancy = await bats_users.findAll({where: { emp_of_labour: 't'}})
        const vacancyNum = vacancy.length      

        return res.render('../views/alumni/alumniSearch', { title: 'BATS | Alumni Track', vacancy, vacancyNum, userUUId: req.user.uuid})
    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})

router.get('/:uuid', async (req, res) => {
    
    const uuid = req.params.uuid

    const alumni = await bats_users.findOne({where: {uuid}})

    return res.render('../views/alumni/alumniProfile', { title: `BATS | ${alumni.first_name}`, alumni, userUUId: req.user.uuid})
})

router.get('/me/:uuid', async (req, res) => {
    
    const uuid = req.params.uuid

    const alumni = await bats_users.findOne({where: {uuid}})

    return res.render('../views/alumni/alumniUserProfile', { title: `BATS | ${alumni.first_name}`, alumni, userUUId: req.user.uuid})
})



module.exports = router