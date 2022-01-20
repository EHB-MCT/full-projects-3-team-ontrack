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
    }
}


/* Checking the page the user is on */
let indexpage = document.getElementById("indexPage");
if (indexpage) {
    index.checkLanguage();
}