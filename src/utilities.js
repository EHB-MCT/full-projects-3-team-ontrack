import {
    imag
} from "@tensorflow/tfjs";

// draw the hat
export const drawMesh = (predictions, ctx) => {
    if (predictions.length > 0) {

        predictions.forEach((prediction) => {
            const keypoints = prediction.scaledMesh;

            for (let i = 0; i < keypoints.length; i++) {
                const x = keypoints[i][0];
                const y = keypoints[i][1];
                const a = keypoints[0][0];
                const b = keypoints[0][1];

                const hat = new Image();
                hat.onload = function () {
                    ctx.drawImage(hat, a - 250, b - 270, 140, 100);
                }
                hat.src = document.getElementById("image1").src;
            }
        });
    }
}