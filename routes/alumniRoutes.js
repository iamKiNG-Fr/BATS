const express = require('express')
const router = express.Router()

const { sequelize, bats_users } = require('../sequelize/models') 
const Sequelize  = require('sequelize')
const Op = Sequelize.Op
//routes

router.get('/home', (req, res) => {
    res.render('../views/alumni/alumniHome', {title: 'BATS | Alumni Home', name: req.user.first_name})
})

router.get('/track', (req, res) => {
    res.render('../views/alumni/alumniTrack', { title: 'BATS | Alumni Track', alumni: ''})
})

router.get('/about', (req, res) => {
    res.render('../views/alumni/alumniAbout', { title: 'BATS | Alumni About us'})
})

router.get('/contact', (req, res) => {
    res.render('../views/alumni/alumniContact', { title: 'BATS | Alumni Contact'})
})

router.get("/search", async (req, res) => {
    try {
        const {search, filter} = req.query

        console.log(search, filter);

 
        try {

            if(filter == 'first_name'){

                const alumni = await bats_users.findAll({where: {first_name: { [Op.like]: '%'+ search + '%'}}})
               
                return res.render('../views/alumni/alumniTrack', { title: 'BATS | Alumni Track', alumni})
            }
            if(filter == 'last_name'){
    
                const alumni = await bats_users.findAll({where: {last_name: { [Op.like]: '%'+ search + '%'}}})
                return res.render('../views/alumni/alumniTrack', { title: 'BATS | Alumni Track', alumni})

            }

            if(filter == 'grad_year'){
    
                const alumni = await bats_users.findAll({where: Sequelize.where(Sequelize.fn('year', Sequelize.col('grad_year')), 2020)})
                return res.render('../views/alumni/alumniTrack', { title: 'BATS | Alumni Track', alumni})

            }else{
                const searchResult = await alumni.findAll({where: {first_name: { [Op.like]: '%'+ search + '%'}}})
                return res.render('../views/alumni/alumniTrack', { title: 'BATS | Alumni Track', alumni})
            }
            

        } catch (error) {

            return console.log(error);
        }
         
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
})

router.get('/:uuid', async (req, res) => {
    
    const uuid = req.params.uuid

    const alumni = await bats_users.findOne({where: {uuid}})

    res.render('../views/alumni/alumniProfile', { title: `BATS | ${alumni.first_name}`, alumni})
})


module.exports = router