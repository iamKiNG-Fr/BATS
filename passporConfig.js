const localStrategy = require('passport-local').Strategy
const {pool} = require('./model/dbConfig')
const bcrypt = require('bcrypt')
// const { authenticate } = require('passport/lib')

function initialize(passport){
    const authenticateUser = (email, password, done)=>{
        
        pool.query('SELECT * FROM users WHERE email = $1', [email], (err, result)=>{
            if(err){
                throw err
            }
            console.log(result.rows);

            if(result.rows.length > 0){
                const user = result.rows[0]

                console.log(user);
                bcrypt.compare(password, user.password, (err, isMatch)=>{
                    if(err){
                        throw err
                    }
                    if (isMatch){
                        return done(null, user)
                    } else{
                        return done(null, false, {message: "password incorrect"})
                    }
                })
            } else {
                return done(null, false, {message : "email is not registered"})
            }
        })
    }

    passport.use(
        new localStrategy({
        usernamefield: 'email',
        passwordfield: 'password'
    }, authenticateUser))

    passport.serializeUser((user, done) => done(null, user.id))

    passport.deserializeUser((id, done) => {
        pool.query(
            "SELECT * FROM users WHERE id = $1", [id], (err, result)=>{
                if(err){
                    throw err
                }
                return done(null, result.rows[0])
            }
        )
    })
}

module.exports = initialize