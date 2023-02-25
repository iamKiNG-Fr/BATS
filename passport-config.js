const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const { sequelize, bats_users } = require('./sequelize/models') 





function initialize(passport){
    
    const authenticateUser = async (email, password, done) => {
        
        const user = await bats_users.findOne({where: {email}})
          
        try{
            
            if(!user){
                return done(null, false, { message: 'No User With that Email'})
            }
            if(await bcrypt.compare(password, user.password)){
                return done(null, user)
            }else{
                return done(null, false, {message: 'Incorrect Password'})
            }
        }catch(err){
            return done(err)
        }
    }

    passport.use(new localStrategy({usernameField: 'email', passwordField: 'password'}, authenticateUser))

    passport.serializeUser((user, done) => { 
        return done(null, user.uuid)
    })
    
    passport.deserializeUser(async (id, done) => { 
        
        const user = await bats_users.findOne({where: {uuid: id}}) 
        return done(null, user)
        
    })
}

module.exports = initialize