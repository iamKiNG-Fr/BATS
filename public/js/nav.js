function myFunction() {
  var nav = document.querySelector("nav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

function userOptions(){
  console.log("here");
  document.getElementById("user-options").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.userbtn')) {
    var dropdowns = document.getElementsByClassName("user-options-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}