//import logo from './logo.svg';
import './App.css';
//install dependencies v
//import dependencies v
//setup webcam and canvas v
//define references to those v
//load facemesh v
//detect function v
//drawing utilities
//load triangulation 
//setup triangle path
//set up point drawing
//add drawmesh to detect function


//import dependencies v
import React, {
  useRef
} from 'react';
import './App.css';
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import {drawMesh} from "./utilities" 


function App() {
  //setup webcam and canvas v
  //references: allow us to refer to the onscreen components
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  console.log(webcamRef.current);

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
    if (typeof webcamRef.current !== "undefined"  && webcamRef.current !== null &&  webcamRef.current.video.readyState === 4
    ) {
      //get video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      //set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      
      //set canvas width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      //make detections
      const face = await net.estimateFaces(video);
      console.log(face);


      //get canvas context for drawing
      const ctx = canvasRef.current.getContext("2d");
      drawMesh(face, ctx)
    }
  }

 runfacemesh();

  return ( 
    <div className ="App">
    <Webcam ref = {webcamRef}
    style = {
      {
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        textAlign: "center",
        zIndex: 9,
        width: 640,
        height: 480
      }
    }/> 
    <canvas ref = {canvasRef}
    style = {
      {
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        textAlign: "center",
        zIndex: 9,
        width: 640,
        height: 480
      }
    } ></canvas> 
    </div>
  );

}

export default App;