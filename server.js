
const express = require('express')
const morgan = require('morgan')
const flash = require('express-flash') 

const app = express()
const guestRoutes = require('./routes/guestRoutes')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const alumniRoutes = require('./routes/alumniRoutes')
const { pool } = require("./model/dbConfig")
const session = require('express-session')

const port = process.env.PORT || 5000

//view engine
app.set('view engine', 'ejs')

//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: 'false'}))
app.use(express.static('public'))
app.use(express.json())
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(flash())


//Routes
app.use('/', guestRoutes)
app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/alumni', alumniRoutes)

app.listen(port, ()=>{
    console.log(`Listenng on port ${port}`);
})