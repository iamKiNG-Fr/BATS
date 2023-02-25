if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const morgan = require('morgan')
const flash = require('express-flash')
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')

const app = express()
const guestRoutes = require('./routes/guestRoutes')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const alumniRoutes = require('./routes/alumniRoutes')

const port = process.env.PORT || 5000

//Database
const { sequelize, bats_users } = require('./sequelize/models') 
 
const connectDb = async () => {
    await sequelize.authenticate()
}

//view engine
app.set('view engine', 'ejs')

//middleware
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

//authfunctions
function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/auth/login')
}

function checkNotAuthenticated(req, res, next) {
    if(req.isAuthenticated()){
        return res.redirect('/alumni/home')
    }
    next()
}

//Routes
app.use('/', guestRoutes)
app.use('/auth', checkNotAuthenticated, authRoutes)
app.use('/users', userRoutes)
app.use('/alumni', checkAuthenticated, alumniRoutes)
app.get('/logout', (req, res, next)=>{
    req.logout(err => {
        if (err){
            return next(err)
        }
        res.redirect('/')
    })
})


app.listen(port, async ()=>{
    console.log(`Listening on port ${port}`);
    await connectDb()
    console.log('Database Connected!');
})

