function myFunction() {
  var nav = document.querySelector("nav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

function userOptions(){
  
  document.querySelector(".user-options").style.display = "flex"
}
function remoneOptions(){
  
  document.querySelector(".user-options").style.display = "none"
}