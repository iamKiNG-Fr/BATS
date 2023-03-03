function initMap(){
    var options = {
        zoom: 8,
        center: {lat: 6.889605274123313, lng: 3.7211778287890964}
    }

    var map = new google.maps.Map(document.querySelector('#map'), options)
}