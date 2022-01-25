"use strict";

/** Index.html - Choose language **/
let index = {
    pressStart() {
        document.getElementById('quitButton').style.display = "none"
        document.getElementById('start').addEventListener('click', (e) => {
            document.getElementById('startPage').style.display = "none";
            document.getElementById('quitButton').style.display = "inherit"
            document.getElementById('languages').style.display = "inherit";
            this.checkLanguage();
        })
    },
    checkLanguage() {
        document.getElementById('languages').addEventListener('click', (e) => {
            localStorage.setItem('language', e.target.id);
            let language = localStorage.getItem("language");
            if (language != "languages") {
                let htmlString = ``;
                document.getElementById('outside').innerHTML = ``;
                if (language == "Engels") {
                    htmlString = ` 
                    <div id="name">  
                        <div id="conducteurText">
                            <img id="conducteurTiny" src="./img/conducteur.png" alt="conducteur">
                            <div id="nameText">
                            <p>
                            Hello! My name is Guido.
                            </p>
                            <p>
                            I am Train World's train conductor.
                            </p>
                            <p>
                            You must be the new conductor I hired.
                            </p>
                            <p>
                            What is your name?
                            </p>
                            </div>
                        </div>
                <form action="submit" id="formName">
                    <input type="text" id="username" placeholder="your name" required>
                    <div class="buttons">
                        <p id="next">Next</p>
                    </div>
                </form>
            </div>`
                } else if (language == "Nederlands") {
                    htmlString = ` <div id="name">   
                    <div id="conducteurText">
                    <img id="conducteurTiny" src="./img/conducteur.png" alt="conducteur">
                    <div id="nameText">
                        <p>
                            Hallo! Mijn naam is Guido!
                        </p>
                        <p>
                            Ik ben Train World's trein conducteur.
                        </p>
                        <p>
                        Jij moet de nieuwe conducteur zijn die ik heb ingehuurd.
                        </p>
                        <p>
                            Wat is jouw naam?
                        </p>
                    </div>
                </div>
                <form action="submit" id="formName">
                    <input type="text" id="username" placeholder="jouw naam" required>
                    <div class="buttons">
                        <p id="next">Volgende</p>
                    </div>
                </form>
            </div>
            `
                } else if (language == "Frans") {
                    htmlString = ` <div id="name">  
                     <div id="conducteurText">
                    <img id="conducteurTiny" src="./img/conducteur.png" alt="conducteur">
                    <div id="nameText">
                        <p>
                        Bonjour ! Mon nom est Guido.
                        </p>
                        <p>
                        Je suis le conducteur de train de Train World.
                        </p>
                        <p>
                        Vous devez être le nouveau conducteur que j'ai engagé.
                        </p>
                        <p>
                        Quel est votre nom ?
                        </p>
                    </div>
                </div>
                <form action="submit" id="formName">
                    <input type="text" id="username" placeholder="votre nom" required>
                    <div class="buttons">
                        <p id="next">Suivant</p>
                    </div>
                </form>
            </div>
           `
                } else if (language == "Duits") {
                    htmlString = ` 
                    <div id="name">  
                        <div id="conducteurText">
                            <img id="conducteurTiny" src="./img/conducteur.png" alt="conducteur">
                             <div id="nameText">
                             <p>
                             Hallo! Mein Name ist Guido.
                             </p>
                             <p>
                             Ich bin der Zugführer von Train World.
                            </p>
                            <p>
                            Sie müssen der neue Schaffner sein, den ich eingestellt habe.
                            </p>
                            <p>
                            Wie ist dein Name?
                            </p>
                            </div>
                    </div>
                    <form action="submit" id="formName">
                        <input type="text" id="username" placeholder="dein Name" required>
                        <div class="buttons">
                            <p id="next">nächste</p>
                        </div>
                    </form>
                </div>
             `
                }
                document.getElementById('outside').innerHTML = htmlString;

                this.getNameAndShowText();
            }
        })

    },
    getNameAndShowText() {
        document.getElementById('formName').addEventListener('click', (e) => {
            e.preventDefault();
            let name = document.getElementById('username').value;
            let language = localStorage.getItem("language");
            if (name) {
                let htmlString = ``;
                document.getElementById('outside').innerHTML = ``;
                if (language == "Engels") {
                    htmlString = ` 
                    <div id="name">  
                        <div id="conducteurText">
                            <img id="conducteurTiny" src="./img/conducteur.png" alt="conducteur">
                            <div id="nameText">
                            <p>
                            Nice to meet you ${name}!
                            </p>
                            <p>
                            I'm sure you will make the best train Train World has ever seen!
                            </p>
                            <p>
                           If you are ready, press Build.
                            </p>
                            </div>
                        </div>
                    <div class="buttons" id="lower">
                        <p id="build">Build</p>
                    </div>
            </div>`
                } else if (language == "Nederlands") {
                    htmlString = ` 
                <div id="name">  
                    <div id="conducteurText">
                        <img id="conducteurTiny" src="./img/conducteur.png" alt="conducteur">
                        <div id="nameText">
                        <p>
                        Leuk je te ontmoeten ${name}!
                        </p>
                        <p>
                        Ik weet zeker dat je de beste trein maakt die de Treinwereld ooit gezien heeft!
                        </p>
                        <p>
                        Als u klaar bent, drukt u op bouw.
                        </p>
                        </div>
                    </div>
                <div class="buttons" id="lower">
                    <p id="build">Bouw</p>
                </div>
        </div>`
                } else if (language == "Frans") {
                    htmlString = ` 
                <div id="name">  
                    <div id="conducteurText">
                        <img id="conducteurTiny" src="./img/conducteur.png" alt="conducteur">
                        <div id="nameText">
                        <p>
                        Enchanté de vous rencontrer ${name}!
                        </p>
                        <p>
                        Je suis sûr que vous ferez le meilleur train que Train World ait jamais vu !
                        </p>
                        <p>
                        Si vous êtes prêt, appuyez sur Build.
                        </p>
                        </div>
                    </div>
                <div class="buttons" id="lower">
                    <p id="build">Construire</p>
                </div>
        </div>`
                } else if (language == "Duits") {
                    htmlString = ` 
                <div id="name">  
                    <div id="conducteurText">
                        <img id="conducteurTiny" src="./img/conducteur.png" alt="conducteur">
                        <div id="nameText">
                        <p>
                        Schön, Sie kennenzulernen ${name}!
                        </p>
                        <p>
                        Ich bin sicher, dass Sie den besten Zug bauen werden, den Train World je gesehen hat!

                        </p>
                        <p>
                        Wenn Sie bereit sind, drücken Sie auf Erstellen.
                        </p>
                        </div>
                    </div>
                <div class="buttons" id="lower">
                    <p id="build">Bauen Sie</p>
                </div>
        </div>`
                }
                document.getElementById('outside').innerHTML = htmlString;
                document.getElementById('build').addEventListener('click', (e) => {
                    window.location.href = "html/startTrain.html"
                })

            }

        })
    }
}


