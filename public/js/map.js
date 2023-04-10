const getAddress = async () => {
    try {

        const resp = await axios.get('/alumni/address')
        const addresses = resp.data
        return addresses 
        
    } catch (err) {
        console.log(err);
    }
}

const getCords = async () => {
    try {
        const locations = await getAddress()
    
        const markerCords = []
        
        for(const location of locations){
            
            const address = `${location.state_of_residence} ${location.country}`
            
            const promise = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?', {
            params:{
                address,
                key : 'AIzaSyAy5fA7ARYOjHt7-Csb7fI8ypCVB25ZuvE'
            }})
            console.log(promise);
            const corLat = promise.data.results[0].geometry.location
            // console.log(corLat);

            markerCords.push(corLat)
            
        };
        console.log(markerCords);
        return markerCords;
        
    } catch (err) {
        console.log(err);
    }
}
 
async function initMap(){
    var options = {
        zoom: 2,
        center: {lat: 10, lng:8}
    }

    var cordss = await getCords()
    // console.log(cordss);
    // console.log(cordss.length);
    // console.log(cordss[0]);
    // console.log(typeof cordss[0] === 'object');
    // console.log(Array.isArray(cordss));

    var map = new google.maps.Map(document.querySelector('#map'), options)
    

    function addMarker(cord){
        var marker = new google.maps.Marker({
            position: cord,
            map: map
        })
    }
    
    cordss.forEach(cord => {
       addMarker(cord);  
    })
    
}

// console.log(alumni);