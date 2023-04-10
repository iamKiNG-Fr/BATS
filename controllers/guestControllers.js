 

const guest_index =  (req, res) => {
    res.render('../views/guest/index', {title: 'BATS | Home'})
}

const guest_track =  (req, res) => {
    res.render('../views/guest/track', {title: 'BATS | Track Alumni'})
}

const about = (req, res) => {
    res.render('../views/guest/about', {title: 'BATS | About us'})
}

const contact = (req, res) => {
    res.render('../views/guest/contact', {title: 'BATS | Contact Us'}) 
}

module.exports = {
    guest_index,
    guest_track,
    about,
    contact
}