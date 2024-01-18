const spectrocontainer = document.getElementById("spectrocontainer");
const spectrocanvas = document.getElementById("spectrocanvas");
spectrocanvas.width = window.innerWidth;
spectrocanvas.height = window.innerHeight;

const ctx = spectrocanvas.getContext("2d");

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let audioSource = null;
let analyser = null;

audioSource = audioCtx.createMediaElementSource(global.music2);
analyser = audioCtx.createAnalyser();
audioSource.connect(analyser);
analyser.connect(audioCtx.destination);

analyser.fftSize = 128;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
const barWidth = spectrocanvas.width / bufferLength;

let x = 0;
let barHeight = 0;
function animate() {
    x = 0;
    ctx.clearRect(0, 0, spectrocanvas.width, spectrocanvas.height);
    analyser.getByteFrequencyData(dataArray);
    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        ctx.fillStyle = "white";
        ctx.fillRect(x, spectrocanvas.height - barHeight, barWidth, barHeight);
        x += barWidth;
    }

    requestAnimationFrame(animate);
}

animate();