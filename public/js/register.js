var currentTab = 0

showTab(currentTab)

function showTab(n) {
    const regForm = document.getElementById("regForm") 
   
    const x = document.querySelectorAll('.tab')
    
    x[n].style.display = "block"
    
    if(n == 0 ){
        document.getElementById("prevBtn").style.display= "none"
    }else{
        document.getElementById("prevBtn").style.display="inline"
    }

    if(n == (x.length-1)){
        document.getElementById("nextBtn").style.display= "none"
    } else {
        document.getElementById("nextBtn").style.display= "inline"
    }
    if(n == (x.length-1)){
        document.querySelector(".subBtn").style.display= "inline"
    } else {
        document.querySelector(".subBtn").style.display= "none"
    }


    fixStepIndicator(n)
}

function nextPrev(n){
    //this function will figure out which tab to show
    var x = document.getElementsByClassName("tab")
    var y = document.getElementsByClassName("step")
    //hide current tab
    x[currentTab].style.display ="none"
    y[currentTab].style.display ="none"
    //increase or decrease current tab by 1
    currentTab = currentTab + n

    //otherwise, display current tab
    showTab(currentTab)
    fixStepIndicator(currentTab)

}

function fixStepIndicator(n){

    var x = document.querySelectorAll(".step")
    
    x[n].style.display = "block"
    
}

function addVacancy(){
    const vacancy = document.querySelector(".vacancy")

    vacancy.style.display = "block"
}

function removeVacancy(){
    const vacancy = document.querySelector(".vacancy")

    vacancy.style.display = "none"
}
