analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
function draw() {
const drawVisual = requestAnimationFrame(draw);
analyser.getByteTimeDomainData(dataArray);
canvasCtx.fillStyle = "rgb(200 200 200)";
canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  canvasCtx.lineWidth = 2;
canvasCtx.strokeStyle = "rgb(0 0 0)";
canvasCtx.beginPath();
  const sliceWidth = WIDTH / bufferLength;
let x = 0;
  for (let i = 0; i < bufferLength; i++) {
  const v = dataArray[i] / 128.0;
  const y = v * (HEIGHT / 2);

  if (i === 0) {
    canvasCtx.moveTo(x, y);
  } else {
    canvasCtx.lineTo(x, y);
  }

  x += sliceWidth;
}
canvasCtx.lineTo(WIDTH, HEIGHT / 2);
canvasCtx.stroke();
}
draw();
