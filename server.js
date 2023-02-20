
const express = require('express')
const morgan = require('morgan')
const flash = require('express-flash') 

const app = express()
// const guestRoutes = require('./routes/guestRoutes')
// const authRoutes = require('./routes/authRoutes')
// const userRoutes = require('./routes/userRoutes')
// const alumniRoutes = require('./routes/alumniRoutes')
const { pool } = require("./config/dbConfig")
const session = require('express-session')

const port = process.env.PORT || 5000
//Database
const db = require('./config/dbConfig')

//Test DB
// db.authenticate()
//     .then(()=>console.log('Connection has been established successfully.'))
//     .catch(err => console.error('Unable to connect to the database:', error))
const { sequelize } = require('./sequelize/models') 
const connectDb = async () => {
    console.log('checing database connection...');
    try{
        sequelize.authenticate()
        console.log('Database connection established....');
    } catch(err){
        console.log('Database connection failed', err);
        process.exit(1)
    }
}

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
// app.use('/', guestRoutes)
// app.use('/auth', authRoutes)
// app.use('/users', userRoutes)
// app.use('/alumni', alumniRoutes)

(async () => {
    
    await connectDb()

    app.listen(port, ()=>{
        console.log(`Listening on port ${port}`);
    })

})()
