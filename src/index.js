import _ from 'lodash';
import emailjs from '@emailjs/browser';
emailjs.init('user_24dhpAFkPLUxQNORqiHVD');
import html2canvas from 'html2canvas';
import {
    saveAs
} from 'file-saver';

"use strict";

/** Index.html - Choose language **/
let index = {
    /*Start page*/
    pressStart() {
        window.localStorage.clear();
        document.getElementById('quitButton').style.display = "none"
        document.getElementById('start').addEventListener('click', (e) => {
            document.getElementById('startPage').style.display = "none";
            document.getElementById('quitButton').style.display = "inherit"
            document.getElementById('languages').style.display = "inherit";
            this.checkLanguage();
        })
    },
    /*Language page*/
    checkLanguage() {
        document.getElementById('languages').addEventListener('click', (e) => {
            localStorage.setItem('language', e.target.id);
            let language = localStorage.getItem("language");
            if (language != "languages") {
                let htmlString = ``;
                document.getElementById('outside').innerHTML = ``;
                /*English*/
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
                            What is your <font color="#6AB0CD">name</font>?
                            </p>
                            </div>
                        </div>
                        <form autocomplete="off" action="submit" id="formName">
                            <input autocomplete="false" type="text" id="username" class="formLayout" placeholder="your name" required>
                            <div class="buttons">
                                <p id="next" >Next</p>
                            </div>
                        </form>
                    </div>`
                } 
                /*Dutch*/
                else if (language == "Nederlands") {
                    htmlString = ` 
                    <div id="name">   
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
                                Wat is jouw <font color="#6AB0CD">naam</font>?
                                </p>
                            </div>
                        </div>
                        <form autocomplete="off" action="submit" id="formName">
                            <input autocomplete="false" type="text" id="username" class="formLayout" placeholder="jouw naam" required>
                            <div class="buttons">
                                <p id="next">Volgende</p>
                            </div>
                        </form>
                    </div>`
                }
                /*French*/
                else if (language == "Frans") {
                    htmlString = ` 
                    <div id="name">  
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
                                Quel est votre <font color="#6AB0CD">nom</font> ?
                                </p>
                            </div>
                        </div>
                        <form autocomplete="off" action="submit" id="formName">
                            <input autocomplete="false" type="text" id="username" class="formLayout" placeholder="votre nom" required>
                            <div class="buttons">
                                <p id="next">Suivant</p>
                            </div>
                        </form>
                    </div>`
                } 
                /*German*/
                else if (language == "Duits") {
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
                            Wie ist dein <font color="#6AB0CD">Name</font>?
                            </p>
                            </div>
                    </div>
                    <form autocomplete="off" action="submit" id="formName">
                        <input autocomplete="false" type="text" id="username" class="formLayout" placeholder="dein Name" required>
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
        document.getElementById('username').addEventListener('keypress', (e) => {
            if (e.key === "Enter") {     
                e.preventDefault();
            }
        })
        document.getElementById('formName').addEventListener('click', (e) => {
            e.preventDefault();
            let name = document.getElementById('username').value;
            localStorage.setItem("name", name)
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
                            In a few minutes you will drive your first train.
                            </p>
                            <p>
                            Oh but wait!
                            </p>
                            <p>
                            You don't have a train yet?
                            </p>
                            <p>
                            Let's build one then!
                            </p>
                            <p>
                            If you are ready, press <font color="#6AB0CD">Build</font>.
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
                        Over een paar minuten rijdt je jouw eerste trein.
                        </p>
                        <p>
                        Oh maar wacht!
                        </p>
                        <p>
                        Heb je nog geen trein?
                        </p>
                        <p>
                        Laten we er dan 1 bouwen!
                        </p>
                        <p>
                        Als je klaar bent, druk je op <font color="#6AB0CD">bouw</font>.
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
                        Dans quelques minutes, vous conduirez votre premier train.
                        </p>
                        <p>
                        Oh mais attendez !
                        </p>
                        <p>
                        Vous n'avez pas encore de train ?
                        </p>
                        <p>
                        Construisons-en un alors !
                        </p>
                        <p>
                        Si vous êtes prêt, appuyez sur <font color="#6AB0CD">Build</font>.
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
                        In wenigen Minuten werden Sie Ihren ersten Zug fahren.
                        </p>
                        <p>
                        Oh, aber warte!
                        </p>
                        <p>
                        Sie haben noch keinen Zug?
                        </p>
                        <p>
                        Dann lasst uns einen bauen!
                        </p>
                        <p>
                        Wenn Sie bereit sind, drücken Sie auf <font color="#6AB0CD">Erstellen</font>.
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
                    window.location.href = `/${startingpoint}/html/startTrain.html`
                })

            }

        })
    }
}


/** StartTrain.html - Make your train **/
let trainMaker = {
    slideIndex: 0,
    colorFront: "gray",
    colorWagon1: "gray",
    colorWagon2: "gray",
    colorWheel: "gray",
    /* Choose a locomotive */
    selectFront() {

        let language = localStorage.getItem("language");
        let htmlPage = document.getElementById('createTrainPage');
        htmlPage.innerHTML = ``;
        document.getElementById('header').style.display = "inherit"
        let htmlString = ``;
        if (language == "Engels") {
            htmlString = ` <div class="options">
            <div id="slideshow">
               <div class="slide" id="front1"><img src="../img/fronts/C1_${this.colorFront}.png"></div>
               <div class="slide" id="front2"><img src="../img/fronts/M1_${this.colorFront}.png"></div>
               <div class="slide" id="front3"><img src="../img/fronts/O1_${this.colorFront}.png"></div>
               <a id="prev" class="prev"> &#10094</a>
               <a id="next" class="next"> &#10095</a>
            </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>
                        Choose your <font color="#6AB0CD">locomotive</font>
                    </p>
                    <button class="buttons" id="nextOption">Next</button>
                </div>
            </div>
        </div>`
        } else if (language == "Nederlands") {
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/fronts/C1_${this.colorFront}.png"></div>
            <div class="slide" id="front2"><img src="../img/fronts/M1_${this.colorFront}.png"></div>
            <div class="slide" id="front3"><img src="../img/fronts/O1_${this.colorFront}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
               <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>Kies uw locomotief</p>
                    <button class="buttons" id="nextOption">Volgende</button>
                </div>
            </div>
        </div>`
        } else if (language == "Frans") {
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/fronts/C1_${this.colorFront}.png"></div>
            <div class="slide" id="front2"><img src="../img/fronts/M1_${this.colorFront}.png"></div>
            <div class="slide" id="front3"><img src="../img/fronts/O1_${this.colorFront}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
            <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>
                    Choisissez votre locomotive
                    </p>
                    <button class="buttons" id="nextOption">Suivant</button>
                </div>
            </div>
        </div>`
        } else if (language == "Duits") {
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/fronts/C1_${this.colorFront}.png"></div>
            <div class="slide" id="front2"><img src="../img/fronts/M1_${this.colorFront}.png"></div>
            <div class="slide" id="front3"><img src="../img/fronts/O1_${this.colorFront}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
            <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>
                     Wählen Sie Ihre Lokomotive
                    </p>
                    <button class="buttons" id="nextOption">Nächste</button>
                </div>
            </div>
        </div>`
        }

        htmlPage.innerHTML = htmlString

        this.showSlide(0)
        document.getElementById("prev").addEventListener('click', (e) => this.changeSlide(-1))
        document.getElementById("next").addEventListener('click', (e) => this.changeSlide(1))

        let type = ""

        if (this.slideIndex == 0) {
            type = "C"
        } else if (this.slideIndex == 1) {
            type = "M"
        } else if (this.slideIndex == 2) {
            type = "O"
        }

        localStorage.setItem('front', `${type}1_${this.colorFront}`)


        document.getElementById('next').addEventListener('click', (e) => {
            if (this.slideIndex == 0) {
                type = "C"
            } else if (this.slideIndex == 1) {
                type = "M"
            } else if (this.slideIndex == 2) {
                type = "O"
            }
            localStorage.setItem('front', `${type}1_${this.colorFront}`)
            this.selectFront();
        })

        document.getElementById('prev').addEventListener('click', (e) => {
            if (this.slideIndex == 0) {
                type = "C"
            } else if (this.slideIndex == 1) {
                type = "M"
            } else if (this.slideIndex == 2) {
                type = "O"
            }
            localStorage.setItem('front', `${type}1_${this.colorFront}`)
            this.selectFront();

        })

        document.getElementById('colours').addEventListener('click', (e) => {
            if (e.target.id !== "colours") {
                this.colorFront = e.target.id;
                localStorage.setItem('front', `${type}1_${this.colorFront}`)
                this.selectFront();
            }
        })

        document.getElementById('nextOption').addEventListener('click', (e) => {
            this.selectWagon1(htmlPage)
        })
    },

    changeSlide(n) {
        this.slideIndex += n
        this.showSlide(this.slideIndex);
    },

    showSlide(n) {
        var i;
        var slides = document.getElementsByClassName("slide");
        if (n > slides.length - 1) {
            this.slideIndex = 0
        }
        if (n < 0) {
            this.slideIndex = slides.length - 1
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.slideIndex].style.display = "block";
    },

    /* Choose a first wagon */
    selectWagon1(htmlPage) {
        let language = localStorage.getItem("language");
        htmlPage.innerHTML = ``;
        document.getElementById('header').innerHTML = ` <img src="../img/header/header_2.png" alt="header 2" >`
        let htmlString = ``;
        if (language == "Engels") {
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/wagon/C2_${this.colorWagon1}.png"></div>
            <div class="slide" id="front2"><img src="../img/wagon/M2_${this.colorWagon1}.png"></div>
            <div class="slide" id="front3"><img src="../img/wagon/O2_${this.colorWagon1}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
            <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>Great choice
                    <br>
                    Choose your <font color="#6AB0CD">first wagon</font></p>
                    <button class="buttons" id="nextOption">Next</button>
                </div>
            </div>
        </div>`
        } else if (language == "Nederlands") {
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/wagon/C2_${this.colorWagon1}.png"></div>
            <div class="slide" id="front2"><img src="../img/wagon/M2_${this.colorWagon1}.png"></div>
            <div class="slide" id="front3"><img src="../img/wagon/O2_${this.colorWagon1}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
            <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>Goeie keuze
                    <br>
                    Kies je <font color="#6AB0CD">eerste wagon</font>.</p>
                    <button class="buttons" id="nextOption">Volgende</button>
                </div>
            </div>
        </div>`
        } else if (language == "Frans") {
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/wagon/C2_${this.colorWagon1}.png"></div>
            <div class="slide" id="front2"><img src="../img/wagon/M2_${this.colorWagon1}.png"></div>
            <div class="slide" id="front3"><img src="../img/wagon/O2_${this.colorWagon1}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
            <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>
                    Excellent choix !
                    <br>
                    Choisissez votre <font color="#6AB0CD">premier wagon</font>.</p>
                    <button class="buttons" id="nextOption">Suivant</button>
                </div>
            </div>
        </div>`
        } else if (language == "Duits") {
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/wagon/C2_${this.colorWagon1}.png"></div>
            <div class="slide" id="front2"><img src="../img/wagon/M2_${this.colorWagon1}.png"></div>
            <div class="slide" id="front3"><img src="../img/wagon/O2_${this.colorWagon1}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
            <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>
                    Gute Wahl!
                    <br>
                    Wählen Sie Ihren <font color="#6AB0CD">ersten Waggon</font>.</p>
                    <button class="buttons" id="nextOption">Nächste</button>
                </div>
            </div>
        </div>`
        }

        htmlPage.innerHTML = htmlString
        this.showSlide(0)
        document.getElementById("prev").addEventListener('click', (e) => this.changeSlide(-1))
        document.getElementById("next").addEventListener('click', (e) => this.changeSlide(1))

        let type = ""

        if (this.slideIndex == 0) {
            type = "C"
        } else if (this.slideIndex == 1) {
            type = "M"
        } else if (this.slideIndex == 2) {
            type = "O"
        }

        localStorage.setItem('wagon1', `${type}2_${this.colorWagon1}`)

        document.getElementById('next').addEventListener('click', (e) => {
            if (this.slideIndex == 0) {
                type = "C"
            } else if (this.slideIndex == 1) {
                type = "M"
            } else if (this.slideIndex == 2) {
                type = "O"
            }
            localStorage.setItem('wagon1', `${type}2_${this.colorWagon1}`)
            this.selectWagon1(htmlPage);
        })

        document.getElementById('prev').addEventListener('click', (e) => {
            if (this.slideIndex == 0) {
                type = "C"
            } else if (this.slideIndex == 1) {
                type = "M"
            } else if (this.slideIndex == 2) {
                type = "O"
            }
            localStorage.setItem('wagon1', `${type}2_${this.colorWagon1}`)
            this.selectWagon1(htmlPage);
        })

        document.getElementById('colours').addEventListener('click', (e) => {
            if (e.target.id !== "colours") {
                this.colorWagon1 = e.target.id;
                localStorage.setItem('wagon1', `${type}2_${this.colorWagon1}`)
                this.selectWagon1(htmlPage);
            }
        })

        document.getElementById('nextOption').addEventListener('click', (e) => {
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
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/wagon/C2_${this.colorWagon2}.png"></div>
            <div class="slide" id="front2"><img src="../img/wagon/M2_${this.colorWagon2}.png"></div>
            <div class="slide" id="front3"><img src="../img/wagon/O2_${this.colorWagon2}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
            <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>Great choice
                    <br>
                    Choose your <font color="#6AB0CD">second wagon</font>.</p>
                    <button class="buttons" id="nextOption">Next</button>
                </div>
            </div>
        </div>`
        } else if (language == "Nederlands") {
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/wagon/C2_${this.colorWagon2}.png"></div>
            <div class="slide" id="front2"><img src="../img/wagon/M2_${this.colorWagon2}.png"></div>
            <div class="slide" id="front3"><img src="../img/wagon/O2_${this.colorWagon2}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
            <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>Goeie keuze
                    <br>
                    Kies je <font color="#6AB0CD">tweede wagon</font>.</p>
                    <button class="buttons" id="nextOption">Volgende</button>
                </div>
            </div>
        </div>`
        } else if (language == "Frans") {
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/wagon/C2_${this.colorWagon2}.png"></div>
            <div class="slide" id="front2"><img src="../img/wagon/M2_${this.colorWagon2}.png"></div>
            <div class="slide" id="front3"><img src="../img/wagon/O2_${this.colorWagon2}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
            <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>
                    Excellent choix !
                    <br>
                    Choisissez votre <font color="#6AB0CD">deuxième wagon</font>.</p>
                    <button class="buttons" id="nextOption">Suivant</button>
                </div>
            </div>
        </div>`
        } else if (language == "Duits") {
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/wagon/C2_${this.colorWagon2}.png"></div>
            <div class="slide" id="front2"><img src="../img/wagon/M2_${this.colorWagon2}.png"></div>
            <div class="slide" id="front3"><img src="../img/wagon/O2_${this.colorWagon2}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
            <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/redwheels
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>
                    Gute Wahl!
                    <br>
                    Wählen Sie Ihren <font color="#6AB0CD">zweite Waggon</font>.</p>
                    <button class="buttons" id="nextOption">Nächste</button>
                </div>
            </div>
        </div>`
        }

        htmlPage.innerHTML = htmlString
        this.showSlide(0)
        document.getElementById("prev").addEventListener('click', (e) => this.changeSlide(-1))
        document.getElementById("next").addEventListener('click', (e) => this.changeSlide(1))

        let type = ""

        if (this.slideIndex == 0) {
            type = "C"
        } else if (this.slideIndex == 1) {
            type = "M"
        } else if (this.slideIndex == 2) {
            type = "O"
        }

        localStorage.setItem('wagon2', `${type}3_${this.colorWagon2}`)

        document.getElementById('next').addEventListener('click', (e) => {
            if (this.slideIndex == 0) {
                type = "C"
            } else if (this.slideIndex == 1) {
                type = "M"
            } else if (this.slideIndex == 2) {
                type = "O"
            }
            localStorage.setItem('wagon2', `${type}3_${this.colorWagon2}`)
            this.selectWagon2(htmlPage);
        })

        document.getElementById('prev').addEventListener('click', (e) => {
            if (this.slideIndex == 0) {
                type = "C"
            } else if (this.slideIndex == 1) {
                type = "M"
            } else if (this.slideIndex == 2) {
                type = "O"
            }
            localStorage.setItem('wagon2', `${type}3_${this.colorWagon2}`)
            this.selectWagon2(htmlPage);
        })

        document.getElementById('colours').addEventListener('click', (e) => {
            if (e.target.id !== "colours") {
                this.colorWagon2 = e.target.id;
                localStorage.setItem('wagon2', `${type}3_${this.colorWagon2}`)
                this.selectWagon2(htmlPage);
            }
        })

        document.getElementById('nextOption').addEventListener('click', (e) => {
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
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/wheels/C4_${this.colorWheel}.png"></div>
            <div class="slide" id="front2"><img src="../img/wheels/M4_${this.colorWheel}.png"></div>
            <div class="slide" id="front3"><img src="../img/wheels/O4_${this.colorWheel}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
            <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>Lastly, choose your <font color="#6AB0CD">wheels</font>.</p>
                    <button class="buttons" id="nextOption">Next</button>
                </div>
            </div>
        </div>`
        } else if (language == "Nederlands") {
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/wheels/C4_${this.colorWheel}.png"></div>
            <div class="slide" id="front2"><img src="../img/wheels/M4_${this.colorWheel}.png"></div>
            <div class="slide" id="front3"><img src="../img/wheels/O4_${this.colorWheel}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
            <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>Ten slotte, kies je <font color="#6AB0CD">wielen</font>.</p>
                    <button class="buttons" id="nextOption">Volgende</button>
                </div>
            </div>
        </div>`
        } else if (language == "Frans") {
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/wheels/C4_${this.colorWheel}.png"></div>
            <div class="slide" id="front2"><img src="../img/wheels/M4_${this.colorWheel}.png"></div>
            <div class="slide" id="front3"><img src="../img/wheels/O4_${this.colorWheel}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
            <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
            wagon
                    <p>Enfin, choisissez vos <font color="#6AB0CD">roues</font>.</p>
                    <button class="buttons" id="nextOption">Suivant</button>
                </div>
            </div>
        </div>`
        } else if (language == "Duits") {
            htmlString = ` <div class="options">
            <div id="slideshow">
            <div class="slide" id="front1"><img src="../img/wheels/C4_${this.colorWheel}.png"></div>
            <div class="slide" id="front2"><img src="../img/wheels/M4_${this.colorWheel}.png"></div>
            <div class="slide" id="front3"><img src="../img/wheels/O4_${this.colorWheel}.png"></div>
            <a id="prev" class="prev"> &#10094</a>
            <a id="next" class="next"> &#10095</a>
         </div>
            <div id="colours">
                <img id="red" src="./../img/colours/red.png">
                <img id="orange" src="./../img/colours/orange.png">
                <img id="yellow" src="./../img/colours/yellow.png">
                <img id="green" src="./../img/colours/green.png">
                <img id="aqua" src="./../img/colours/aqua.png">
                <img id="blue" src="./../img/colours/blue.png">
                <img id="purple" src="./../img/colours/purple.png">
                <img id="pink" src="./../img/colours/pink.png">
            </div>
            <div id="textBubble">
                <img src="./../img/conducteur.png">
                <div>
                    <p>Schließlich wählen Sie Ihre <font color="#6AB0CD">Räder</font>.</p>
                    <button class="buttons" id="nextOption">Nächste</button>
                </div>
            </div>
        </div>`
        }

        htmlPage.innerHTML = htmlString
        this.showSlide(0)
        document.getElementById("prev").addEventListener('click', (e) => this.changeSlide(-1))
        document.getElementById("next").addEventListener('click', (e) => this.changeSlide(1))

        let type = ""

        if (this.slideIndex == 0) {
            type = "C"
        } else if (this.slideIndex == 1) {
            type = "M"
        } else if (this.slideIndex == 2) {
            type = "O"
        }

        localStorage.setItem('wheels', `${type}4_${this.colorWheel}`)

        document.getElementById('next').addEventListener('click', (e) => {
            let type = ""

            if (this.slideIndex == 0) {
                type = "C"
            } else if (this.slideIndex == 1) {
                type = "M"
            } else if (this.slideIndex == 2) {
                type = "O"
            }
            localStorage.setItem('wheels', `${type}4_${this.colorWheel}`)
            this.selectWheels(htmlPage);
        })

        document.getElementById('prev').addEventListener('click', (e) => {
            let type = ""

            if (this.slideIndex == 0) {
                type = "C"
            } else if (this.slideIndex == 1) {
                type = "M"
            } else if (this.slideIndex == 2) {
                type = "O"
            }
            localStorage.setItem('wheels', `${type}4_${this.colorWheel}`)
            this.selectWheels(htmlPage);
        })

        document.getElementById('colours').addEventListener('click', (e) => {
            if (e.target.id !== "colours") {
                this.colorWheel = e.target.id;
                localStorage.setItem('wheels', `${type}4_${this.colorWheel}`)
                this.selectWheels(htmlPage);
            }
        })

        document.getElementById('nextOption').addEventListener('click', (e) => {
            window.location.href = `/${startingpoint}/html/endTrain.html`
        })
    }
}

let endOptions = {
    language: localStorage.getItem("language"),
    name: localStorage.getItem("name"),
    htmlPage: document.getElementById('endCreateTrain'),
    init() {
        let htmlString = ``;
        let wagon2 = localStorage.getItem("wagon2")
        let wagon1 = localStorage.getItem("wagon1")
        let front = localStorage.getItem("front")
        let wheels = localStorage.getItem("wheels")

        let wagonType2 = wagon2.substring(0, 2);
        let wagonType1 = wagon1.substring(0, 2);
        let frontType = front.substring(0, 2);
        let wheelsType = wheels.substring(0, 2);


        if (this.language == "Engels") {
            htmlString = ` 
            <div class="myTrain">
                <img src="./../img/everything_together/wagon2/${wagon2}.png" alt="second wagon of train" id="${wagonType2}">
                <img src="./../img/everything_together/wagon1/${wagon1}.png" alt="first wagon of train" id="${wagonType1}">
                <img src="./../img/everything_together/fronts/${front}.png" alt="front of train" id="${frontType}" >
                <img src="./../img/everything_together/wheels/${wheels}.png" alt="wheels of train" id="${wheelsType}"> 
            </div>

        <div id="lowerText">  
            <div id="conducteurText">
            <img id="conducteurTiny" src="./../img/conducteur.png" alt="conducteur">
            <div id="nameText">
            <p>
            All done! It looks wonderfull ${this.name}.
            </p>
            <p>
            Before you start driving, I will give you your very own conductor hat. 
            </p>
            <p>
            Would you like to take a <font color="#6AB0CD">selfie</font> with it? 
            </p>
            </div>
            <div id="choice">
                <p id="yes" class="buttons smaller">Yes</p>
                <p id="no" class="buttons smaller">No</p>
            </div>
        </div>
        </div>`
        } else if (this.language == "Nederlands") {
            htmlString = ` 
            <div class="myTrain">
            <img src="./../img/everything_together/wagon2/${wagon2}.png" alt="second wagon of train" id="${wagonType2}" >
            <img src="./../img/everything_together/wagon1/${wagon1}.png" alt="first wagon of train" id="${wagonType1}">
            <img src="./../img/everything_together/fronts/${front}.png" alt="front of train" id="${frontType}">
            <img src="./../img/everything_together/wheels/${wheels}.png" alt="wheels of train" id="${wheelsType}"> 
            </div>

        <div id="lowerText">  
            <div id="conducteurText">
                <img id="conducteurTiny" src="./../img/conducteur.png" alt="conducteur">
                <div id="nameText">
                    <p>
                    Helemaal klaar! Het ziet er prachtig uit ${this.name}.
                    </p>
                    <p>
                    Voordat je gaat rijden, geef ik je je eigen conducteurspet. 
                    </p>
                    <p>
                    Wil je er een <font color="#6AB0CD">selfie</font> mee nemen?  
                    </p>
                </div>
                <div id="choice">
                    <p id="yes" class="buttons smaller">Ja</p>
                    <p id="no" class="buttons smaller">Nee</p>
                </div>
            </div>
        </div>`
        } else if (this.language == "Frans") {
            htmlString = `
            <div class="myTrain">
            <img src="./../img/everything_together/wagon2/${wagon2}.png" alt="second wagon of train" id="${wagonType2}">
            <img src="./../img/everything_together/wagon1/${wagon1}.png" alt="first wagon of train" id="${wagonType1}">
            <img src="./../img/everything_together/fronts/${front}.png" alt="front of train" id="${frontType}">
            <img src="./../img/everything_together/wheels/${wheels}.png" alt="wheels of train" id="${wheelsType}"> 
            </div>

        <div id="lowerText">  
            <div id="conducteurText">
            <img id="conducteurTiny" src="./../img/conducteur.png" alt="conducteur">
            <div id="nameText">
            <p>
            C'est fait ! C'est magnifique ${this.name}.
            </p>
            <p>
            Avant que vous ne commenciez à conduire, je vous donnerai votre propre casquette de conducteur. 
            </p>
            <p>
            Voulez-vous prendre un <font color="#6AB0CD">selfie</font> avec?
            </p>
            </div>
            <div id="choice">
                <p id="yes" class="buttons smaller">Oui</p>
                <p id="no" class="buttons smaller">Non</p>
            </div>
        </div>
        </div>`
        } else if (this.language == "Duits") {
            htmlString = `
            <div class="myTrain">
            <img src="./../img/everything_together/wagon2/${wagon2}.png" alt="second wagon of train" id="${wagonType2}">
            <img src="./../img/everything_together/wagon1/${wagon1}.png" alt="first wagon of train" id="${wagonType1}">
            <img src="./../img/everything_together/fronts/${front}.png" alt="front of train" id="${frontType}">
            <img src="./../img/everything_together/wheels/${wheels}.png" alt="wheels of train" id="${wheelsType}"> 
            </div>

        <div id="lowerText">  
            <div id="conducteurText">
            <img id="conducteurTiny" src="./../img/conducteur.png" alt="conducteur">
            <div id="nameText">
            <p>
            Alles fertig! Es sieht wunderbar aus ${this.name}
            </p>
            <p>
            Bevor Sie losfahren, gebe ich Ihnen Ihren eigenen Shaffnerkappe.   
            </p>
            <p>
            Möchten Sie ein <font color="#6AB0CD">Selfie</font> mit ihm machen? 
            </p>
            </div>
            <div id="choice">
                <p id="yes" class="buttons smaller">Ja</p>
                <p id="no" class="buttons smaller">Keine</p>
            </div>
        </div>
        </div>`
        }

        this.htmlPage.innerHTML = htmlString;


        document.getElementById("yes").addEventListener('click', (e) => {
            this.takePhoto();
        })

        document.getElementById("no").addEventListener('click', (e) => {
            this.doSomething();
        })

    },
    takePhoto() {
       
        this.htmlPage.innerHTML = `    <div id="filter">
        <video id="video" height="330" width="375" autoplay muted></video>
        <canvas id="canvas" height="330" width="375"></canvas>
        <img style="display: none;" id="image1" src="../img/conductor_hat.png" />
    </div>
    
    <div id="textFilter">
        <p class="buttons" id="doneFilter">Done</p>
    </div>`

    document.getElementById('endTrainPageBody').insertAdjacentHTML('afterend', `<script src="../facemesh.js"></script>`)

        console.log('click');
        document.getElementById('doneFilter').addEventListener('click' ,(e) =>{

            this.doSomething();
        })
      /*  this.htmlPage.innerHTML = `
        <div>
            <div>
                <p>Plaats hier de filter</p>
                <img id="click" class="shot" src="./../img/camera.png" alt="Camera">
            </div>
            <p class="buttons smaller left" id="back">Back</p>
        </div>`

        document.getElementById('back').addEventListener('click', (e) => {
            this.init();
        })

        document.getElementById('click').addEventListener('click', (e) => {
            console.log("click");
            this.optionsPhoto();
        })
  */
    },
    optionsPhoto() {
        let htmlString = ``;
        if (this.language == "Engels") {
            htmlString = `
            <div>
                <p>Plaats hier de foto</p>
                <div>
                    <p class="buttons" id="email">E-mail</p>
                    <p class="buttons" id="again">Try again</p>
                    <p class="buttons" id="done">Done</p>
                </div>
            </div>`
        } else if (this.language == "Nederlands") {
            htmlString = `
            <div>
                <p>Plaats hier de foto</p>
                <div>
                    <p class="buttons" id="email">E-mail</p>
                    <p class="buttons" id="again">Opnieuw</p>
                    <p class="buttons" id="done">Klaar</p>
                </div>
            </div>`
        } else if (this.language == "Frans") {
            htmlString = `
            <div>
                <p>Plaats hier de foto</p>
                <div>
                    <p class="buttons" id="email">Courriel</p>
                    <p class="buttons" id="again">Encore une fois</p>
                    <p class="buttons" id="done">Terminé</p>
                </div>
            </div>`
        } else if (this.language == "Duits") {
            htmlString = `
            <div>
                <p>Plaats hier de foto</p>
                <div>
                    <p class="buttons" id="email">E-mail</p>
                    <p class="buttons" id="again">Nochmals</p>
                    <p class="buttons" id="done">Erledigt</p>
                </div>
            </div>`
        }

        this.htmlPage.innerHTML = htmlString;

        document.getElementById("email").addEventListener('click', (e) => {
            this.sendPhoto("photo");
        })

        document.getElementById("again").addEventListener('click', (e) => {
            this.takePhoto();
        })

        document.getElementById("done").addEventListener('click', (e) => {
            this.doSomething();
        })
    },
    doSomething() {
        document.getElementById('backButton').style.display = "none";
        document.getElementById('headerInside').style.display = "inherit";
        document.getElementById('inside').style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(./../img/inside.png)';
        let htmlString = ` `;

        if (this.language == "Engels") {
            htmlString = `
            <div id="conducteurText">
                <img id="conducteurTiny" src="./../img/conducteur.png" alt="conducteur">
                <div id="nameText">
                    <p>
                        This train is perfect for you!
                    </p>
                    <p>
                        What would you like to do now?
                    </p>
                </div>
            </div>
            <div id="choicesEnding">
                <p id="preview" class="buttons">Download train</p>
                <p id="email" class="buttons">Send template</p>
                <p id="build" class="buttons">Build again</p>
                <p id="stop" class="buttons">Quit</p>
            </div>`
        } else if (this.language == "Nederlands") {
            htmlString = `  
            <div id="conducteurText">
                <img id="conducteurTiny" src="./../img/conducteur.png" alt="conducteur">
                <div id="nameText">
                    <p>
                    Deze trein is perfect voor jou!
                    <p>
                    Wat zou je nu willen doen?
                    </p>
                </div>
            </div>
            <div id="choicesEnding">
                <p id="preview" class="buttons">Download trein</p>
                <p id="email" class="buttons">Verstuur sjabloon</p>
                <p id="build" class="buttons">Bouw opnieuw</p>
                <p id="stop" class="buttons">Quit</p>
            </div>`
        } else if (this.language == "Frans") {
            htmlString = ` 
            <div id="conducteurText">
                <img id="conducteurTiny" src="./../img/conducteur.png" alt="conducteur">
                <div id="nameText">
                    <p>
                    Ce train est parfait pour vous !
                    </p>
                    <p>
                    Que voulez-vous faire maintenant ?
                    </p>
                </div>
            </div>
            <div id="choicesEnding">
                <p id="preview" class="buttons">Télécharger le train</p>
                <p id="email" class="buttons">Envoyer le modèle<</p>
                <p id="build" class="buttons">Reconstruire</p>
                <p id="stop" class="buttons">Quit</p>
            </div>`
        } else if (this.language == "Duits") {
            htmlString = `  
            <div id="conducteurText">
                <img id="conducteurTiny" src="./../img/conducteur.png" alt="conducteur">
                <div id="nameText">
                    <p>
                    Dieser Zug ist perfekt für Sie!
                    </p>
                    <p>
                    Was würden Sie jetzt gerne tun?
                    </p>
                </div>
            </div>
            <div id="choicesEnding">
                <p id="preview" class="buttons">Zug herunterladen</p>
                <p id="email" class="buttons">die Schablone senden</p>
                <p id="build" class="buttons">Neu bauen</p>
                <p id="stop" class="buttons">Quit</p>
            </div>`
        }
        this.htmlPage.innerHTML = htmlString;


        document.getElementById("preview").addEventListener('click', (e) => {
            this.showPreview()
        })
        document.getElementById("email").addEventListener('click', (e) => {
            this.sendPhoto();
        })
        document.getElementById("build").addEventListener('click', (e) => {
            document.location.href = `/${startingpoint}/html/startTrain.html`
        })
        document.getElementById("stop").addEventListener('click', (e) => {
            document.location.href = `/${startingpoint}`
        })
    },
    sendPhoto() {
        document.getElementById('backButton').style.display = "block";
        document.getElementById('headerInside').style.display = "none"
        document.getElementById('inside').style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(./../img/mailboxBackground.png)'

        let htmlString = ` `;

        if (this.language == "Engels") {
            htmlString = `
            <div id="sendEmail">
                <p>E-mail</p>
                <img src="./../img/mail.png" alt="email icoon">
            </div>
            
            <form action="submit" id="formName" class="mailForm">
                <input type="text" id="email" class="formLayout" placeholder="your e-mail" required>
                <div>
                        <p id="send" class="buttons">Send</p>
                        <p id="done" class="buttons">Done</p>
                </div>
            </form>`
        } else if (this.language == "Nederlands") {
            htmlString = `<div id="sendEmail">
            <p>E-mail</p>
            <img src="./../img/mail.png" alt="email icoon">
        </div>
        
        <form action="submit" id="formName" class="mailForm">
            <input type="text" id="email" class="formLayout" placeholder="uw e-mail" required>
            <div>
                    <p id="send" class="buttons">Send</p>
                    <p id="done" class="buttons">Klaar</p>
            </div>
        </form>`
        } else if (this.language == "Frans") {
            htmlString = `<div id="sendEmail">
            <p>Courriel</p>
            <img src="./../img/mail.png" alt="email icoon">
        </div>
        
        <form action="submit" id="formName" class="mailForm">
            <input type="text" id="email" class="formLayout" placeholder="votre courriel" required>
            <div>
                    <p id="send" class="buttons">Envoyer</p>
                    <p id="done" class="buttons">Terminé</p>
            </div>
        </form>`
        } else if (this.language == "Duits") {
            htmlString = `<div id="sendEmail">
            <p>E-mail</p>
            <img src="./../img/mail.png" alt="email icoon">
        </div>
        
        <form action="submit" id="formName" class="mailForm">
            <input type="text" id="email" class="formLayout" placeholder="Ihre E-Mail" required>
            <div>
                    <p id="send" class="buttons">Senden</p>
                    <p id="done" class="buttons">Erledigt</p>
            </div>
        </form>`
        }
        this.htmlPage.innerHTML = htmlString;

        document.getElementById('email').addEventListener('keypress', (e) => {
            if (e.key === "Enter") {     
                e.preventDefault();
            }
        })

        document.getElementById('send').addEventListener('click', (e) => {
            let mail = document.getElementById('email').value

            if (mail) {
                document.getElementById('send').style.display = "none";
                document.getElementById('done').style.display = "inherit";

                let language = localStorage.getItem('language')

                let message = ""
                let url = ""
                let startMessage = ""
                let endMessage = ""
                
                /*Select right message*/
                if (language == "Engels") {
                    message = "With this template you can build your own train. Give it color, cut it out and fold it like a real train. Enjoy building your own train. "
                } else if (language == "Nederland") {
                    message = "Met dit sjabloon kun je je eigen trein bouwen. Geef het kleur, knip het uit en vouw het als een echte trein. Veel plezier met het bouwen van je eigen trein. "
                } else if (language == "Frans") {
                    message = "Avec ce modèle, tu peux construire ton propre train. Colorie-le, découpe-le et plie-le comme un vrai train. Amuse-toi à construire ton propre train."
                } else if (language == "Duits") {
                    message = "Mit dieser Vorlage kannst du deinen eigenen Zug bauen. Färbe sie ein, schneide sie aus und falte sie wie einen echten Zug. Viel Spaß beim Bauen deines eigenen Zuges."
                }
                /*Select right greeting*/
                if (language == "Engels") {
                    startMessage = `Hello ${localStorage.getItem('name')}`
                } else if (language == "Nederland") {
                    startMessage =  `Hallo ${localStorage.getItem('name')}`
                } else if (language == "Frans") {
                    startMessage =  `Bonjour ${localStorage.getItem('name')}`
                } else if (language == "Duits") {
                    startMessage =  `Hallo ${localStorage.getItem('name')}`
                }
                /*Select right goodbye*/
                if (language == "Engels") {
                    endMessage = `Hope to see you again ${localStorage.getItem('name')}!`
                } else if (language == "Nederland") {
                    endMessage = `Hopelijk tot ziens ${localStorage.getItem('name')}!`
                } else if (language == "Frans") {
                    endMessage = `Au plaisir de vous revoir ${localStorage.getItem('name')}!`
                } else if (language == "Duits") {
                    endMessage = `Ich hoffe, Sie wiederzusehen ${localStorage.getItem('name')}!`
                }
                
                /*Select right template*/
                if (localStorage.getItem('front').substring(0, 1) == "C") {
                    url = "https://i.pinimg.com/564x/99/3d/ab/993dabb98762f5be552bc106fc28e68e.jpg"
                    console.log(url);
                } else if (localStorage.getItem('front').substring(0, 1) == "O") {
                    url = "https://i.pinimg.com/564x/07/74/fc/0774fc794893dce94cd38ee756c88590.jpg"
                } else if (localStorage.getItem('front').substring(0, 1) == "M") {
                    url = "https://i.pinimg.com/564x/8b/35/15/8b35159ef4d236600577e3075c055e47.jpg"
                }

                /*Send mail*/
                var templateParams = {
                    user_name: localStorage.getItem("name"),
                    user_email: mail,
                    image: url,
                    message,
                    startMessage,
                    endMessage
                };
                emailjs.send('service_sendTrain', 'sendingPicture', templateParams)
                    .then(function (response) {
                        console.log('SUCCESS!', response.status, response.text);
                    }, function (error) {
                        console.log('FAILED...', error);
                    });
                    
                /*To go back*/
                document.getElementById('done').addEventListener('click', (e) => {
                    this.doSomething();
                })
            }
        })

    },
    showPreview() {
        document.getElementById('headerInside').style.display = "none";
        document.getElementById('backButton').style.display = "block";
        document.getElementById('inside').style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(./../img/outside.png)'

        let htmlString = ` `;

        let wagon2 = localStorage.getItem("wagon2")
        let wagon1 = localStorage.getItem("wagon1")
        let front = localStorage.getItem("front")
        let wheels = localStorage.getItem("wheels")

        let wagonType2 = wagon2.substring(0, 2);
        let wagonType1 = wagon1.substring(0, 2);
        let frontType = front.substring(0, 2);
        let wheelsType = wheels.substring(0, 2);

        if (this.language == "Engels") {
            htmlString = `
                <div class="preview">
                    <p data-html2canvas-ignore>Download train</p>
                    <img src="./../img/train.png" alt="train icon" data-html2canvas-ignore>
                    <div class="myTrainPreview">
                    <img src="./../img/everything_together/wagon2/${wagon2}.png" alt="second wagon of train" id="${wagonType2}" >
                    <img src="./../img/everything_together/wagon1/${wagon1}.png" alt="first wagon of train" id="${wagonType1}">
                    <img src="./../img/everything_together/fronts/${front}.png" alt="front of train" id="${frontType}">
                    <img src="./../img/everything_together/wheels/${wheels}.png" alt="wheels of train" id="${wheelsType}"> 
                    </div>
                </div>
                <div>
                    <p class="buttons" id="download" data-html2canvas-ignore>Download</p>
                    <p class="buttons" id="done" data-html2canvas-ignore>Done</p>
                </div>`
        } else if (this.language == "Nederlands") {
            htmlString = `
            <div class="preview">
                    <p>Download trein</p>
                    <img src="./../img/train.png" alt="train icon">
                    <div class="myTrainPreview">
                        <img src="./../img/everything_together/wagon2/${wagon2}.png" alt="second wagon of train" id="${wagonType2}">
                        <img src="./../img/everything_together/wagon1/${wagon1}.png" alt="first wagon of train" id="${wagonType1}">
                        <img src="./../img/everything_together/fronts/${front}.png" alt="front of train" id="${frontType}">
                        <img src="./../img/everything_together/wheels/${wheels}.png" alt="wheels of train" id="${wheelsType}"> 
                     </div>
                </div>
                <div>
                    <p class="buttons" id="download" data-html2canvas-ignore>Download</p>
                    <p class="buttons" id="done" data-html2canvas-ignore>Klaar</p>
                </div>`
        } else if (this.language == "Frans") {
            htmlString = `
            <div class="preview">
                    <p>Télécharger le train</p>
                    <img src="./../img/train.png" alt="train icon">
                    <div class="myTrainPreview">
                        <img src="./../img/everything_together/wagon2/${wagon2}.png" alt="second wagon of train" id="${wagonType2}">
                        <img src="./../img/everything_together/wagon1/${wagon1}.png" alt="first wagon of train" id="${wagonType1}">
                        <img src="./../img/everything_together/fronts/${front}.png" alt="front of train" id="${frontType}">
                        <img src="./../img/everything_together/wheels/${wheels}.png" alt="wheels of train" id="${wheelsType}"> 
                    </div>
                </div>
                <div>
                    <p class="buttons" id="download" data-html2canvas-ignore>Télécharger</p>
                    <p class="buttons" id="done" data-html2canvas-ignore>Terminé</p>
                </div>`
        } else if (this.language == "Duits") {
            htmlString = `
            <div class="preview">
                    <p>Zug herunterladen</p>
                    <img src="./../img/train.png" alt="train icon">
                    <div class="myTrainPreview">
                        <img src="./../img/everything_together/wagon2/${wagon2}.png" alt="second wagon of train" id="${wagonType2}">
                        <img src="./../img/everything_together/wagon1/${wagon1}.png" alt="first wagon of train" id="${wagonType1}">
                        <img src="./../img/everything_together/fronts/${front}.png" alt="front of train" id="${frontType}">
                        <img src="./../img/everything_together/wheels/${wheels}.png" alt="wheels of train" id="${wheelsType}"> 
                    </div>
                </div>
                <div>
                    <p class="buttons" id="download" data-html2canvas-ignore>Herunterladen</p>
                    <p class="buttons" id="done" data-html2canvas-ignore>Erledigt</p>
                </div>`
        }
        this.htmlPage.innerHTML = htmlString;
        document.getElementById('done').style.display = "none"


        document.getElementById('download').addEventListener('click', (e) => {
            document.getElementById('inside').style.backgroundImage = 'none'
            document.getElementById('done').style.display = "inherit"
            document.getElementById('download').style.display = "none"

            console.log('click')

            html2canvas(document.body, {
                width: 400,
                height: 260,
            }).then(function (canvas) {
                // Export canvas as a blob 
                canvas.toBlob(function (blob) {
                    // Generate file download
                    window.saveAs(blob, `train_${localStorage.getItem('name')}.png`);
                    document.getElementById('inside').style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(./../img/outside.png)'
                    document.getElementById('done').addEventListener('click', (e) => {
                        endOptions.doSomething();
                    })
                });
            });
        })

        document.getElementById('back').addEventListener('click', (e) => {
            this.doSomething();
        })
    }
}

/* Checking if your local on or github pages */
let fileName = window.location.pathname.split("/")
let startingpoint = fileName[1];

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
        window.localStorage.clear();
        window.location.href = `/${startingpoint}`;
    })
}

let endCreateTrain = document.getElementById('endCreateTrain');
if (endCreateTrain) {
    endOptions.init()
}

let faceMesh = document.getElementById('faceMeshPage');
if (faceMesh) {
    endOptions.takePhoto()
}