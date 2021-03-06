import {
    imag
} from "@tensorflow/tfjs";

// draw the hat
export const drawMesh = (predictions, ctx, video) => {{

        predictions.forEach((prediction) => {
            const keypoints = prediction.scaledMesh;

            for (let i = 0; i < keypoints.length; i++) {
                const x = keypoints[i][0];
                const y = keypoints[i][1];
                const a = keypoints[0][0];
                const b = keypoints[0][1];

                const hat = new Image();
                hat.onload = function () {
                    ctx.drawImage(hat, a - 249.5, b - 190, 120, 80);
                }
                hat.src = document.getElementById("image1").src;
            }
        });
    }
}