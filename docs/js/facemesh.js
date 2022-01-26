/* import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh"; 
import {drawMesh} from "./utilities.js" */

const video = document.getElementById("video");
//Start video
function startVideo() {
    navigator.getUserMedia({
        video: {}
      },
      stream => (video.srcObject = stream),
      err => console.error(err)
    );
    App();
  }
startVideo();

//Start Filter
function App() {
  //references: allow us to refer to the onscreen components 
  const webcamRef = video
  const canvasRef = video;
  console.log(webcamRef);

  //load facemesh model into our app and allows us to perform detections from webcam
  const runfacemesh = async () => {
    const net = await facemesh.load({
      inputResolution: {
        width: 640,
        height: 480
      },
      scale: 0.8
    })
    setInterval(()=>{
      detect(net)
    },700)
  };

  //detect function
  const detect = async(net) => {
    if (typeof webcamRef !== "undefined"  && webcamRef !== null /*&&  webcamRef.current.video.readyState === 4*/
    ) {
      //get video properties
      const video = webcamRef;
      const videoWidth = webcamRef.width;
      const videoHeight = webcamRef.height;

      //set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      
      //set canvas width
      canvasRef.width = videoWidth;
      canvasRef.height = videoHeight;

      //make detections
      const face = await net.estimateFaces(video);
      console.log(face);

      //get canvas context for drawing
      const ctx = canvasRef.current.getContext("2d");
      drawMesh(face, ctx)
    }
  }
 runfacemesh();
}

//export default App;