import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import {
  imag
} from "@tensorflow/tfjs";

const video = document.getElementById("video");
const canvas = document.getElementById("canvas")

//Start video
async function getMedia() {
  let stream = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: {}
    });

    if ('srcObject' in video) {
      video.srcObject = stream
    } else {
      video.src = URL.createObjectURL(stream);
    }
  } catch (err) {
    console.error(err)
  }
  App()
}
getMedia();

//Start Filter
function App() {
  //references: allow us to refer to the onscreen components 
  const webcamRef = video
  const canvasRef = canvas

  //load facemesh model into our app and allows us to perform detections from webcam
  const runfacemesh = async () => {
    const net = await facemesh.load({
      inputResolution: {
        width: 640,
        height: 480
      },
      scale: 0.8
    })
    
    let interval =  setInterval(() => {
      detect(net)
    }, 800)

    document.getElementById('clickPhoto').addEventListener('click', (e) => {
      clearInterval(interval);
    })
  };

  //detect function
  const detect = async (net) => {
    if (typeof webcamRef !== "undefined" && webcamRef !== null /*&&  webcamRef.current.video.readyState === 4*/ ) {
      //get video properties
      const video = webcamRef;
      const videoWidth = webcamRef.width;
      const videoHeight = webcamRef.height;

      //set video width
      webcamRef.width = videoWidth;
      webcamRef.height = videoHeight;

      //set canvas width
      canvasRef.width = videoWidth;
      canvasRef.height = videoHeight;

      //make detections
      const face = await net.estimateFaces(video);

      //get canvas context for drawing
      const ctx = canvasRef.getContext("2d");

      drawMesh(face, ctx)
     
    }
  }
  runfacemesh();
}

//export default App;