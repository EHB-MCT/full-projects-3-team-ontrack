"use strict";

let language = "";

let index = {
    checkLanguage() {
        document.getElementById('languages').addEventListener('click', (e) => {
            language = e.target.id;
            if (language != "languages") {
                document.getElementById('languages').style.display = "none";
                document.getElementsByClassName(language)[0].style.display = "inherit";
            }
        })
        index.chooseOption();
    },
    chooseOption() {
        document.getElementById("optionsStart").addEventListener('click', (e) => {
            console.log(e.target.id)
            if (e.target.id == "train") {
                window.location.href = "html/train/locomotive.html";
            } else if (e.target.id == "selfie") {
                window.location.href = "html/selfie/takeSelfie.html";
            }
        })
    }
}


/* Checking the page the user is on */
let indexpage = document.getElementById("indexPage");
if (indexpage) {
    index.checkLanguage();
}