"use strict";

let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let snap = document.getElementById('snapshot');
let errorMsg = document.getElementById('span#ErrorMsg');

//webcam settings
const constraints = {
    audio: false,
    video:{
        width: 640, height: 480
    }
};

async function init(){
    try{
        let stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    }
    catch(e){
        errorMsg.innerHTML = `navigator.getUserMedia.eroor:${e.toString()}`;
    }
}

function handleSuccess(stream){
    window.stream = stream;
    video.srcObject = stream;
}

init();

//draw image
var context = canvas.getContext('2d');
snap.addEventListener('click', (e) =>{
    context.drawImage(video, 0, 0, 640, 480)
})