/** StartTrain.html - Make your train **/
let trainMaker = {
    slideIndex: 0,
    /* Choose a locomotive */
    selectFront() {
        let language = localStorage.getItem("language");
        let htmlPage = document.getElementById('createTrainPage');
        htmlPage.innerHTML = ``;
        document.getElementById('header').style.display = "inherit"
        let htmlString = ``;
        if (language == "Engels") {
            htmlString = ` <div id="Engels" class="options">
            <p>Choose your locomotive</p>
            <div id="slideshow">
               <div class="slide" id="front1"><p> placeholder image/gif 1 </p></div>
               <div class="slide" id="front2"><p> placeholder image/gif 2 </p></div>
               <div class="slide" id="front3"><p> placeholder image/gif 3 </p></div>
               <a class="prev" onclick="changeSlide(-1)"> arrow left</a>
               <a class="next" onclick="this.changeSlide(1)"> arrow right</a>
             
            </div>
            <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons">
                <p id="selectLocomotive">Select</p>
            </div>
        </div>`
        } else if (language == "Nederlands") {
            htmlString = ` <div id="Nederlands" class="options">
            <p>Kies jouw locomotief</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons">
                <p id="selectLocomotive">Selecteer</p>
            </div>
        </div>`
        } else if (language == "Frans") {
            htmlString = ` <div id="Frans" class="options">
            <p>Choisissez votre locomotive</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons" >
                <p id="selectLocomotive">choisissez</p>
            </div>
        </div>`
        } else if (language == "Duits") {
            htmlString = ` <div id="Duits" class="options">
            <p>Wählen Sie Ihre Lokomotive</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons">
                <p id="selectLocomotive">auswählen</p>
            </div>
        </div>`
        }

        htmlPage.innerHTML = htmlString

        this.showSlide(0)

        document.getElementById('selectLocomotive').addEventListener('click', (e) => {
            this.selectWagon1(htmlPage)
        })
    },

    changeSlide(n) {
        this.slideIndex += n
        this.showSlide(this.slideIndex);
    },

    showSlide(n) {
        /* var i; */
        var slides = document.getElementsByClassName("slide");
        if (n > slides.length) {
            this.slideIndex = 0
        }
        if (n < 0) {
            this.slideIndex = slides.length
        }
        //maybe unnecessary
        /* for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        } */
        slides[this.slideIndex].style.display = "block";
    },

    /* Choose a first wagon */
    selectWagon1(htmlPage) {
        let language = localStorage.getItem("language");
        htmlPage.innerHTML = ``;
        document.getElementById('header').innerHTML = ` <img src="../img/header/header_2.png" alt="header 2" >`
        let htmlString = ``;
        if (language == "Engels") {
            htmlString = ` <div id="Engels" class="options">
            <p>Choose your first wagon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons">
                <p id="selectWagon1">Select</p>
            </div>
        </div>`
        } else if (language == "Nederlands") {
            htmlString = ` <div id="Nederlands" class="options">
            <p>Kies jouw eerste wagon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons">
                <p id="selectWagon1">Selecteer</p>
            </div>
        </div>`
        } else if (language == "Frans") {
            htmlString = ` <div id="Frans" class="options">
            <p>Choisissez votre premier wagon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons"
                <p id="selectWagon1">choisissez</p>
            </div>
        </div>`
        } else if (language == "Duits") {
            htmlString = ` <div id="Duits" class="options">
            <p>Wählen Sie Ihren ersten Waggon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons">
                <p id="selectWagon1">auswählen</p>
            </div>
        </div>`
        }

        htmlPage.innerHTML = htmlString

        document.getElementById('selectWagon1').addEventListener('click', (e) => {
            this.selectWagon2(htmlPage)
        })
    },
    /* Choose a second wagon */
    selectWagon2(htmlPage) {
        let language = localStorage.getItem("language");
        htmlPage.innerHTML = ``;
        document.getElementById('header').innerHTML = ` <img src="../img/header/header_3.png" alt="header 3" >`
        let htmlString = ``;
        if (language == "Engels") {
            htmlString = ` <div id="Engels" class="options">
            <p>Choose your second wagon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons">
                <p id="selectWagon2">Select</p>
            </div>
        </div>`
        } else if (language == "Nederlands") {
            htmlString = ` <div id="Nederlands" class="options">
            <p>Kies jouw tweede wagon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons">
                <p id="selectWagon2">Selecteer</p>
            </div>
        </div>`
        } else if (language == "Frans") {
            htmlString = ` <div id="Frans" class="options">
            <p>Choisissez votre deuxième wagon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
            <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons">
                <p id="selectWagon2">choisissez</p>
            </div>
        </div>`
        } else if (language == "Duits") {
            htmlString = ` <div id="Duits" class="options">
            <p>Wählen Sie Ihren zweiten Waggon</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
             <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons">
                <p id="selectWagon2">auswählen</p>
            </div>
        </div>`
        }

        htmlPage.innerHTML = htmlString

        document.getElementById('selectWagon2').addEventListener('click', (e) => {
            this.selectWheels(htmlPage)
        })
    },
    /* Choose wheels */
    selectWheels(htmlPage) {
        let language = localStorage.getItem("language");
        htmlPage.innerHTML = ``;
        document.getElementById('header').innerHTML = ` <img src="../img/header/header_4.png" alt="header 4" >`
        let htmlString = ``;
        if (language == "Engels") {
            htmlString = ` <div id="Engels" class="options">
            <p>Choose your wheels</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
             <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons">
                <p id="selectWheels">Select</p>
            </div>
        </div>`
        } else if (language == "Nederlands") {
            htmlString = ` <div id="Nederlands" class="options">
            <p>Kies jouw wielen</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
             <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons">
                <p id="selectWheels">Selecteer</p>
            </div>
        </div>`
        } else if (language == "Frans") {
            htmlString = ` <div id="Frans" class="options">
            <p>Wählen Sie Ihre Räder</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
             <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons">
                <p id="selectWheels">choisissez</p>
            </div>
        </div>`
        } else if (language == "Duits") {
            htmlString = ` <div id="Duits" class="options">
            <p>Wählen Sie Ihre Räder</p>
            <div id="imgPlaceholderOptions">
                <p>image placeholder</p>
            </div>
             <div id="colours">
                <p id="white"></p>
                <p id="red"></p>
                <p id="orange"></p>
                <p id="yellow"></p>
                <p id="green"></p>
                <p id="blue"></p>
                <p id="purple"></p>
                <p id="black"></p>
            </div>
            <div class="buttons">
                <p id="selectWheels">auswählen</p>
            </div>
        </div>`
        }

        htmlPage.innerHTML = htmlString

        document.getElementById('selectWheels').addEventListener('click', (e) => {
            this.confirmPage(htmlPage)
        })
    },


    /* Preview train + Options */
    confirmPage(htmlPage) {
        let language = localStorage.getItem("language");
        let htmlString = ``
        htmlPage.innerHTML = ``;
        document.getElementById('header').innerHTML = ` <img src="../img/header/header_5.png" alt="header 5" >`
        if (language == "Engels") {
            htmlString = ` <div id="Engels" class="preview">
            <p>Preview</p>
            <div id="imgPlaceholderPreview">
                <p>image placeholder</p>
            </div>
            <div id="optionButtons">
                <p id="show" class="buttons">Show on screen</p>
                <p id="print" class="buttons">Print card</p>
                <p id="e-mail" class="buttons">e-mail</p>
            </div>
            <div class="cancelButton" id="cancelButton">
            <p id="cancel">Cancel</p>
            </div>
        </div>`
        } else if (language == "Nederlands") {
            htmlString = ` <div id="Engels" class="preview">
            <p>Preview</p>
            <div id="imgPlaceholderPreview">
                <p>image placeholder</p>
            </div>
            <div id="optionButtons">
                <p id="show" class="buttons">Op scherm tonen</p>
                <p id="print" class="buttons">Kaart afdrukken</p>
                <p id="e-mail" class="buttons">e-Mail</p>
            </div>
            <div class="cancelButton" id="cancelButton">
            <p id="cancel">annuleren</p>
            </div>
        </div>`
        } else if (language == "Frans") {
            htmlString = ` <div id="Engels" class="preview">
            <p>aperçu</p>
            <div id="imgPlaceholderPreview">
                <p>image placeholder</p>
            </div>
            <div id="optionButtons">
                <p id="show" class="buttons">Afficher sur l'écran</p>
                <p id="print" class="buttons">Imprimer la carte</p>
                <p id="e-mail" class="buttons">E-Mail</p>
            </div>
            <div class="cancelButton" id="cancelButton">
            <p id="cancel">Annuler</p>
            </div>
        </div>`
        } else if (language == "Duits") {
            htmlString = ` <div id="Engels" class="preview">
            <p>Vorschau</p>
            <div id="imgPlaceholderPreview">
                <p>image placeholder</p>
            </div>
            <div id="optionButtons">
                <p id="show" class="buttons">auf dem Bildschirm zeigen</p>
                <p id="print" class="buttons">Karte drucken</p>
                <p id="e-mail" class="buttons">E-Mail</p>
            </div>
            <div class="cancelButton" id="cancelButton">
            <p id="cancel">Abbrechen</p>
            </div>
        </div>`
        }
        htmlPage.innerHTML = htmlString

        document.getElementById('optionButtons').addEventListener('click', (e) => {
            if (e.target.id !== 'show') {
                endingOptions.showTrain
            } else if (e.target.id !== 'print') {
                endingOptions.printTrain
            } else if (e.target.id !== 'e-mail') {
                endingOptions.mailTrain
            }
        })

        document.getElementById('cancelButton').addEventListener('click', (e) => {
            if (e.target.id !== 'cancelButton') {
                window.location.href = "/docs";
            }
        })

    }
}

let endingOptions = {
    showTrain() {
        window.location.href = "/docs";
    },
    printTrain() {
        window.location.href = "/docs";
    },
    mailTrain() {
        window.location.href = "/docs";
    }
}


/* Checking the page the user is on */
let indexpage = document.getElementById("indexPage");
if (indexpage) {
    index.pressStart();
}

let startTrainPage = document.getElementById("createTrainPage");
if (startTrainPage) {
    trainMaker.selectFront()
}

let quitButton = document.getElementById('quitButton');
if (quitButton) {
    quitButton.addEventListener('click', (e) => {
        window.location.href = "/docs";
    })
}