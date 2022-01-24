"use strict";

let index = {
    checkLanguage() {
        document.getElementById('languages').addEventListener('click', (e) => {
            localStorage.setItem('language', e.target.id);
            let language = localStorage.getItem("language");
            if (language != "languages") {
                document.getElementById('languages').style.display = "none";
                document.getElementsByClassName(language)[0].style.display = "inherit";
                index.chooseOption();
            }
        })

    },
    chooseOption() {
        let language = localStorage.getItem("language");
        document.getElementsByClassName(language)[0].addEventListener('click', (e) => {
            console.log(e.target.id)
            if (e.target.id == "train") {
                window.location.href = "html/train/startTrain.html";
            } else if (e.target.id == "selfie") {
                window.location.href = "html/selfie/takeSelfie.html";
            }
        })
    }
}

let trainMaker = {
    checkLanguage() {
        let language = localStorage.getItem("language");
        document.getElementById(language).style.display = "inherit";
        
    }
}


/* Checking the page the user is on */
let indexpage = document.getElementById("indexPage");
if (indexpage) {
    index.checkLanguage();
}

let startTrainPage = document.getElementById("createTrainPage");
if (startTrainPage) {
    trainMaker.checkLanguage()
}