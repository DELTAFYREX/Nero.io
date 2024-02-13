window.onload = function() {
  
  //Music functions:
  //decide the music
  var music2 = document.getElementById("audio");
  const pmusic = ["https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/oioioi.mp3?v=1705286830033", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/4Miklipi%20(Dejected)%20Preview.mp3?v=1705287022417", "https://cdn.glitch.me/5fc7dcb6-aada-495b-828e-66901a470a29/World's%20End.wav?v=1705286889038", "https://cdn.glitch.global/f80d3eec-1e99-4b8c-b120-79a55addacf9/Meloncholy.mp3?v=1675465750213","https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/Depredation.mp3?v=1705286866890", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/videoplayback.mp3?v=1705807057028"];
  var randmusic = pmusic[~~(Math.random() * pmusic.length)];
  music2.src = (randmusic);
  //load the play functions for itasdasf meow
  function PlayMusic() {
  music2.load();   
  music2.play();
}

//actually play the audio when the checkbox is clicked on (checked) and stop it when unchecked
    document.getElementById("optSound").onclick = () => {
      if (document.getElementById("optSound").checked === true) {
           music2.play()
    music2.addEventListener('ended', function() {this.currentTime = 0; music2.src = pmusic[~~(Math.random() * pmusic.length)]; this.play();}, false);
     } else if (document.getElementById("optSound").checked === false) {
          music2.pause()
            }
         return; };
  
  var file = document.getElementById("thefile");
  //var audio = document.getElementById("audio");
  
    var files = this.files;
    //audio.src = randmusic
    //audio.load();
    //audio.play();
    var context = new AudioContext();
    var src = context.createMediaElementSource(music2);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    music2.play();
    renderFrame();
  };