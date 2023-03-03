const express = require('express')
const router = express.Router()
// const bcrypt = require('bcrypt')

const { sequelize, bats_users } = require('../sequelize/models') 

router.get("/track", (req, res) => {
    try {
        // const page = parseInt(req.query.page)-1||0
        // const limit = parseInt(req.query.page) || 5
        // const search = req.query.search || ""
        // let sort = req.query.sort || "ABC"
        // let set = req.query.set || "All"

        // const setOptions

        const alumni = bats_users.findAll()

        res.json(alumni)
         
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
})

module.exports = router