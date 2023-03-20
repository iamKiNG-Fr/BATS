function initMap(){
    var options = {
        zoom: 15,
        center: {lat: 6.8920793, lng:3.7181458}
    }

    var map1 = new google.maps.Map(document.getElementById('mapp'), options)


    var marker = new google.maps.Marker({
        position: {lat: 6.8920793, lng:3.7181458},
        map: map1
    })
}

function displayRegister(){
    const map = document.querySelector(".onmap")
    // console.log("im on map");
    map.style.opacity = "1";
}

function removeRegister(){
    const map = document.querySelector(".onmap")
    // console.log("remove map");
    map.style.opacity = "0"
}