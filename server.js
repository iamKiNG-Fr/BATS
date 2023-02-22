const express = require('express')
const morgan = require('morgan')

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
app.use(morgan('dev'))
app.use(express.urlencoded({extended: 'false'}))
app.use(express.static('public'))
app.use(express.json())

//Routes
app.use('/', guestRoutes)
app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/alumni', alumniRoutes)
app.post('/test', async(req, res)=>{
    const { first_name, last_name, email, password} = req.body

    try{
        const user = await bats_users.create({ first_name, last_name, email, password })

        return res.json(user)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})
app.get('/test', async(req, res)=>{
    try{
        const users = await bats_users.findAll()

        return res.json(users)

    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})
app.get('/test/:uuid', async(req, res)=>{
    const uuid = req.params.uuid
    try{
        const user = await bats_users.findOne({
            where: {uuid}
        })

        return res.json(user)

    }catch(err){
        return res.status(500).json({error: 'something went wrong'})
    }
})


app.listen(port, async ()=>{
    console.log(`Listening on port ${port}`);
    await connectDb()
    console.log('Database Connected!');
})

