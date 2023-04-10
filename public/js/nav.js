
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


const contactForm = document.querySelector(".contact-form")
const guestname = document.querySelector("#name")
const email = document.querySelector("#email")
const subject = document.querySelector("#subject")
const message = document.querySelector("#message")

contactForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  
  const formData = {
    guestname: guestname.value,
    email: email.value,
    subject: subject.value,
    message: message.value

  }

  let xhr = new XMLHttpRequest()
  xhr.open('POST', '/contact')
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
      alert('Email sent')
      guestname.value = ''
      email.value = ''
      subject.value = ''
      message.value = ''
    } else {
      alert('something went wrong')
    }
  }
  
  xhr.send(JSON.stringify(formData))
})


// Username
// noreply@bats.com
// Password
// F06B69B36A71115BF5EFBBE4BB14A05A8C44
// Copy
// Server
// smtp.elasticemail.com
// Port
// 2525