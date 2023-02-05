const express = require('express')
const morgan = require('morgan')

const app = express()
const guestRoutes = require('./routes/guestRoutes')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const { pool } = require("./model/dbConfig")

const port = process.env.PORT || 5000

//view engine
app.set('view engine', 'ejs')

//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: 'false'}))
app.use(express.static('public'))
app.use(express.json())

//Routes
app.use('/', guestRoutes)
app.use('/auth', authRoutes)
app.use('/users', userRoutes)


app.listen(port, ()=>{
    console.log(`Listenng on port ${port}`);
})