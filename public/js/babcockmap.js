function initMap(){
    var options = {
        zoom: 15,
        center: {lat: 6.8920793, lng:3.7181458}
    }

    var map = new google.maps.Map(document.querySelector('#map2'), options)


    var marker = new google.maps.Marker({
        position: {lat: 6.8920793, lng:3.7181458},
        map: map
    })
}