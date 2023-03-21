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


var courseObject = {
    "undergraduate": [
        "B. A. (HONS), HISTORY & INTERNATIONAL STUDIES",
        "B. A. (HONS.), ENGLISH STUDIES",
        "B.A .FRENCH AND INTERNATIONAL RELATIONS",
        "B.A CHRISTIAN RELIGIOUS STUDIES",
        "B.A MUSIC",
        "B.A. (ED) ENGLISH LANGUAGE EDUCATION",
        "B.ED. EDUCATIONAL PLANNING & ADMINISTRATION",
        "B.SC (ED) BUSINESS EDUCATION",
        "B.SC (HONS) IN BUSINESS ADMINISTRATION",
        "B.SC ACCOUNTING",
        "B.SC AGRICULTURAL ECONOMICS AND EXTENSION",
        "B.SC ANIMAL SCIENCE",
        "B.SC BIOCHEMISTRY",
        "B.SC COMPUTER SCIENCE",
        "B.SC ECONOMICS",
        "B.SC FINANCE",
        "B.SC INFORMATION TECHNOLOGY",
        "B.SC MASS COMMUNICATION",
        "B.SC MICROBIOLOGY",
        "B.SC PHYSICS",
        "B.SC PHYSIOLOGY",
        "B.SC POLITICAL SCIENCE",
        "B.SC SOFTWARE ENGINEERING",
        "B.SC. (ED) ECONOMICS EDUCATION",
        "B.SC. (ED) GUIDANCE AND COUNSELING",
        "BACHELOR IN INFORMATION RESOURCES MANAGEMENT (BIRM)0",
        "BACHELOR OF NURSING SCIENCE (BNSC)",
        "BACHELOR OF AGRICULTURE IN AGRONOMY AND LANDSCAPE DESIGN",
        "BACHELOR OF LAWS - LL.B (HONS.)",
        "BACHELOR OF MEDICAL LABORATORY SCIENCE DEGREE (BMLS)",
        "BACHELOR OF SCIENCE (B.SC. HONS) BIOLOGY",
        "BACHELOR OF SCIENCE (HONOURS) IN MARKETING",
        "BACHELORS IN SOCIAL WORK AND HUMAN SERVICES",
        "BSC. PUBLIC HEALTH",
        "MEDICINE (MBBS)"
    ],
    "masters": [
        "M.A ENGLISH LANGUAGES AND ENGLISH LITERATURE",
        "M.A HISTORY",
        "M.PHIL ACCOUNTING",
        "M.PHIL AGRONOMY",
        "M.PHIL ANIMAL SCIENCE",
        "M.PHIL BIOCHEMISTRY",
        "M.PHIL BUSINESS ADMINISTRATION",
        "M.PHIL COMPUTER SCIENCE",
        "M.PHIL ECONOMICS",
        "M.PHIL ENGLISH LANGUAGE AND LITERATURE",
        "M.PHIL INFORMATION RESOURCES MANAGEMENT",
        "M.PHIL MARKETING",
        "M.PHIL MICROBIOLOGY",
        "M.PHIL PUBLIC HEALTH",
        "M.SC ACCOUNTING",
        "M.SC AGRONOMY",
        "M.SC ANIMAL SCIENCE",
        "M.SC BIOCHEMISTRY",
        "M.SC BUSINESS ADMINISTRATION",
        "M.SC COMPUTER SCIENCE",
        "M.SC ECONOMICS",
        "M.SC FINANCE",
        "M.SC MARKETING",
        "M.SC MASS COMMUNICATION",
        "M.SC MICROBIOLOGY",
        "M.SC NURSING",
        "M.SC PHYSIOLOGY",
        "M.SC POLITICAL SCIENCE",
        "MASTER OF BUSINESS ADMINISTRATION (MBA)",
        "MASTERS IN INFORMATION RESOURCES MANAGEMENT (MIRM)",
        "MASTERS IN PUBLIC HEALTH (MPH)",
        "MASTERS IN PUBLIC MANAGEMENT (MPM)"
    ],
    "doctorate":[
        "PH.D ACCOUNTING",
        "PH.D AGRONOMY",
        "PH.D ANIMAL SCIENCE",
        "PH.D BIOCHEMISTRY",
        "PH.D BUSINESS ADMINISTRATION",
        "PH.D COMPUTER SCIENCE",
        "PH.D ECONOMICS",
        "PH.D ENGLISH LANGUAGE AND LITERATURE",
        "PH.D INFORMATION RESOURCES MANAGEMENT",
        "PH.D MARKETING",
        "PH.D MASS COMMUNICATION",
        "PH.D MICROBIOLOGY",
        "PH.D POLITICAL SCIENCE",
        "PH.D PUBLIC HEALTH"
    ]
}

window.onload = function() {
    const program = document.querySelector("#program")
    const courseList = document.querySelector("#course")
   
    for (var x in courseObject) {
        // console.log(x);
        program.options[program.options.length] = new Option(x);
    }
   
    program.onchange = function() {
        //empty Chapters- and Topics- dropdowns
        courseList.length = 1;

        //display correct values
        var z = courseObject[this.value];
        // console.log(z);

        for (var i = 0; i < z.length; i++) {
            courseList.options[courseList.options.length] = new Option(z[i]);
        }
    }
}



	
