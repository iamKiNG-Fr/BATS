function myFunction() {
    var nav = document.querySelector("nav");
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  }