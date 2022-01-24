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
        let htmlPage = document.getElementById("createTrainPage");
        let htmlString = ``
        if (language == "Engels") {
            htmlString = ` <div id="Engels" class="startpoint">
            <p>Create your own train</p>
            <div id="imgPlaceholder">
                <p>Image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="start">Start</p>
            </div>
        </div>`
        } else if (language == "Nederlands") {
            htmlString = `  <div id="Nederlands" class="startpoint">
           <p>Maak jouw eigen trein</p>
           <div id="imgPlaceholder">
               <p>afbeelding plaatshouder</p>
           </div>
           <div class="buttons" id="startButton">
               <p id="start">Start</p>
           </div>
       </div>`
        } else if (language == "Frans") {
            htmlString = `    <div id="Frans" class="startpoint">
            <p>créez votre propre train</p>
            <div id="imgPlaceholder">
                <p>placeur d'image</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="start">Commencer</p>
            </div>
        </div>`
        } else if (language == "Duits") {
            htmlString = `        <div id="Duits" class="startpoint">
            <p>Gestalte deinen eigenen Zug</p>
            <div id="imgPlaceholder">
                <p>Bild Platzhalter</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="start">Start</p>
            </div>
        </div>`
        }

        htmlPage.innerHTML = htmlString;

        document.getElementById('start').addEventListener('click', (e) => {
            this.selectFront(htmlPage)
        })

    },
    selectFront(htmlPage) {
        let language = localStorage.getItem("language");
        htmlPage.innerHTML = ``;
        document.getElementById('header').style.display = "inherit"
        let htmlString = ``;
        if (language == "Engels") {
            htmlString = ` <div id="Engels" class="options">
            <p>Choose your locomotive</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectLocomotive">Select</p>
            </div>
        </div>`
        } else if (language == "Nederlands") {
            htmlString = ` <div id="Nederlands" class="options">
            <p>Kies jouw locomotief</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectLocomotive">Selecteer</p>
            </div>
        </div>`
        } else if (language == "Frans") {
            htmlString = ` <div id="Frans" class="options">
            <p>Choisissez votre locomotive</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectLocomotive">choisissez</p>
            </div>
        </div>`
        } else if (language == "Duits") {
            htmlString = ` <div id="Duits" class="options">
            <p>Wählen Sie Ihre Lokomotive</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectLocomotive">auswählen</p>
            </div>
        </div>`
        }

        htmlPage.innerHTML = htmlString

        document.getElementById('selectLocomotive').addEventListener('click', (e) =>{
            this.selectWagon1(htmlPage)
        })
    },
    selectWagon1(htmlPage){
        let language = localStorage.getItem("language");
        htmlPage.innerHTML = ``;
        document.getElementById('header').innerHTML = ` <img src="../../img/header/header_2.png" alt="header 2" >`
        let htmlString = ``;
        if (language == "Engels") {
            htmlString = ` <div id="Engels" class="options">
            <p>Choose your first wagon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectWagon1">Select</p>
            </div>
        </div>`
        } else if (language == "Nederlands") {
            htmlString = ` <div id="Nederlands" class="options">
            <p>Kies jouw eerste wagon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectWagon1">Selecteer</p>
            </div>
        </div>`
        } else if (language == "Frans") {
            htmlString = ` <div id="Frans" class="options">
            <p>Choisissez votre premier wagon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectWagon1">choisissez</p>
            </div>
        </div>`
        } else if (language == "Duits") {
            htmlString = ` <div id="Duits" class="options">
            <p>Wählen Sie Ihren ersten Waggon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectWagon1">auswählen</p>
            </div>
        </div>`
        }

        htmlPage.innerHTML = htmlString

        document.getElementById('selectWagon1').addEventListener('click', (e) =>{
            this.selectWagon2(htmlPage)
        })
    },
    selectWagon2(htmlPage){
        let language = localStorage.getItem("language");
        htmlPage.innerHTML = ``;
        document.getElementById('header').innerHTML = ` <img src="../../img/header/header_3.png" alt="header 3" >`
        let htmlString = ``;
        if (language == "Engels") {
            htmlString = ` <div id="Engels" class="options">
            <p>Choose your second wagon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectWagon2">Select</p>
            </div>
        </div>`
        } else if (language == "Nederlands") {
            htmlString = ` <div id="Nederlands" class="options">
            <p>Kies jouw tweede wagon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectWagon2">Selecteer</p>
            </div>
        </div>`
        } else if (language == "Frans") {
            htmlString = ` <div id="Frans" class="options">
            <p>Choisissez votre deuxième wagon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectWagon2">choisissez</p>
            </div>
        </div>`
        } else if (language == "Duits") {
            htmlString = ` <div id="Duits" class="options">
            <p>Wählen Sie Ihren zweiten Waggon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectWagon2">auswählen</p>
            </div>
        </div>`
        }

        htmlPage.innerHTML = htmlString

        document.getElementById('selectWagon2').addEventListener('click', (e) =>{
            this.selectWheels(htmlPage)
        })
    },
    selectWheels(htmlPage){
        let language = localStorage.getItem("language");
        htmlPage.innerHTML = ``;
        document.getElementById('header').innerHTML = ` <img src="../../img/header/header_4.png" alt="header 4" >`
        let htmlString = ``;
        if (language == "Engels") {
            htmlString = ` <div id="Engels" class="options">
            <p>Choose your wheels</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectWheels">Select</p>
            </div>
        </div>`
        } else if (language == "Nederlands") {
            htmlString = ` <div id="Nederlands" class="options">
            <p>Kies jouw wielen</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectWheels">Selecteer</p>
            </div>
        </div>`
        } else if (language == "Frans") {
            htmlString = ` <div id="Frans" class="options">
            <p>Wählen Sie Ihre Räder</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectWheels">choisissez</p>
            </div>
        </div>`
        } else if (language == "Duits") {
            htmlString = ` <div id="Duits" class="options">
            <p>Wählen Sie Ihre Räder</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div class="buttons" id="startButton">
                <p id="selectWheels">auswählen</p>
            </div>
        </div>`
        }

        htmlPage.innerHTML = htmlString

        document.getElementById('selectWheels').addEventListener('click', (e) =>{
            this.confirmPage(htmlPage)
        })
    },
    confirmPage(htmlPage){
        let language = localStorage.getItem("language");
        htmlPage.innerHTML = ``;
        document.getElementById('header').innerHTML = ` <img src="../../img/header/header_5.png" alt="header 5" >`
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