const login = (req, res) => {
    res.render('../views/guest/login', {title: 'BATS | Login'})
}

const register =  (req, res) => {
    res.render('../views/guest/register', {title: 'BATS | Register'})
}

module.exports = {
    login,
    register
}