/* jshint esversion: 11 */

import { util } from "./lib/util.js";
import { global } from "./lib/global.js";
import { settings } from "./lib/settings.js";
import { Canvas } from "./lib/canvas.js";
import { color } from "./lib/color.js";
import { gameDraw } from "./lib/gameDraw.js";
import { tankdescs } from "./lib/tankdesc.js";
import * as socketStuff from "./lib/socketInit.js";
(async function (util, global, settings, Canvas, color, gameDraw, socketStuff) {

let { socketInit, gui, leaderboard, minimap, moveCompensation, lag, getNow } = socketStuff;
// fetch("changelog.md", { cache: "no-cache" })
// .then((response) => response.text())
// .then((response) => {
//     const changelogs = response.split("\n\n").map((changelog) => changelog.split("\n"));
//     for (let changelog of changelogs) {
//         changelog[0] = changelog[0].split(":").map((line) => line.trim());
//         document.getElementById("patchNotes").innerHTML += `<div><b>${changelog[0][0].slice(1).trim()}</b>: ${changelog[0].slice(1).join(":") || "Update lol"}<ul>${changelog.slice(1).map((line) => `<li>${line.slice(1).trim()}</li>`).join("")}</ul><hr></div>`;
//     }
// });
      var playbuttonsound = new Audio();
      playbuttonsound.src =
        "https://cdn.glitch.global/f80d3eec-1e99-4b8c-b120-79a55addacf9/op1.wav?v=1675463613542";
      function PlaySound69() {
        playbuttonsound.play();
      }
      var clicked = false;

      var slap = new Audio();
      slap.src =
        "https://cdn.glitch.global/f80d3eec-1e99-4b8c-b120-79a55addacf9/(Audio)%20videoplayback.m4a?v=1675999054321";
      function PlaySound68() {
        slap.play();
      }

      var vsau = new Audio();
      vsau.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/jake-chudnow-edited_y1t8j5q.mp3?v=1706018057534"
      function PlaySound99() {
        vsau.play();
      }
  
      var clicksound = new Audio();
      clicksound.src =
        "https://cloud-cube.s3.amazonaws.com/m660o440l0wv/public/sysse_ok.ogg";
      function PlaySound210() {
        clicksound.play();
      }
  
      var trapperclosely = new Audio();
      trapperclosely.src = ("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/look_closely.mp3?v=1705291786778");
      function PlaySoundtrap() {
      trapperclosely.play();
      }
      
      var waterflush = new Audio();
      waterflush.src = ("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/toilet_flush.mp3?v=1705296502578");
      function PlaySoundwater() {
      waterflush.play();
      }
        
      var undadewatuh = new Audio();
      undadewatuh.src = ("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/y2mate_HOnnyD0.mp3?v=1705296505126");
      function PlaySoundwatuh() {
      undadewatuh.play();
      }
  
      var piss = new Audio();
      piss.src = ("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/flowing-water-sound-effect.mp3?v=1705299861150");
      function PlaySoundpiss() {
      piss.play();
      }
  
      var pew = new Audio();
      pew.src = ("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/pew_pew-dknight556-1379997159.mp3?v=1705299975747");
      function PlaySoundpew() {
      pew.play();
      }
        var chipi = new Audio();
      chipi.src = ("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/chipi-chipi-chapa-chapa.mp3?v=1705302832837");
      function PlaySoundchipi() {
      chipi.play();
      }
        var neko = new Audio();
      neko.src = ("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/neko-arc.mp3?v=1705302835953");
      function PlaySoundneko() {
      neko.play();
      }
          var bwomp = new Audio();
      bwomp.src = ("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/bwomp.mp3?v=1705302839344");
      function PlaySoundbwomp() {
      bwomp.play();
      }
          var nfl = new Audio();
      nfl.src = ("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/nfl.mp3?v=1705302843389");
      function PlaySoundnfl() {
      nfl.play();
      }
  
      var KillSound = new Audio();
      KillSound.src = ("https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/4%202.wav?v=1706716161860");
      function PlaySoundKS() {
      KillSound.play();
      }

      function doSomething() {
        if (clicked) {
          var optionclicksound = new Audio();
           optionclicksound.src =
            "https://cloud-cube.s3.amazonaws.com/m660o440l0wv/public/cancel.wav";
          optionclicksound.load();
           optionclicksound.play();
        } else {
           clicksound.load();
           clicksound.play();
        }
        clicked = !clicked;
      }
  
      var smallaudio2 = new Audio();
      smallaudio2.src =
        "https://cloud-cube.s3.amazonaws.com/m660o440l0wv/public/error.ogg";
      function PlaySound211() {
        smallaudio2.play();
      }
  
      var smallaudio3 = new Audio(
        "https://cloud-cube.s3.amazonaws.com/m660o440l0wv/public/socket.wav"
      );
      smallaudio3.loop = false;
      function PlaySound212() {
        smallaudio3.loop = false;
        smallaudio3.play();
      }
var killvariablenamething = true;
let metalpipe = new Audio();
metalpipe.loop = false;
var randomdeathsound = ["https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/metal-pipe-clang.mp3?v=1710271073637", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/undertakers-bell_2UwFCIe.mp3?v=1710268959839", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/aaaaaaaa-online-audio-converter_r9waVUO.mp3?v=1710271069219", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/vine-boom.mp3?v=1710280969499", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/tmp_7901-951678082.mp3?v=1710280974624", 
                        "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/emotional-damage-meme.mp3?v=1710280979660", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/discord-notification.mp3?v=1710280983356", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/wrong-answer-sound-effect.mp3?v=1710280995813", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/clash-royale-hog-rider.mp3?v=1710280999656", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/goofy-ahh-car-horn-sound-effect.mp3?v=1710281004188", 
                        "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/tf_nemesis.mp3?v=1710281009502", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/chinese-rap-song.mp3?v=1710281015151", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/fire-in-the-hole-geometry-dash.mp3?v=1710281020367", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/water-on-the-hill.mp3?v=1710281027326", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/taco-bell-bong-sfx.mp3?v=1710281032201", 
                        "https://cdn.glitch.global/68f0db33-c86d-4aa5-9a35-a6750a92eae7/download.mp3?v=1699142486910", "https://cdn.glitch.global/68f0db33-c86d-4aa5-9a35-a6750a92eae7/spongebob-fail.mp3?v=1699146799125", "https://cdn.glitch.global/68f0db33-c86d-4aa5-9a35-a6750a92eae7/62640b13-df2b-47d8-a06e-fb63b7fbb06e.mp3?v=1699272890577", "https://cdn.glitch.global/68f0db33-c86d-4aa5-9a35-a6750a92eae7/f93f6d33-9dab-4e9d-aebb-917fe2d22982.mp3?v=1700153956047", "https://cdn.glitch.global/68f0db33-c86d-4aa5-9a35-a6750a92eae7/c647ea60-edf9-4bde-a0af-c49353593c7f.mp3?v=1700153959194",
                        "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/feet-gd.mp3?v=1710431699794", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/bad-to-the-bone-meme.mp3?v=1710431694343", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/spongebob-boowomp.mp3?v=1710431689245", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/holy-moly-emoji.mp3?v=1710431682780", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/dun_dun_1.mp3?v=1710431679063"];
function PlaySound420() {
  if (global.killsoundready) {
    killvariablenamething = true;
    getksound();
  }
}
function getksound() {
  if (global.killsoundready) {
    if (killvariablenamething) {
    metalpipe.src = randomdeathsound[Math.floor(Math.random() * randomdeathsound.length)];
    metalpipe.play();
    global.killsoundready = false;
  }
  }
}
  var grubhub = new Audio();
grubhub.src = ("https://cdn.glitch.global/68f0db33-c86d-4aa5-9a35-a6750a92eae7/d318bd1e-5162-4fae-a757-5c350b16ccc9.mp3?v=1700153738394");
function PlaySound169() {
   grubhub.play();
}
  var smallaudio5 = new Audio();
  smallaudio5.src =
    "https://cloud-cube.s3.amazonaws.com/m660o440l0wv/public/poka.wav";
  function PlaySound214() {
    smallaudio5.play();
  }
  var smallaudio6 = new Audio();
  smallaudio6.src =
    "https://cloud-cube.s3.amazonaws.com/m660o440l0wv/public/finish.wav";
  function PlaySound215() {
    smallaudio6.play();
  }
  var camerasound = new Audio();
  camerasound.src =
    "https://cloud-cube.s3.amazonaws.com/m660o440l0wv/public/camera.wav";
  function PlaySound213() {
    camerasound.play();
  }
//Music functions:
  //decide the music
  global.music2 = document.getElementById("audio");
  const pmusic = ["https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/oioioi.mp3?v=1705286830033", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/4Miklipi%20(Dejected)%20Preview.mp3?v=1705287022417", "https://cdn.glitch.me/5fc7dcb6-aada-495b-828e-66901a470a29/World's%20End.wav?v=1705286889038", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/Depredation%20V2.mp3?v=1713525132474", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/videoplayback.mp3?v=1705807057028", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/download%20(1).mp3?v=1708218475743", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/download.mp3?v=1708218464295", "https://cdn.glitch.me/5fc7dcb6-aada-495b-828e-66901a470a29/Apotheosis.wav?v=1713352428783", "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/Action%20Agenda%20-%20Killa%20DFX%20Edit.mp3?v=1713352244240"];
  var randmusic = pmusic[~~(Math.random() * pmusic.length)];
  global.music2.src = (randmusic);
  //load the play functions for itasdasf meow
  function PlayMusic() {
  global.music2.load();   
  global.music2.play();
}
  let musicvolume = 0;
  
//actually play the audio when the checkbox is clicked on (checked) and stop it when unchecked
    $("#optSound").on("click", function() {
      if (document.getElementById("optSound").checked === true) {
        songrecog()
           global.music2.play()
        //if (global.ISTHEGODAMNFUCKINGGAMEON !== "yeah") {
        document.getElementById("content").style.opacity = 0.5
    //audio.src = randmusic;
    //audio.load();
    //audio.play();
    var musiccontext = new AudioContext();
    var musicsrc = musiccontext.createMediaElementSource(global.music2);
    var analyser = musiccontext.createAnalyser();

    let musiccanvas = document.getElementById("canvas");
    musiccanvas.width = window.innerWidth;
    musiccanvas.height = window.innerHeight;
    var ctx3 = musiccanvas.getContext("2d");

    musicsrc.connect(analyser);
    analyser.connect(musiccontext.destination);

    analyser.fftSize = 2048;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);
        
    var WIDTHOFBAR = musiccanvas.width;
    var HEIGHTOFBAR = musiccanvas.height;

    var dataArray = new Uint8Array(bufferLength);

    var musicbarWidth = (WIDTHOFBAR / bufferLength) * 2.5;
    var musicbarHeight;
    var barstuffx = 0;

    function renderFrame() {
      
      let deviscale = window.devicePixelRatio
      
      requestAnimationFrame(renderFrame);

      barstuffx = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx3.fillStyle = "rgba(0,0,0,0.12)";
      ctx3.fillRect(0, 0, WIDTHOFBAR, global.screenHeight);

      for (var i = 0; i < bufferLength; i++) {
        musicbarHeight = dataArray[i];
        musicvolume = musicbarHeight;
        
        var b = musicbarHeight + (18 * (i/bufferLength));
        var r = 250 * (i/bufferLength);
        var g = 50;

        ctx3.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx3.fillRect(barstuffx, global.screenHeight - musicbarHeight * deviscale, musicbarWidth, musicbarHeight);

        barstuffx += musicbarWidth + 1;
      }
    }
    //audio.play();
    renderFrame();
    //}
    global.music2.addEventListener('ended', function() {this.currentTime = 0; global.music2.src = pmusic[~~(Math.random() * pmusic.length)]; this.play(); songrecog();}, false);
     } else if (document.getElementById("optSound").checked === false) {
        document.getElementById("content").style.opacity = 0
       global.music2.pause()
          global.music2.songname = "Not Playing";
            }
         return; });
  
  let counterthing = document.querySelector(".displaytest");
  let skinnamedisplay = document.querySelector(".displayskinname");
  let myImg = document.querySelector("#skinpreview");
  let lock = document.querySelector("#lockedskin");
  let selectimage = document.querySelector("#selectskin");

  $("#rightarrowbutton").on("click", function() {
      if (global.skinpage === 12) {
          global.skinpage = 0;  
      } else {
          global.skinpage += 1;
      };
      changeskinpreview();
  });
  $("#leftarrowbutton").on("click", function() {
      if (global.skinpage === 0) {
          global.skinpage = 12;  
      } else {
          global.skinpage -= 1;
      };                 
      changeskinpreview();
  });
  
  $("#selectskin").on("click", function() {
      if (global.lockedornot === 0) {
        global.skin = global.selectedskin;
        selectimage.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/selected.png?v=1708718268075";
    } else {
      selectimage.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/locked!.png?v=1708718075601";
    }
  })
  
  
  function checkifachieve(ach, lockcolor) {
    if (global.selectedskin !== "") {
    if (localStorage.getItem(ach) === "YOUDIDIT:D!!!") {
      global.lockedornot = 0;
      lock.style.display = 'none';
      myImg.style.filter = 'brightness(1)';
      updateskinselectbutton();
    } else {
      global.lockedornot = 1;
      selectimage.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/locked!.png?v=1708718075601";
      lock.style.display = 'inline-block';
      myImg.style.filter = 'brightness(0.5)';
      if (lockcolor === "white") {
        lock.style.filter = 'invert(1)';
      } else if (lockcolor === "grey") {
        lock.style.filter = 'invert(0.7)';
      } else if (lockcolor === "dgrey") {
        lock.style.filter = 'invert(0.3)';
      } else {
        lock.style.filter = 'invert(0)';
      }
    }
  } else {
    lock.style.display = 'none';
    if (global.skin === global.selectedskin) {
    selectimage.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/selected.png?v=1708718268075";
    } else {
      global.skin === global.selectedskin
      selectimage.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/select.png?v=1708718071992";
    };
  }
}
  
  function updateskinselectbutton() {
    if (global.lockedornot === 0) {
      if (global.skin === global.selectedskin) {
    selectimage.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/selected.png?v=1708718268075";
      } else {
        selectimage.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/select.png?v=1708718071992";
      }
    } else {
      selectimage.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/locked!.png?v=1708718075601";
    }
  }

  function changeskinpreview() {
    if (global.skinpage === 0) {
    counterthing.textContent = "◉ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○";
    global.selectedskin = "";
    skinnamedisplay.textContent = "Default";
    checkifachieve("", "");
    myImg.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/onetransparentsingulardamnfuckingpixel.png?v=1708568179353";
    }
    if (global.skinpage === 1) {
    counterthing.textContent = "○ ◉ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○";
    global.selectedskin = "bsignalskin";
    skinnamedisplay.textContent = "Broken Signal";
    checkifachieve("disconnectachievement", "black");
    myImg.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/tv.png?v=1708615075011"
    }
    if (global.skinpage === 2) {
    counterthing.textContent = "○ ○ ◉ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○";
    global.selectedskin = "tankcharmskin";
    skinnamedisplay.textContent = "Tank Charm";
    checkifachieve("25killsachievement", "dgrey");
    myImg.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/2024_01_29_0ry_Kleki.png?v=1708536680813";
    }
    if (global.skinpage === 3) {
    counterthing.textContent = "○ ○ ○ ◉ ○ ○ ○ ○ ○ ○ ○ ○ ○";
    global.selectedskin = "dfxskin";
    skinnamedisplay.textContent = "Deltafyrex";
    checkifachieve("50killsachievement", "grey");
    myImg.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/MOSHED-2023-12-14-17-8-14.gif?v=1708618924966";
    }
    if (global.skinpage === 4) {
    counterthing.textContent = "○ ○ ○ ○ ◉ ○ ○ ○ ○ ○ ○ ○ ○";
    global.selectedskin = "primalskin";
    skinnamedisplay.textContent = "Ultimate Primal";
    checkifachieve("100killsachievement", "white");
    myImg.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/primal.webp?v=1708602763032";
    }
    if (global.skinpage === 5) {
    counterthing.textContent = "○ ○ ○ ○ ○ ◉ ○ ○ ○ ○ ○ ○ ○";
    global.selectedskin = "kangarooskin";
    skinnamedisplay.textContent = "Kangaroo";
    checkifachieve("killachievement", "black");
    myImg.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/image.webp?v=1708623596560";
    }
    if (global.skinpage === 6) {
    counterthing.textContent = "○ ○ ○ ○ ○ ○ ◉ ○ ○ ○ ○ ○ ○";
    global.selectedskin = "cswmskin";
    skinnamedisplay.textContent = "ChickenSandwhichMan";
    checkifachieve("killachievement2", "grey");
    myImg.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/Untitled%20Project%20(22).jpg?v=1708356424097"
    }
    if (global.skinpage === 7) {
    counterthing.textContent = "○ ○ ○ ○ ○ ○ ○ ◉ ○ ○ ○ ○ ○";
    global.selectedskin = "cogskin";
    skinnamedisplay.textContent = "Cogwheel";
    checkifachieve("lagachievement", "black");
    myImg.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/Gear-icon-transparent-background.png?v=1705579178381";
    }
    if (global.skinpage === 8) {
    counterthing.textContent = "○ ○ ○ ○ ○ ○ ○ ○ ◉ ○ ○ ○ ○";
    global.selectedskin = "skypeskin";
    skinnamedisplay.textContent = "Skype";
    checkifachieve("skypemoment", "black");
    myImg.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/skype.png?v=1708623594494";
    }
    if (global.skinpage === 9) {
    counterthing.textContent = "○ ○ ○ ○ ○ ○ ○ ○ ○ ◉ ○ ○ ○";
    global.selectedskin = "coinskin";
    skinnamedisplay.textContent = "Coined";
    checkifachieve("tokenachievement", "black");
    myImg.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/2e2ccc30-5baf-41a2-aceb-c5456a1cc6dc.image.png?v=1708619146196";
    }
    if (global.skinpage === 10) {
    counterthing.textContent = "○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ◉ ○ ○";
    global.selectedskin = "discordskin";
    skinnamedisplay.textContent = "Sex Update";
    checkifachieve("Getbacktowoooak", "dgrey");
    myImg.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/2023_12_06_0yl_Kleki.png?v=1701908710293";
    }
    if (global.skinpage === 11) {
    counterthing.textContent = "○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ◉ ○";
    global.selectedskin = "deltaDecoskin";
    skinnamedisplay.textContent = "Cat-Code";
    checkifachieve("creditsachievement", "grey");
    myImg.src = "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/2024_01_15_05q_Kleki.png?v=1705301828958";
    }
    if (global.skinpage === 12) {
    counterthing.textContent = "○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ◉";
    global.selectedskin = "incomskin";
    skinnamedisplay.textContent = "Very Much Incommodiousness";
    checkifachieve("pissio", "grey");
    myImg.style.filter = 'blur(10px)';
    myImg.src = "https://cdn.glitch.global/68f0db33-c86d-4aa5-9a35-a6750a92eae7/1200px-Icon-round-Question_mark.svg.png?v=1699273933044";
    }
  };
    let tanktype = "unfinished",
        tankdesc = "unfinished",
        tanktier = "???",
        tankweap = "???",
        tankabil = "???",
        tankweak = "unfinished",
        tankupto = ["Tier 2: ???", "Tier 3: ???", "Tier 4: ???", "Misc: ???"],
        tankupfr = "unfinished",
        tankorgn = "???",
        tankupad = "???";
  let tabappearance = document.querySelector(".tabappearance");
  let taboptions = document.querySelector(".taboptions");
  let tabcontrols = document.querySelector(".tabcontrols");
  let tablinks = document.querySelector(".tablinks");
  let tabappearancebutton = document.querySelector(".tabappearancebutton");
  let taboptionsbutton = document.querySelector(".taboptionsbutton");
  let tabcontrolsbutton = document.querySelector(".tabcontrolsbutton");
  let tablinksbutton = document.querySelector(".tablinksbutton");
  
  function changetab(vroomvroomimaracecarreeeroweaweerrrm) {
    switch(vroomvroomimaracecarreeeroweaweerrrm) {
      case 0:
        tabappearance.style.display = 'block';
        taboptions.style.display = 'none';
        tabcontrols.style.display = 'none';
        tablinks.style.display = 'none';
        tabappearancebutton.classList.add("active");
        taboptionsbutton.classList.remove("active");
        tabcontrolsbutton.classList.remove("active");
        tablinksbutton.classList.remove("active");
        break;
      case 1:
        tabappearance.style.display = 'none';
        taboptions.style.display = 'block';
        tabcontrols.style.display = 'none';
        tablinks.style.display = 'none';
        tabappearancebutton.classList.remove("active");
        taboptionsbutton.classList.add("active");
        tabcontrolsbutton.classList.remove("active");
        tablinksbutton.classList.remove("active");
        break;      
      case 2:
        tabappearance.style.display = 'none';
        taboptions.style.display = 'none';
        tabcontrols.style.display = 'block';
        tablinks.style.display = 'none';
        tabappearancebutton.classList.remove("active");
        taboptionsbutton.classList.remove("active");
        tabcontrolsbutton.classList.add("active");
        tablinksbutton.classList.remove("active");
        break;      
      case 3:
        tabappearance.style.display = 'none';
        taboptions.style.display = 'none';
        tabcontrols.style.display = 'none';
        tablinks.style.display = 'block';
        tabappearancebutton.classList.remove("active");
        taboptionsbutton.classList.remove("active");
        tabcontrolsbutton.classList.remove("active");
        tablinksbutton.classList.add("active");
        break;
    }
  }
  
  if (global.ISTHEGODAMNFUCKINGGAMEON !== "yeah") {

  $(".tabappearancebutton").on("click", function() {
      changetab(0);
  });
  $(".taboptionsbutton").on("click", function() {
      changetab(1);
  });  
  $(".tabcontrolsbutton").on("click", function() {
      changetab(2);
  });  
  $(".tablinksbutton").on("click", function() {
      changetab(3);
  });
  
}
  
let trollface = null;

function songrecog() {
//song names for display in the debug menu (may move it to a different place later)
if (global.music2.src === "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/oioioi.mp3?v=1705286830033") {
  global.music2.songname = "OI OI OI --- Action Agenda";
}
if (global.music2.src === "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/4Miklipi%20(Dejected)%20Preview.mp3?v=1705287022417") {
  global.music2.songname = "Dejected --- Deltafyrex";
}
if (global.music2.src === "https://cdn.glitch.me/5fc7dcb6-aada-495b-828e-66901a470a29/World's%20End.wav?v=1705286889038") {
  global.music2.songname = "World's End --- Deltafyrex";
}
if (global.music2.src === "https://cdn.glitch.global/f80d3eec-1e99-4b8c-b120-79a55addacf9/Meloncholy.mp3?v=1675465750213") {
  global.music2.songname = "Melancholy --- Deltafyrex";
}
if (global.music2.src === "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/Depredation%20V2.mp3?v=1713525132474") {
  global.music2.songname = "Depredation Remastered V2--- Deltafyrex";
}
if (global.music2.src === "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/videoplayback.mp3?v=1705807057028") {
  global.music2.songname = "Anybody can find Love (except You.) --- hkmori"
}
if (global.music2.src === "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/download%20(1).mp3?v=1708218475743") {
  global.music2.songname = "Resurgam --- Amaryllis"
}
if (global.music2.src === "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/download.mp3?v=1708218464295") {
  global.music2.songname = "Longing --- Amaryllis"
}
if (global.music2.src === "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/Action%20Agenda%20-%20Killa%20DFX%20Edit.mp3?v=1713352244240") {
  global.music2.songname = "Killa --- Action Agenda (DFX EDIT)"
}
if (global.music2.src === "https://cdn.glitch.global/5fc7dcb6-aada-495b-828e-66901a470a29/Apotheosis%20(1).mp3?v=1713525419376") {
  global.music2.songname = "Apotheosis V2 --- Deltafyrex"
}
}
function lagachloop() {
    if (global.metrics.rendertime <= 45 && global.metrics.rendertime >= 15) {
        util.submitAchievementToLocalStorage("lagachievement");
    }
    if (global.savedkillcount >= 99) {
        util.submitAchievementToLocalStorage("100killsachievement");
    }
    if (global.savedkillcount >= 49) {
        util.submitAchievementToLocalStorage("50killsachievement");
    }
    if (global.savedkillcount >= 24) {
        util.submitAchievementToLocalStorage("25killsachievement");
    }
}
/*if (localStorage.getItem("killachievement") !== "YOUDIDIT:D!!!") {
  if (global.achievements.kills >= 4) {
    util.submitAchievementToLocalStorage("killachievement");
  }
}*/
if (global.ISTHEGODAMNFUCKINGGAMEON !== "yeah") {
if (localStorage.getItem("startachievement") !== "YOUDIDIT:D!!!") {
localStorage.setItem("savedkills", 0);
}
}
function resetAllAchievements() {
  var zeroyeah = 0;
  util.resetAchievementFromLocalStorage("startachievement");
  util.resetAchievementFromLocalStorage("disconnectachievement");
  util.resetAchievementFromLocalStorage("25killsachievement");
  util.resetAchievementFromLocalStorage("50killsachievement");
  util.resetAchievementFromLocalStorage("100killsachievement");
  util.resetAchievementFromLocalStorage("killachievement");
  util.resetAchievementFromLocalStorage("killachievement2");
  util.resetAchievementFromLocalStorage("lagachievement");
  util.resetAchievementFromLocalStorage("skypemoment");
  util.resetAchievementFromLocalStorage("tokenachievement");
  util.resetAchievementFromLocalStorage("Getbacktowoooak");
  util.resetAchievementFromLocalStorage("creditsachievement");
  util.resetAchievementFromLocalStorage("pissio");
  localStorage.setItem("savedkills", zeroyeah.toString());
}
                  let nIntervId;
                  if (!nIntervId) {
                    nIntervId = setInterval(gettimesince, 1000);
                  }
                function gettimesince() {
                  const date = new Date()
                  var sec = 0;
                  var min = 0;
                  var hour = 0;
                  var day = 0;
                  var month = 0;
                  var year = 0;
                  var nerosec = '';
                  var neromin = '';
                  var nerohour = '';
                  var neroday = '';
                  var neromonth = '';
                  var daysinm = 0;
                  if (date.getMonth() == 8 || 10 || 3 || 5) {
                    daysinm = 30
                  } else {
                    if (date.getMonth() == 1) {
                      if (date.getFullYear() == 2024 || 2028 || 2032 || 2036 || 2040 || 2044 || 2048 || 2042) {
                        daysinm = 29
                      } else {
                        daysinm = 28
                      }
                    } else {
                      daysinm = 31
                    }
                  }
                if (date.getSeconds() + 28 > 59) {
                    sec = (date.getSeconds() + 60) - 92
                  } else {
                    sec = (date.getSeconds() + 60) - 32
                };
              if (date.getMinutes() < 45) {
                if (date.getSeconds() > 31) {
                    min = (date.getMinutes() + 60) - 44
                  } else {
                    min = (date.getMinutes() + 60) - 45
                }
              } else {
                  if (date.getSeconds() > 31) {
                    min = (date.getMinutes() + 60) - 104
                  } else {
                    min = (date.getMinutes() + 60) - 105
                }
              }
              if (date.getHours() < 11) {
                if (date.getMinutes() > 44) {
                    hour = ((date.getHours() + 24) - 10)
                  } else {
                    hour = ((date.getHours() + 24) - 11)
                }
              } else {
                if (date.getMinutes() > 44) {
                    hour = ((date.getHours() + 24) - 34)
                  } else {
                    hour = ((date.getHours() + 24) - 35)
                }
              }
                if (date.getDate() < 24) {
                  if (date.getHours() > 10) {
                    day = (date.getDate() + daysinm) - 23
                  } else {
                    day = (date.getDate() + daysinm) - 24
                    }
                  } else {
                    if (date.getHours() > 10) {
                    day = (date.getDate() + daysinm) - (23 + daysinm)
                  } else {
                    day = (date.getDate() + daysinm) - (24 + daysinm)
                    }
                  };
                if (date.getMonth() < 4) {
                  if (date.getDate() > 23) {
                    if (date.getMonth() == 3) {
                      month = (date.getMonth() + 11) - 14
                    } else {
                      month = (date.getMonth() + 11) - 2
                    }
                  } else {
                    month = (date.getMonth() + 11) - 3
                  }
                } else {
                  if (date.getDate() > 23) {
                    month = (date.getMonth() + 11) - 14
                  } else {
                    month = (date.getMonth() + 11) - 15
                  }
                };
                  if (date.getMonth() > 2) {
                    year = ' | Years: ' + (date.getFullYear() - 2019)
                  } else {
                    year = ' | Years: ' + (date.getFullYear() - 2020)
                  }
                  if (sec !== 0) {
                    nerosec = ', Seconds: ' + sec
                  } else {
                    nerosec = ''
                  }
                  if (min !== 0) {
                    neromin = ', Minutes: ' + min
                  } else {
                    neromin = ''
                  }
                  if (hour !== 0) {
                    nerohour = ', Hours: ' + hour
                  } else {
                    nerohour = ''
                  }
                  if (day !== 0) {
                    neroday = ', Days: ' + day
                  } else {
                    neroday = ''
                  }
                  if (month !== 0) {
                    neromonth = ', Months: ' + month
                  } else {
                    neromonth = ''
                  }
                    //const currentdate = ' / Current Year: ' + date.getFullYear() + ' / Current Month: ' + date.getMonth() + ' / Current Day: ' + date.getDate() + ' / Current Hour: ' + date.getHours() + ' / Current Minute: ' + date.getMinutes() + ' / Current Second: ' + date.getSeconds() + ' /'
                    const nerodate = year + ' ' + neromonth + ' ' + neroday + ' ' + nerohour + ' ' + neromin + ' ' + nerosec + ' |'
                    $(document.getElementById("updatetime")).html("<h3>" + nerodate + "</h3>");
                    //$(document.getElementById("updatetime2")).html("<h3>" + currentdate + "</h3>");
              }
fetch("changelog.html", { cache: "no-cache" })
.then(async ChangelogsHTMLFile => {
    let patchNotes = document.querySelector("#patchNotes");
    try {
        let parser = new DOMParser(),
            RawHTMLString = await ChangelogsHTMLFile.text(),
            ParsedHTML = parser.parseFromString(RawHTMLString, "text/html"),
            titles = ParsedHTML.documentElement.getElementsByTagName('h1');
        for (const title of titles) {
            title.classList.add('title');
        }

        patchNotes.innerHTML += ParsedHTML.documentElement.innerHTML;
    } catch (error) {
        patchNotes.innerHTML = `<p>An error occured while trying to fetch 'changelogs.html'</p><p>${error}</p>`;
        console.error(error);
    }
});

fetch("credits.html", { cache: "no-cache" })
.then(async CreditsHTMLFile => {
    let patchNotes = document.querySelector("#credits");
    try {
        let parser = new DOMParser(),
            RawHTMLString = await CreditsHTMLFile.text(),
            ParsedHTML = parser.parseFromString(RawHTMLString, "text/html"),
            titles = ParsedHTML.documentElement.getElementsByTagName('h1');
        for (const title of titles) {
            title.classList.add('title');
        }

        patchNotes.innerHTML += ParsedHTML.documentElement.innerHTML;
    } catch (error) {
        patchNotes.innerHTML = `<p>An error occured while trying to fetch 'credits.html'</p><p>${error}</p>`;
        console.error(error);
    }
});

class Animation {
    constructor(start, to, smoothness = 0.05) {
        this.start = start;
        this.to = to;
        this.value = start;
        this.smoothness = smoothness;
    }
    reset() {
        this.value = this.start;
        return this.value;
    }
    getLerp() {
        this.value = util.lerp(this.value, this.to, this.smoothness, true);
        return this.value;
    }
    getNoLerp() {
        this.value = this.to;
        return this.value;
    }
    get() {
        return settings.graphical.fancyAnimations ? this.getLerp() : this.getNoLerp();
    }
    flip() {
        const start = this.to;
        const to = this.start;
        this.start = start;
        this.to = to;
    }
    goodEnough(val = 0.5) {
        return Math.abs(this.to - this.value) < val;
    }
}
let animations = window.animations = {
    connecting: new Animation(1, 0),
    disconnected: new Animation(1, 0),
    deathScreen: new Animation(1, 0),
    error: new Animation(1, 0),
};

// Mockup functions
// Prepare stuff
global.player = {
    //Set up the player
    id: -1,
    x: global.screenWidth / 2,
    y: global.screenHeight / 2,
    vx: 0,
    vy: 0,
    cx: 0,
    cy: 0,
    renderx: global.screenWidth / 2,
    rendery: global.screenHeight / 2,
    isScoping: false,
    screenx: 0,
    screeny: 0,
    renderv: 1,
    slip: 0,
    view: 1,
    time: 0,
    screenWidth: global.screenWidth,
    screenHeight: global.screenHeight,
    nameColor: "#ffffff",
};
var upgradeSpin = 0,
    lastPing = 0,
    renderTimes = 0;
global.clearUpgrades = () => gui.upgrades = [];
// Build the leaderboard object
global.player = global.player;
global.canUpgrade = false;
global.canSkill = false;
global.message = "";
global.time = 0;
// Window setup <3
global.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var serverName = "Connected";
var provider = "Unknown";
function getMockups() {
    global.mockupLoading = new Promise(Resolve => {
        util.pullJSON("mockups").then(data => {
            global.mockups = data;
            console.log('Mockups loading complete.');
            console.log("%cWhy are you here Lmfao", "color: #FFFFFF; font-size: 45px; background: #333333; text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px;");
            Resolve();
        });
    });
}
window.onload = async () => {
    window.serverAdd = (await (await fetch("/serverData.json")).json()).ip;
    if (Array.isArray(window.serverAdd)) {
        window.isMultiserver = true;
        const servers = window.serverAdd;
        let serverSelector = document.getElementById("serverSelector"),
            tbody = document.createElement("tbody");
        serverSelector.style.display = "block";
        document.getElementById("startMenuSlidingContent").removeChild(document.getElementById("serverName"));
        serverSelector.classList.add("serverSelector");
        serverSelector.classList.add("shadowscroll");
        serverSelector.appendChild(tbody);
        let myServer = {
            classList: {
                contains: () => false,
            },
        };
        for (let server of servers) {
            try {
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.textContent = `${server.gameMode} | ${server.players} Players`;
                td.onclick = () => {
                    if (myServer.classList.contains("selected")) {
                        myServer.classList.remove("selected");
                    }
                    tr.classList.add("selected");
                    myServer = tr;
                    window.serverAdd = server.ip;
                    getMockups();
                };
                tr.appendChild(td);
                tbody.appendChild(tr);
                myServer = tr;
            } catch (e) {
                console.log(e);
            }
        }
        if (Array.from(myServer.children)[0].onclick) {
            Array.from(myServer.children)[0].onclick();
        }
    } else {
        getMockups();
        util.pullJSON("gamemodeData").then((json) => {
            document.getElementById("serverName").innerHTML = `<h4 class="nopadding">${json.gameMode} | ${json.players} Players</h4>`;
        });
    }
    // Save forms
    util.retrieveFromLocalStorage("playerNameInput");
    util.retrieveFromLocalStorage("playerKeyInput");
    util.retrieveFromLocalStorage("optScreenshotMode");
    util.retrieveFromLocalStorage("optPredictive");
    util.retrieveFromLocalStorage("optFancy");
    util.retrieveFromLocalStorage("coloredHealthbars");
    util.retrieveFromLocalStorage("centerTank");
    util.retrieveFromLocalStorage("optColors");
    util.retrieveFromLocalStorage("optCustom");
    util.retrieveFromLocalStorage("optNoPointy");
    util.retrieveFromLocalStorage("optBorders");
    util.retrieveFromLocalStorage("optResolution");
    util.retrieveFromLocalStorage("seperatedHealthbars");
    util.retrieveFromLocalStorage("optOgIcon");
    util.retrieveFromLocalStorage("optNoEmojis");
    util.retrieveFromLocalStorage("autoLevelUp");
    // Set default theme
    if (document.getElementById("optColors").value === "") {
        document.getElementById("optColors").value = "nero";
    }
    if (document.getElementById("optBorders").value === "") {
        document.getElementById("optBorders").value = "nero";
    }
    if (document.getElementById("optResolution").value === "") {
        document.getElementById("optResolution").value = "normal";
    }
    // Achievement Shit
    document.getElementById("resetachievementsbutton").onclick = () => resetAllAchievements();
    // Game start stuff
    document.getElementById("startButton").onclick = () => startGame();
    document.onkeydown = (e) => {
        var key = e.which || e.keyCode;
        if (key === global.KEY_ENTER && (global.dead || !global.gameLoading)) {
            startGame();
        }
    };
    window.addEventListener("resize", resizeEvent);
    resizeEvent();
};
var callofduty = "";
function resizeEvent() {
    if (settings.graphical.quality === undefined) {
      settings.graphical.quality = 1;
    };
    let scale = window.devicePixelRatio;
    if (!settings.graphical.fancyAnimations) {
        scale *= 0.5;
    }
    if (typeof settings.graphical.quality === 'string' || settings.graphical.quality instanceof String) {
    callofduty = new Image(); // Create new img element
    if (settings.graphical.quality == "cod") {
    callofduty.src = "https://image.api.playstation.com/cdn/EP0002/CUSA12443_00/VgKYOxWoNSp4mNJ2KvzEFVBWN0idCM5I.png?w=440"
    }
    } else {
    scale *= settings.graphical.quality
    }
    if (settings.graphical.quality == "1dim") {
    global.screenWidth = window.innerWidth * scale;
    global.screenHeight = 1 * scale;
    } else if (settings.graphical.quality == "d1dim") {
    global.screenWidth = 1 * scale;
    global.screenHeight = window.innerHeight * scale;
    } else if (settings.graphical.quality == "1pix") {
    global.screenWidth = 1 * scale;
    global.screenHeight = 1 * scale;
    } else {
    global.screenWidth = window.innerWidth * scale;
    global.screenHeight = window.innerHeight * scale;
    }
    c.resize(global.screenWidth, global.screenHeight);
    global.ratio = scale;
    global.screenSize = Math.min(1920, Math.max(window.innerWidth, 1280));
}
window.resizeEvent = resizeEvent;
window.canvas = new Canvas();
var c = window.canvas.cv;
var ctx = c.getContext("2d");
var c2 = document.createElement("canvas");
var ctx2 = c2.getContext("2d");
ctx2.imageSmoothingEnabled = true;
// Animation things
function Smoothbar(value, speed, sharpness = 3, lerpValue = 0.025) {
    let time = Date.now();
    let display = value;
    let oldvalue = value;
    return {
        set: (val) => {
            if (value !== val) {
                oldvalue = display;
                value = val;
                time = Date.now();
            }
        },
        get: (round = false) => {
            display = util.lerp(display, value, lerpValue);
            if (Math.abs(value - display) < 0.1 && round) display = value;
            return display;
                  },
        force: (val) => {
            display = value = val;
        },
    };
}
global.player = {
    vx: 0,
    vy: 0,
    lastvx: 0,
    lastvy: 0,
    renderx: global.player.cx,
    rendery: global.player.cy,
    lastx: global.player.x,
    lasty: global.player.y,
    cx: 0,
    cy: 0,
    screenx: 0,
    screeny: 0,
    target: calculateTarget(),
    name: "",
    lastUpdate: 0,
    time: 0,
    nameColor: "#ffffff",
};
function calculateTarget() {
    global.target.x = global.mouse.x - (global.player.screenx / global.screenWidth * window.canvas.width + window.canvas.width / 2);
    global.target.y = global.mouse.y - (global.player.screeny / global.screenHeight * window.canvas.height + window.canvas.height / 2);
    if (window.canvas.reverseDirection) global.reverseTank = -1;
    else global.reverseTank = 1;
    global.target.x *= global.screenWidth / window.canvas.width;
    global.target.y *= global.screenHeight / window.canvas.height;
    if (settings.graphical.screenshotMode && Math.abs(Math.atan2(global.target.y, global.target.x) + Math.PI/2) < 0.035) global.target.x = 0; 
    return global.target;
}
function parseTheme(string){
    // Decode from base64
    try {
        let stripped = string.replace(/\s+/g, '');
        if (stripped.length % 4 == 2)
            stripped += '==';
        else if (stripped.length % 4 == 3)
            stripped += '=';
        let data = atob(stripped);
    
        let name = 'Unknown Theme',
            author = '';
        let index = data.indexOf('\x00');
        if (index === -1) return null;
        name = data.slice(0, index) || name;
        data = data.slice(index + 1);
        index = data.indexOf('\x00');
        if (index === -1) return null;
        author = data.slice(0, index) || author;
        data = data.slice(index + 1);
        let border = data.charCodeAt(0) / 0xff;
        data = data.slice(1);
        let paletteSize = Math.floor(data.length / 3);
        if (paletteSize < 2) return null;
        let colorArray = [];
        for (let i = 0; i < paletteSize; i++) {
            let red = data.charCodeAt(i * 3)
            let green = data.charCodeAt(i * 3 + 1)
            let blue = data.charCodeAt(i * 3 + 2)
            let color = (red << 16) | (green << 8) | blue
            colorArray.push('#' + color.toString(16).padStart(6, '0'))
        }
        let content = {
            teal:     colorArray[0],
            lgreen:   colorArray[1],
            orange:   colorArray[2],
            yellow:   colorArray[3],
            aqua:     colorArray[4],
            pink:     colorArray[5],
            vlgrey:   colorArray[6],
            lgrey:    colorArray[7],
            guiwhite: colorArray[8],
            black:    colorArray[9],
    
            blue:     colorArray[10],
            green:    colorArray[11],
            red:      colorArray[12],
            gold:     colorArray[13],
            purple:   colorArray[14],
            magenta:  colorArray[15],
            grey:     colorArray[16],
            dgrey:    colorArray[17],
            white:    colorArray[18],
            guiblack: colorArray[19],
    
            paletteSize,
            border,
        }
        return { name, author, content };
    } catch (e) {}
    // Decode from JSON
    try {
        let output = JSON.parse(string);
        if (typeof output !== 'object')
            return null;
        let { name = 'Unknown Theme', author = '', content } = output;
    
        for (let colorHex of [
            content.teal,
            content.lgreen,
            content.orange,
            content.yellow,
            content.aqua,
            content.pink,
            content.vlgrey,
            content.lgrey,
            content.guiwhite,
            content.black,
    
            content.blue,
            content.green,
            content.red,
            content.gold,
            content.purple,
            content.magenta,
            content.grey,
            content.dgrey,
            content.white,
            content.guiblack,
        ]) {
            if (!/^#[0-9a-fA-F]{6}$/.test(colorHex)) return null;
        }
    
        return {
            name: (typeof name === 'string' && name) || 'Unknown Theme',
            author: (typeof author === 'string' && author) || '',
            content,
        }
    } catch (e) {}
    
    return null;
}
// This starts the game and sets up the websocket
function startGame() {
    PlaySound69();
    clearInterval(nIntervId);
    // release our intervalID from the variable
    nIntervId = null;        
    // Set flag
    global.gameLoading = true;
    console.log('Started connecting.')
    //set start achievement
    util.submitAchievementToLocalStorage("startachievement");
    // Get options
    util.submitToLocalStorage("optFancy");
    util.submitToLocalStorage("centerTank");
    util.submitToLocalStorage("optBorders");
    util.submitToLocalStorage("optResolution");
    util.submitToLocalStorage("optNoPointy");
    util.submitToLocalStorage("optOgIcon");
    util.submitToLocalStorage("optNoEmojis");
    util.submitToLocalStorage("autoLevelUp");
    util.submitToLocalStorage("optPredictive");
    util.submitToLocalStorage("optScreenshotMode");
    util.submitToLocalStorage("coloredHealthbars");
    util.submitToLocalStorage("seperatedHealthbars"); 
    global.ISTHEGODAMNFUCKINGGAMEON = "yeah";
    settings.graphical.fancyAnimations = !document.getElementById("optFancy").checked;
    settings.graphical.centerTank = document.getElementById("centerTank").checked;
    settings.graphical.pointy = !document.getElementById("optNoPointy").checked;
    settings.game.optOgIcon = !document.getElementById("optOgIcon").checked;
    settings.game.optNoEmojis = !document.getElementById("optNoEmojis").checked;
    settings.game.autoLevelUp = document.getElementById("autoLevelUp").checked;
    settings.lag.unresponsive = document.getElementById("optPredictive").checked;
    settings.graphical.screenshotMode = document.getElementById("optScreenshotMode").checked;
    settings.graphical.coloredHealthbars = document.getElementById("coloredHealthbars").checked;
    settings.graphical.seperatedHealthbars = document.getElementById("seperatedHealthbars").checked;
    switch (document.getElementById("optBorders").value) {
        case "normal":
            settings.graphical.darkBorders = settings.graphical.neon = false;
            break;
        case "dark":
            settings.graphical.darkBorders = true;
            settings.graphical.neon = false;
            break;
        case "glass":
            settings.graphical.darkBorders = false;
            settings.graphical.neon = true;
            break;
        case "neon":
            settings.graphical.darkBorders = settings.graphical.neon = true;
            break;
    }
    switch (document.getElementById("optResolution").value) {
        case "normal":
            settings.graphical.quality = 1;
            break;
        case "low":
            settings.graphical.quality = 0.75;
            break;
        case "high":
            settings.graphical.quality = 1.5;
            break;
        case "higher":
            settings.graphical.quality = 2;
            break;
        case "rtx":
            settings.graphical.quality = 4;
            break;
        case "really low":
            settings.graphical.quality = 0.5;
            break;
        case "really really low":
            settings.graphical.quality = 0.25;
            break;
        case "unplayable":
            settings.graphical.quality = 0.1;
            break;
        case "1d":
            settings.graphical.quality = "1dim";
            break;
        case "d1":
            settings.graphical.quality = "d1dim";
            break;
        case "onepixel":
            settings.graphical.quality = "1pix";
            break;
        case "codbo4":
            settings.graphical.quality = "cod";
            break;
        case "drugs":
            settings.graphical.quality = "trippy";
            break;
    }
    util.submitToLocalStorage("optColors");
    let a = document.getElementById("optColors").value;
    color = color[a === "" ? "nero" : a];
    if (a == "custom") {
        let customTheme = document.getElementById("optCustom").value;
        color = parseTheme(customTheme).content;
        util.submitToLocalStorage("optCustom");
    }
    gameDraw.color = color;
    // Other more important stuff
    let playerNameInput = document.getElementById("playerNameInput");
    let playerKeyInput = document.getElementById("playerKeyInput");
    // Name and keys
    util.submitToLocalStorage("playerNameInput");
    util.submitToLocalStorage("playerKeyInput");
    global.playerName = global.player.name = playerNameInput.value;
    global.playerKey = playerKeyInput.value.replace(/(<([^>]+)>)/gi, "").substring(0, 64);
    // Change the screen
    global.screenWidth = window.innerWidth;
    global.screenHeight = window.innerHeight;
    document.getElementById("startMenuWrapper").style.maxHeight = "0px";
    document.getElementById("gameAreaWrapper").style.opacity = 1;

    document.getElementById("hideongamestart").style.zIndex = "-3";
    // Set up the socket
    if (!global.socket) {
        global.socket = socketInit(26301);
    }
    if (!global.animLoopHandle) {
        animloop();
    }
    window.canvas.socket = global.socket;
    setInterval(() => moveCompensation.iterate(global.socket.cmd.getMotion()), 1000 / 30);
    document.getElementById("gameCanvas").focus();
    window.onbeforeunload = () => true;
    if (settings.game.optNoEmojis) {
      trollface = new Image(); // Create new img element
    }
}
// Background clearing
function clearScreen(clearColor, alpha) {
    ctx.fillStyle = clearColor;
    ctx.globalAlpha = alpha;
    ctx.fillRect(0, 0, global.screenWidth, global.screenHeight);
    ctx.globalAlpha = 1;
}
// Text functions
function arrayifyText(rawText) {
    //we want people to be able to use the section sign in writing too
    // string with double §           txt   col   txt                      txt
    // "...§text§§text§..." => [..., "text", "", "text", ...] => [..., "text§text", ...]
    // this code is balanced on tight threads, holy shit
    let textArrayRaw = rawText.split(/§|;;/),
        textArray = [];
    if (!(textArrayRaw.length & 1)) {
        textArrayRaw.unshift('');
    }
    while (textArrayRaw.length) {
        let first = textArrayRaw.shift();
        if (!textArrayRaw.length) {
            textArray.push(first);
        } else if (textArrayRaw[1]) {
            textArray.push(first, textArrayRaw.shift());
        } else {
            textArrayRaw.shift();
            textArray.push(first + '§' + textArrayRaw.shift(), textArrayRaw.shift());
        }
    }
    return textArray;
}
const measureText = (text, fontSize, withHeight = false) => {
    fontSize += settings.graphical.fontSizeBoost;
    ctx.font = "bold " + fontSize + "px Ubuntu";
    let measurement = ctx.measureText(arrayifyText(text).reduce((a, b, i) => (i & 1) ? a : a + b, ''));
    return withHeight ? { width: measurement.width, height: fontSize } : measurement.width;
};
function drawText(rawText, x, y, size, defaultFillStyle, align = "left", center = false, fade = 1, stroke = true, context = ctx) {
    size += settings.graphical.fontSizeBoost;
    // Get text dimensions and resize/reset the canvas
    let offset = size / 5,
        ratio = 1,
        textArray = arrayifyText(rawText),
        renderedFullText = textArray.reduce((a, b, i) => (i & 1) ? a : a + b, '');
    if (context.getTransform) {
        ratio = ctx.getTransform().d;
        offset *= ratio;
    }
    if (ratio !== 1) {
        size *= ratio;
    }
    context.font = "bold " + size + "px Ubuntu";
    let Xoffset = offset,
        Yoffset = (size + 2 * offset) / 2,
        alignMultiplier = 0;
    switch (align) {
        //case "left":
        //    //do nothing.
        //    break;
        case "center":
            alignMultiplier = 0.5;
            break;
        case "right":
            alignMultiplier = 1;
    }
    if (alignMultiplier) {
        Xoffset -= ctx.measureText(renderedFullText).width * alignMultiplier;
    }
    // Draw it
    context.lineWidth = (size + 1) / settings.graphical.fontStrokeRatio;
    context.textAlign = "left";
    context.textBaseline = "middle";
    context.strokeStyle = color.black;
    context.fillStyle = defaultFillStyle;
    context.save();
    context.lineCap = settings.graphical.miterText ? "miter" : "round";
    context.lineJoin = settings.graphical.miterText ? "miter" : "round";
    if (ratio !== 1) {
        context.scale(1 / ratio, 1 / ratio);
    }
    Xoffset += x * ratio - size / 4; //this extra size-dependant margin is a guess lol // apparently this guess worked out to be a hella good one
    Yoffset += y * ratio - Yoffset * (center ? 1.05 : 1.5);
    if (stroke) {
        context.strokeText(renderedFullText, Xoffset, Yoffset);
    }
    for (let i = 0; i < textArray.length; i++) {
        let str = textArray[i];

        // odd index = this is a color to set the fill style to
        if (i & 1) {

            //reset color to default
            if (str === "reset") {
                context.fillStyle = defaultFillStyle;
            } else {
                str = gameDraw.getColor(str) ?? str;
            }
            context.fillStyle = str;

        } else {
            // move forward a bit taking the width of the last piece of text + "kerning" between
            // the last letter of last text and the first letter of current text,
            // making it align perfectly with what we drew with strokeText earlier
            if (i) {
                Xoffset += ctx.measureText(textArray[i - 2] + str).width - ctx.measureText(str).width;
            }
            context.fillText(str, Xoffset, Yoffset);
        }
    }
    context.restore();
}

// Library: mltext.js
// Desciption: Extends the CanvasRenderingContext2D that adds two functions: mlFillText and mlStrokeText.
//
// The prototypes are: 
//
// function mlFillText(text,x,y,w,h,vAlign,hAlign,lineheight);
// function mlStrokeText(text,x,y,w,h,vAlign,hAlign,lineheight);
// 
// Where vAlign can be: "top", "center" or "button"
// And hAlign can be: "left", "center", "right" or "justify"
// Author: Jordi Baylina. (baylina at uniclau.com)
// License: GPL
// Date: 2013-02-21

function mlFunction(text, x, y, w, h, hAlign, vAlign, lineheight, textsize, defaultFillStyle = color.guiwhite, fn = "strokeText") {
    textsize += settings.graphical.fontSizeBoost;
    // Get text dimensions and resize/reset the canvas
    let offset = textsize / 5,
        ratio = 1;
    if (ctx.getTransform) {
        ratio = ctx.getTransform().d;
        offset *= ratio;
    }
    if (ratio !== 1) {
        textsize *= ratio;
    }
    ctx.font = "bold " + textsize + "px Ubuntu";    
    text = text.replace(/[\n]/g, " \n ");
    text = text.replace(/\r/g, "");
    lineheight += settings.graphical.fontSizeBoost;
    var words = text.split(/[ ]+/);
    var sp = ctx.measureText(' ').width;
    var lines = [];
    var actualline = 0;
    var actualsize = 0;
    var wo;
    lines[actualline] = {};
    lines[actualline].Words = [];
    let i = 0;
    while (i < words.length) {
        var word = words[i];
        if (word == "\n") {
            lines[actualline].EndParagraph = true;
            actualline++;
            actualsize = 0;
            lines[actualline] = {};
            lines[actualline].Words = [];
            i++;
        } else {
            wo = {};
            wo.l = ctx.measureText(word).width;
            if (actualsize === 0) {
                while (wo.l > w) {
                    word = word.slice(0, word.length - 1);
                    wo.l = ctx.measureText(word).width;
                }
                if (word === "") return; // I can't fill a single character
                wo.word = word;
                lines[actualline].Words.push(wo);
                actualsize = wo.l;
                if (word != words[i]) {
                    words[i] = words[i].slice(word.length, words[i].length);
                } else {
                    i++;
                }
            } else {
                if (actualsize + sp + wo.l > w) {
                    lines[actualline].EndParagraph = false;
                    actualline++;
                    actualsize = 0;
                    lines[actualline] = {};
                    lines[actualline].Words = [];
                } else {
                    wo.word = word;
                    lines[actualline].Words.push(wo);
                    actualsize += sp + wo.l;
                    i++;
                }
            }
        }
    }
    if (actualsize === 0) lines[actualline].pop();
    lines[actualline].EndParagraph = true;

    var totalH = lineheight * lines.length;
    while (totalH > h) {
        lines.pop();
        totalH = lineheight * lines.length;
    }

    var yy;
    if (vAlign == "bottom") {
        yy = y + h - totalH + lineheight;
    } else if (vAlign == "center") {
        yy = y + h / 2 - totalH / 2 + lineheight;
    } else {
        yy = y + lineheight;
    }

    var oldTextAlign = ctx.textAlign;
    ctx.textAlign = "left";
    ctx.strokeStyle = color.black;
    ctx.fillStyle = defaultFillStyle;
    ctx.lineWidth = (textsize + 1) / settings.graphical.fontStrokeRatio;

    for (var li in lines) {
        var totallen = 0;
        var xx, usp;
        for (wo in lines[li].Words) totallen += lines[li].Words[wo].l;
        if (hAlign == "center") {
            usp = sp;
            xx = x + w / 2 - (totallen + sp * (lines[li].Words.length - 1)) / 2;
        } else if ((hAlign == "justify") && (!lines[li].EndParagraph)) {
            xx = x;
            usp = (w - totallen) / (lines[li].Words.length - 1);
        } else if (hAlign == "right") {
            xx = x + w - (totallen + sp * (lines[li].Words.length - 1));
            usp = sp;
        } else { // left
            xx = x;
            usp = sp;
        }
        for (wo in lines[li].Words) {
            if (fn == "fillText") {
                ctx.fillText(lines[li].Words[wo].word, xx, yy);
            } else if (fn == "strokeText") {
                ctx.strokeText(lines[li].Words[wo].word, xx, yy);
                let textArray = lines[li].Words[wo].word;
                var Xoffset = 0;
                for (let i = 0; i < textArray.length; i++) {
                    let str = textArray[i];
                        if (i) {
                            Xoffset += ctx.measureText(textArray[i - 1] + str).width - ctx.measureText(str).width;
                        }
                        ctx.fillText(str, xx + Xoffset, yy);
                }
            }
            xx += lines[li].Words[wo].l + usp;
        }
        yy += lineheight;
    }
    ctx.textAlign = oldTextAlign;
}

(function mlInit() {
    CanvasRenderingContext2D.prototype.mlFunction = mlFunction;

    CanvasRenderingContext2D.prototype.mlFillText = function (text, x, y, w, h, vAlign, hAlign, lineheight, textsize, defaultFillStyle) {
        ctx.mlFunction(text, x, y, w, h, hAlign, vAlign, lineheight, textsize, "fillText");
    };

    CanvasRenderingContext2D.prototype.mlStrokeText = function (text, x, y, w, h, vAlign, hAlign, lineheight, textsize, defaultFillStyle) {
        ctx.mlFunction(text, x, y, w, h, hAlign, vAlign, lineheight, textsize, "strokeText");
        }
    })();
// Gui drawing functions
function drawGuiRect(x, y, length, height, stroke = false) {
    switch (stroke) {
        case true:
            ctx.strokeRect(x, y, length, height);
            break;
        case false:
            ctx.fillRect(x, y, length, height);
            break;
        case 0:
            ctx.beginPath();
            ctx.lineTo(x, y);
            ctx.lineTo(x + length, y);
            ctx.lineTo(x, y + height);
            ctx.lineTo(x + length, y + height);
            ctx.closePath();
            ctx.stroke();
            break;
        case 1:
            ctx.beginPath();
            ctx.roundRect(x, y, length, height, 5);
            ctx.stroke();
            break;
        case 2:
            ctx.beginPath();
            ctx.roundRect(x, y, length, height, 5);
            ctx.stroke();
            ctx.fill();
            break;
        case 3:
            ctx.beginPath();
            ctx.roundRect(x, y, length, height, [5,5,0,0]);
            ctx.stroke();
            ctx.fill();
            break;
        case 4:
            ctx.beginPath();
            ctx.lineTo(x, y);
            ctx.lineTo(x + length, y);
            ctx.lineTo(x + length, y + height);
            ctx.lineTo(x, y + height);
            //ctx.lineWidth = strokeWidth;
            //ctx.strokeStyle = color;
            ctx.closePath();
            ctx.stroke();
            break;
    }
}

function drawGuiCircle(x, y, radius, stroke = false) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    if (stroke) {
        ctx.stroke();
    } else {
        ctx.fill();
    }
}

function drawGuiLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.lineTo(Math.round(x1) + 0.5, Math.round(y1) + 0.5);
    ctx.lineTo(Math.round(x2) + 0.5, Math.round(y2) + 0.5);
    ctx.closePath();
    ctx.stroke();
}

function drawBar(x1, x2, y, width, color) {
    ctx.beginPath();
    ctx.lineTo(x1, y);
    ctx.lineTo(x2, y);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.closePath();
    ctx.stroke();
}
//checking for images in the shape so we can draw them
function isImageURL(url) {
    try {
        const parsedUrl = new URL(url);
        const path = parsedUrl.pathname;
        const ext = path.split('.').pop().toLowerCase(); // Get the lowercase file extension

        // List of common image file extensions
        const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];

        return imageExtensions.includes(ext) || parsedUrl.protocol == 'data:';
    } catch (error) {
        return false; // URL parsing failed, or it's not an image URL.
    }
}
// Sub-drawing functions
const drawPolyImgs = [];
function drawPoly(context, centerX, centerY, radius, sides, angle = 0, borderless, fill, imageInterpolation) {
    // Start drawing
    context.beginPath();
    if (sides instanceof Array) {
        let dx = Math.cos(angle);
        let dy = Math.sin(angle);
        for (let [x, y] of sides)
            context.lineTo(
                centerX + radius * (x * dx - y * dy),
                centerY + radius * (y * dx + x * dy)
            );
    } else {
        if ("string" === typeof sides) {
            if (isImageURL(sides)) {
                //ideally we'd preload images when mockups are loaded but im too lazy for that atm
                if (!drawPolyImgs[sides]) {
                    drawPolyImgs[sides] = new Image();
                    drawPolyImgs[sides].src = sides;
                    drawPolyImgs[sides].isBroken = false;
                    drawPolyImgs[sides].onerror = function() {
                        console.log('Failed to load image!\nURL:', sides);
                        this.isBroken = true;
                    };
                }
                let img = drawPolyImgs[sides];
                if (img.isBroken || !img.complete) { // check if img is broken and draw placeholder if so
                    //this is probably the worst way to draw a missing texture checkerboard but im too lazy to do a better one
                    context.translate(centerX, centerY);
                    context.rotate(angle);
                    context.beginPath();
                    context.fillStyle = '#ff00ff';
                    context.lineTo(-radius,-radius);
                    context.lineTo(radius,-radius);
                    context.lineTo(radius,radius);
                    context.lineTo(-radius,radius);
                    context.lineTo(-radius,-radius);
                    context.fill();
                    context.closePath();
                    context.beginPath();
                    context.fillStyle = '#000000';
                    context.lineTo(-radius,-radius);
                    context.lineTo(0,-radius);
                    context.lineTo(0,0);
                    context.lineTo(0, radius);
                    context.lineTo(radius, radius);
                    context.lineTo(radius, 0);
                    context.lineTo(0, 0);
                    context.lineTo(-radius, 0);
                    context.lineTo(-radius,-radius);
                    context.fill();
                    context.closePath();
                    context.rotate(-angle);
                    context.translate(-centerX, -centerY);
                    return;
                }
                context.translate(centerX, centerY);
                context.rotate(angle);
                context.imageSmoothingEnabled = imageInterpolation;
                context.drawImage(img, -radius, -radius, radius*2, radius*2);
                context.imageSmoothingEnabled = true;
                context.rotate(-angle);
                context.translate(-centerX, -centerY);
                return;
            } else {
                let path = new Path2D(sides);
                context.save();
                context.translate(centerX, centerY);
                context.scale(radius, radius);
                context.lineWidth /= radius;
                context.rotate(angle);
                context.lineWidth *= fill ? 1 : 0.5; // Maintain constant border width
                if (!borderless) context.stroke(path);
                if (fill) context.fill(path);
                context.restore();
                return;
            }
        }
        angle += sides % 2 ? 0 : Math.PI / sides;
    }
    if (!sides) {
        // Circle
        let fillcolor = context.fillStyle;
        let strokecolor = context.strokeStyle;
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.fillStyle = strokecolor;
        context.lineWidth *= fill ? 1 : 0.5; // Maintain constant border width
        if (!borderless) context.stroke();
        context.closePath();
        context.beginPath();
        context.fillStyle = fillcolor;
        context.arc(centerX, centerY, radius * fill, 0, 2 * Math.PI);
        if (fill) context.fill();
        context.closePath();
        return;
    } else if (sides < 0) {
        // Star
        if (settings.graphical.pointy) context.lineJoin = "miter";
        sides = -sides;
        angle += (sides % 1) * Math.PI * 2;
        sides = Math.floor(sides);
        let dip = 1 - 6 / (sides ** 2);
        context.moveTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
        context.lineWidth *= fill ? 1 : 0.5; // Maintain constant border width
        for (let i = 0; i < sides; i++) {
            let htheta = ((i + 0.5) / sides) * 2 * Math.PI + angle,
                theta = ((i + 1) / sides) * 2 * Math.PI + angle,
                cx = centerX + radius * dip * Math.cos(htheta),
                cy = centerY + radius * dip * Math.sin(htheta),
                px = centerX + radius * Math.cos(theta),
                py = centerY + radius * Math.sin(theta);
            /*if (curvyTraps) {
                context.quadraticCurveTo(cx, cy, px, py);
            } else {
                context.lineTo(cx, cy);
                context.lineTo(px, py);
            }*/
            context.quadraticCurveTo(cx, cy, px, py);
        }
    } else if (sides > 0) {
        // Polygon
        angle += (sides % 1) * Math.PI * 2;
        sides = Math.floor(sides);
        context.lineWidth *= fill ? 1 : 0.5; // Maintain constant border width
        for (let i = 0; i < sides; i++) {
            let theta = (i / sides) * 2 * Math.PI + angle;
            context.lineTo(centerX + radius * Math.cos(theta), centerY + radius * Math.sin(theta));
        }
    }
    context.closePath();
    if (!borderless) context.stroke();
    if (fill) context.fill();
    context.lineJoin = "round";
}
function drawTrapezoid(context, x, y, length, height, aspect, angle, borderless, fill, alpha, strokeWidth, position) {
    let h = [];
    h = aspect > 0 ? [height * aspect, height] : [height, -height * aspect];

    // Construct a trapezoid at angle 0
    let points = [],
        sinT = Math.sin(angle),
        cosT = Math.cos(angle);
    points.push([-position, h[1]]);
    points.push([length * 2 - position, h[0]]);
    points.push([length * 2 - position, -h[0]]);
    points.push([-position, -h[1]]);
    context.globalAlpha = alpha;
    
    // Rotate it to the new angle via vector rotation
    context.beginPath();
    for (let point of points) {
        let newX = point[0] * cosT - point[1] * sinT + x,
            newY = point[0] * sinT + point[1] * cosT + y;
        context.lineTo(newX, newY);
    }
    context.closePath();
    context.lineWidth *= strokeWidth
    context.lineWidth *= fill ? 1 : 0.5; // Maintain constant border width
    if (!borderless) context.stroke();
    context.lineWidth /= fill ? 1 : 0.5; // Maintain constant border width
    if (fill) context.fill();
    context.globalAlpha = 1;
}
const drawEntity = (baseColor, x, y, instance, ratio, alpha = 1, scale = 1, lineWidthMult = 1, rot = 0, turretsObeyRot = false, assignedContext = false, turretInfo = false, render = instance.render) => {
    let context = assignedContext ? assignedContext : ctx;
    let fade = turretInfo ? 1 : render.status.getFade(),
        drawSize = scale * ratio * instance.size,
        indexes = instance.index.split("-"),
        m = global.mockups[parseInt(indexes[0])],
        xx = x,
        yy = y,
        source = turretInfo === false ? instance : turretInfo,
        blend = render.status.getBlend(),
        initStrokeWidth = lineWidthMult * Math.max(settings.graphical.mininumBorderChunk, ratio * settings.graphical.borderChunk);
    source.guns.update();
    if (fade === 0 || alpha === 0) return;
    if (render.expandsWithDeath) drawSize *= 1 + 0.5 * (1 - fade);
    if (settings.graphical.fancyAnimations && assignedContext != ctx2 && (fade !== 1 || alpha !== 1)) {
        context = ctx2;
        context.canvas.width = context.canvas.height = drawSize * m.position.axis / ratio * 2 + initStrokeWidth;
        xx = context.canvas.width / 2 - (drawSize * m.position.axis * m.position.middle.x * Math.cos(rot)) / 4;
        yy = context.canvas.height / 2 - (drawSize * m.position.axis * m.position.middle.y * Math.sin(rot)) / 4;
    } else {
        if (fade * alpha < 0.5) return;
    }
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = initStrokeWidth

    let upperTurretsIndex = source.turrets.length;
    // Draw turrets beneath us
    for (let i = 0; i < source.turrets.length; i++) {
        let t = source.turrets[i];
        context.lineWidth = initStrokeWidth * t.strokeWidth
        t.lerpedFacing == undefined
            ? (t.lerpedFacing = t.facing)
            : (t.lerpedFacing = util.lerpAngle(t.lerpedFacing, t.facing, 0.1, true));
        
        // Break condition
        if (t.layer > 0) {
            upperTurretsIndex = i;
            break;
        }

        let ang = t.direction + t.angle + rot,
            len = t.offset * drawSize,
            facing;
        if (t.mirrorMasterAngle || turretsObeyRot) {
            facing = rot + t.angle;
        } else {
            facing = t.lerpedFacing;
        }
        drawEntity(baseColor, xx + len * Math.cos(ang), yy + len * Math.sin(ang), t, ratio, 1, (drawSize / ratio / t.size) * t.sizeFactor, lineWidthMult, facing, turretsObeyRot, context, t, render);
    }
    // Draw guns below us
    let positions = source.guns.getPositions(),
        gunConfig = source.guns.getConfig();
    for (let i = 0; i < source.guns.length; i++) {
        context.lineWidth = initStrokeWidth
        let g = gunConfig[i];
        if (!g.drawAbove) {
            let gx = g.offset * Math.cos(g.direction + g.angle + rot),
                gy = g.offset * Math.sin(g.direction + g.angle + rot),
                gunColor = g.color == null ? color.grey : gameDraw.modifyColor(g.color, baseColor),
                alpha = g.alpha,
                strokeWidth = g.strokeWidth,
                borderless = g.borderless,
                fill = g.drawFill;
            gameDraw.setColor(context, gameDraw.mixColors(gunColor, render.status.getColor(), blend));
            drawTrapezoid(context, xx + drawSize * gx, yy + drawSize * gy, drawSize * g.length / 2, drawSize * g.width / 2, g.aspect, g.angle + rot, borderless, fill, alpha, strokeWidth, drawSize * positions[i]);
        }
    }
    // Draw body
    context.globalAlpha = 1;
    context.lineWidth = initStrokeWidth * m.strokeWidth
    gameDraw.setColor(context, gameDraw.mixColors(gameDraw.modifyColor(instance.color, baseColor), render.status.getColor(), blend));
    
    //just so you know, the glow implimentation is REALLY bad and subject to change in the future
    context.shadowColor = m.glow.color!=null ? gameDraw.modifyColor(m.glow.color) : gameDraw.mixColors(
        gameDraw.modifyColor(instance.color),
        render.status.getColor(),
        render.status.getBlend()
    );
    if (m.glow.radius && m.glow.radius>0){
      context.shadowBlur = m.glow.radius * ((drawSize / m.size) * m.realSize);
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.globalAlpha = m.glow.alpha;
      for (var i = 0; i < m.glow.recursion; i++) {
        drawPoly(context, xx, yy, (drawSize / m.size) * m.realSize, m.shape, rot, true, m.drawFill);
      }
      context.globalAlpha = 1;
    }
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    drawPoly(context, xx, yy, (drawSize / m.size) * m.realSize, m.shape, rot, instance.borderless, instance.drawFill, m.imageInterpolation);
    
    // Draw guns above us
    for (let i = 0; i < source.guns.length; i++) {
        context.lineWidth = initStrokeWidth
        let g = gunConfig[i];
        if (g.drawAbove) {
            let gx = g.offset * Math.cos(g.direction + g.angle + rot),
                gy = g.offset * Math.sin(g.direction + g.angle + rot),
                gunColor = g.color == null ? color.grey : gameDraw.modifyColor(g.color, baseColor),
                alpha = g.alpha,
                strokeWidth = g.strokeWidth,
                borderless = g.borderless,
                fill = g.drawFill;
            gameDraw.setColor(context, gameDraw.mixColors(gunColor, render.status.getColor(), blend));
            drawTrapezoid(context, xx + drawSize * gx, yy + drawSize * gy, drawSize * g.length / 2, drawSize * g.width / 2, g.aspect, g.angle + rot, borderless, fill, alpha, strokeWidth, drawSize * positions[i]);
        }
    }
    // Draw turrets above us
    for (let i = upperTurretsIndex; i < source.turrets.length; i++) {
        let t = source.turrets[i];
        context.lineWidth = initStrokeWidth * t.strokeWidth
        t.lerpedFacing == undefined
            ? (t.lerpedFacing = t.facing)
            : (t.lerpedFacing = util.lerpAngle(t.lerpedFacing, t.facing, 0.1, true));
        let ang = t.direction + t.angle + rot,
            len = t.offset * drawSize,
            facing;
        if (t.mirrorMasterAngle || turretsObeyRot) {
            facing = rot + t.angle;
        } else {
            facing = t.lerpedFacing;
        }
        drawEntity(baseColor, xx + len * Math.cos(ang), yy + len * Math.sin(ang), t, ratio, 1, (drawSize / ratio / t.size) * t.sizeFactor, lineWidthMult, facing, turretsObeyRot, context, t, render);
    }
    if (assignedContext == false && context != ctx && context.canvas.width > 0 && context.canvas.height > 0) {
        ctx.save();
        ctx.globalAlpha = alpha * fade;
        ctx.imageSmoothingEnabled = true;
        //ctx.globalCompositeOperation = "overlay";
        ctx.drawImage(context.canvas, x - xx, y - yy);
        ctx.restore();
        //ctx.globalCompositeOperation = "source-over";
    }
};
function drawHealth(x, y, instance, ratio, alpha) {
    let fade = instance.render.status.getFade();
    ctx.globalAlpha = fade * fade;
    let size = instance.size * ratio,
        indexes = instance.index.split("-"),
        m = global.mockups[parseInt(indexes[0])],
        realSize = (size / m.size) * m.realSize;
    if (instance.drawsHealth) {
        let health = instance.render.health.get(),
            shield = instance.render.shield.get();
        if (health < 0.99 || shield < 0.99) {
            let col = settings.graphical.coloredHealthbars ? gameDraw.mixColors(gameDraw.modifyColor(instance.color), color.guiwhite, 0.5) : color.blue;
            let yy = y + realSize + 15 * ratio;
            let barWidth = 3 * ratio;
            ctx.globalAlpha = fade * (alpha ** 2);
            //TODO: seperate option for hp bars
            // function drawBar(x1, x2, y, width, color) {

            //background bar
            drawBar(x - size, x + size, yy + barWidth * settings.graphical.seperatedHealthbars / 2, barWidth * (1 + settings.graphical.seperatedHealthbars) + settings.graphical.barChunk, color.black);

            //hp bar
            drawBar(x - size, x - size + 2 * size * health, yy + barWidth * settings.graphical.seperatedHealthbars, barWidth, col);

            //shield bar
            if (shield || settings.graphical.seperatedHealthbars) {
                if (!settings.graphical.seperatedHealthbars) ctx.globalAlpha = (1 + shield) * 0.3 * (alpha ** 2) * fade;
                drawBar(x - size, x - size + 2 * size * shield, yy, barWidth, settings.graphical.coloredHealthbars ? gameDraw.mixColors(col, color.guiblack, 0.25) : color.teal);
                ctx.globalAlpha = 1;
            }
        }
    }
    if (instance.id !== gui.playerid && instance.nameplate) {
        var name = instance.name.substring(7, instance.name.length + 1);
        var namecolor = instance.name.substring(0, 7);
        ctx.globalAlpha = alpha;
        drawText(name, x, y - realSize - 22 * ratio, 12 * ratio, namecolor, "center");
        drawText(util.handleLargeNumber(instance.score, 1), x, y - realSize - 12 * ratio, 6 * ratio, namecolor, "center");
        ctx.globalAlpha = 1;
    }
}
  
const iconColorOrder = [10, 11, 12, 15, 13, 2, 14, 4, 5, 1, 0, 3];
function getIconColor(colorIndex) {
    return iconColorOrder[colorIndex % 12].toString();
}

function drawEntityIcon(model, x, y, len, height, lineWidthMult, angle, alpha, colorIndex, upgradeKey, hover = false) {
    let picture = (typeof model == "object") ? model : util.getEntityImageFromMockup(model, gui.color),
        position = picture.position,
        scale = (0.6 * len) / position.axis,
        entityX = x + 0.5 * len,
        entityY = y + 0.5 * height,
        baseColor = picture.color;
        // Find x and y shift for the entity image
        let xShift = position.middle.x * Math.cos(angle) - position.middle.y * Math.sin(angle),
        yShift = position.middle.x * Math.sin(angle) + position.middle.y * Math.cos(angle);
        entityX -= scale * xShift;
        entityY -= scale * yShift;
  
  if (settings.game.optOgIcon) {
    // Draw box
    ctx.strokeStyle = color.black;
    ctx.fillStyle = color.black;
    ctx.lineWidth = 3 * lineWidthMult;
    ctx.globalAlpha = 0.4
    drawGuiRect(x + 8, y + 8, len, height, 2);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = picture.upgradeColor != null
        ? gameDraw.modifyColor(picture.upgradeColor)
        : gameDraw.getColor(getIconColor(colorIndex));
    //drawGuiRect(x + 25, y + 25, len - 50, height - 50, 2);
    drawGuiRect(x, y, len, height, 2);
    ctx.globalAlpha = 0.1;
    drawGuiRect(x, y, len, height * 0.6, 3);
    ctx.globalAlpha = 0.25 * alpha;
    ctx.fillStyle = color.black;
    drawGuiRect(x, y + height * 0.6, len, height * 0.4);
    // Shading for hover
    if (hover) {
        ctx.globalAlpha = 0.15 * alpha;
        ctx.fillStyle = color.guiwhite;
        drawGuiRect(x, y, len, height, 3);
    }
    ctx.globalAlpha = 1;
    if (settings.graphical.quality == "cod") {
    ctx.drawImage(callofduty, x, y, len, height);
    }

    // Draw Tank
    drawEntity(baseColor, entityX, entityY, picture, 1, 1, scale / picture.size, lineWidthMult, angle, true);

    // Tank name
    drawText(picture.upgradeName ?? picture.name, x + (upgradeKey ? 0.9 * len : len) / 2, y + height * 0.94, height / 10, color.guiwhite, "center");

    // Upgrade key
    if (upgradeKey) {
        drawText("[" + upgradeKey + "]", x + len - 4, y + height - 6, height / 8 - 5, color.guiwhite, "right");
    }
    ctx.strokeStyle = color.black;
    ctx.lineWidth = 3 * lineWidthMult;
    drawGuiRect(x, y, len, height, 1); // Border
  } else {
    // Draw box
    ctx.globalAlpha = alpha;
    ctx.fillStyle = picture.upgradeColor != null
        ? gameDraw.modifyColor(picture.upgradeColor)
        : gameDraw.getColor(getIconColor(colorIndex));
    drawGuiRect(x, y, len, height);
    ctx.globalAlpha = 0.25 * alpha;
    ctx.fillStyle = color.black;
    drawGuiRect(x, y + height * 0.6, len, height * 0.4);
    // Shading for hover
    if (hover) {
        ctx.globalAlpha = 0.15 * alpha;
        ctx.fillStyle = color.guiwhite;
        drawGuiRect(x, y, len, height);
    }
    ctx.globalAlpha = 1;
    if (settings.graphical.quality == "cod") {
    ctx.drawImage(callofduty, x, y, len, height);
    }

    // Draw Tank
    drawEntity(baseColor, entityX, entityY, picture, 1, 1, scale / picture.size, lineWidthMult, angle, true);

    // Tank name
    drawText(picture.upgradeName ?? picture.name, x + (upgradeKey ? 0.9 * len : len) / 2, y + height * 0.94, height / 10, color.guiwhite, "center");

    // Upgrade key
    if (upgradeKey) {
        drawText("[" + upgradeKey + "]", x + len - 4, y + height - 6, height / 8 - 5, color.guiwhite, "right");
    }
    ctx.strokeStyle = color.black;
    ctx.lineWidth = 3 * lineWidthMult;
    drawGuiRect(x, y, len, height, true); // Border
  }
}

// Start animation
window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || (callback => setTimeout(callback, 1000 / 60));
window.cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
// Drawing states
const statMenu = Smoothbar(0, 0.7, 1.5, 0.1);
const upgradeMenu = Smoothbar(0, 2, 3, 0.1);
// Define the graph constructor
function graph() {
    var data = [];
    return (point, x, y, w, h, col) => {
        // Add point and push off old ones
        data.push(point);
        while (data.length > w) {
            data.splice(0, 1);
        }
        // Get scale
        let min = Math.min(...data),
            max = Math.max(...data),
            range = max - min;
        // Draw zero
        if (max > 0 && min < 0) {
            drawBar(x, x + w, y + (h * max) / range, 2, color.guiwhite);
        }
        // Draw points
        ctx.beginPath();
        let i = -1;
        for (let p of data) {
            if (!++i) {
                ctx.moveTo(x, y + (h * (max - p)) / range);
            } else {
                ctx.lineTo(x + i, y + (h * (max - p)) / range);
            }
        }
        ctx.lineWidth = 1;
        ctx.strokeStyle = col;
        ctx.stroke();
    };
}
// Protected functions
function interpolate(p1, p2, v1, v2, ts, tt) {
    let k = Math.cos((1 + tt) * Math.PI);
    return 0.5 * (((1 + tt) * v1 + p1) * (k + 1) + (-tt * v2 + p2) * (1 - k));
}

function extrapolate(p1, p2, v1, v2, ts, tt) {
    return p2 + (p2 - p1) * tt;
}
// Useful thing
let modulo = function (a, n) {
    return ((a % n) + n) % n;
};
function angleDifference(sourceA, targetA) {
    let a = targetA - sourceA;
    return modulo(a + Math.PI, 2 * Math.PI) - Math.PI;
}
// Lag compensation functions
const compensation = () => {
    // Protected vars
    let t = 0,
        tt = 0,
        ts = 0;
    // Methods
    return {
        set: (
            time = global.player.time,
            interval = global.metrics.rendergap
        ) => {
            t = Math.max(getNow() - time - 80, -interval);
            if (t > 150 && t < 1000) {
                t = 150;
            }
            if (t > 1000) {
                t = (1000 * 1000 * Math.sin(t / 1000 - 1)) / t + 1000;
            }
            tt = t / interval;
            ts = (settings.roomSpeed * 30 * t) / 1000;
        },
        predict: (p1, p2, v1, v2) => {
            return t >= 0
                ? extrapolate(p1, p2, v1, v2, ts, tt)
                : interpolate(p1, p2, v1, v2, ts, tt);
        },
        predictFacing: (f1, f2) => {
            return f1 + (1 + tt) * angleDifference(f1, f2);
        },
        getPrediction: () => {
            return t;
        },
    };
};
// Make graphs
const timingGraph = graph(),
    lagGraph = graph(),
    gapGraph = graph();
// The skill bar dividers
let skas = [];
for (let i = 1; i <= 256; i++) { //if you want to have more skill levels than 255, then update this
    skas.push((i - 2) * 0.01 + Math.log(4 * (i / 9) + 1) / 1.6);
}
const ska = (x) => skas[x];
let scaleScreenRatio = (by, unset) => {
    global.screenWidth /= by;
    global.screenHeight /= by;
    ctx.scale(by, by);
    if (!unset) ratio *= by;
};
var getClassUpgradeKey = function (number) {
    switch (number) {
        case 0:
            return "Y";
        case 1:
            return "U";
        case 2:
            return "I";
        case 3:
            return "H";
        case 4:
            return "J";
        case 5:
            return "K";
        default:
            return null;
    }
};

let tiles,
    branches,
    tankTree,
    measureSize = (x, y, colorIndex, { index, tier = 0 }) => {
        tiles.push({ x, y, colorIndex, index });
        let { upgrades } = global.mockups[parseInt(index)],
            xStart = x,
            cumulativeWidth = 1,
            maxHeight = 1,
            hasUpgrades = [],
            noUpgrades = [];
        for (let i = 0; i < upgrades.length; i++) {
            let upgrade = upgrades[i];
            if (global.mockups[upgrade.index].upgrades.length) {
                hasUpgrades.push(upgrade);
            } else {
                noUpgrades.push(upgrade);
            }
        }
        for (let i = 0; i < hasUpgrades.length; i++) {
            let upgrade = hasUpgrades[i],
                spacing = 2 * Math.max(1, upgrade.tier - tier),
                measure = measureSize(x, y + spacing, upgrade.upgradeColor ?? i, upgrade);
            branches.push([{ x, y: y + Math.sign(i) }, { x, y: y + spacing + 1 }]);
            if (i === hasUpgrades.length - 1 && !noUpgrades.length) {
                branches.push([{ x: xStart, y: y + 1 }, { x, y: y + 1 }]);
            }
            x += measure.width;
            cumulativeWidth += measure.width;
            if (maxHeight < measure.height) maxHeight = measure.height;
        }
        y++;
        for (let i = 0; i < noUpgrades.length; i++) {
            let upgrade = noUpgrades[i],
                height = 2 + upgrades.length;
            measureSize(x, y + 1 + i + Math.sign(hasUpgrades.length) * 2, upgrade.upgradeColor ?? i, upgrade);
            if (i === noUpgrades.length - 1) {
                if (hasUpgrades.length > 1) cumulativeWidth++;
                branches.push([{ x: xStart, y }, { x, y }]);
                branches.push([{ x, y }, { x, y: y + noUpgrades.length + Math.sign(hasUpgrades.length) * 2 }]);
            }
            if (maxHeight < height) maxHeight = height;
        }
        return {
            width: cumulativeWidth,
            height: 2 + maxHeight,
        };
    };
function generateTankTree(indexes) {
    tiles = [];
    branches = [];
    tankTree = { width: 0, height: 0 };
    let rightmostSoFar = 0;
    if (!Array.isArray(indexes)) indexes = [indexes];
    for (let index of indexes) {
        rightmostSoFar += 3 + measureSize(rightmostSoFar, 0, 0, { index }).width;
    }
    for (let { x, y } of tiles) {
        tankTree.width = Math.max(tankTree.width, x);
        tankTree.height = Math.max(tankTree.height, y);
    }
}

function drawFloor(px, py, ratio) {
    // Clear the background + draw grid
    clearScreen(color.white, 1);
    clearScreen(color.guiblack, 0.1);

    //loop through the entire room setup
    let W = global.roomSetup[0].length,
        H = global.roomSetup.length;
    for (let i = 0; i < H; i++) {

        //skip if this row is not visible
        let top = Math.max(0, (ratio * i * global.gameHeight) / H - py + global.screenHeight / 2),
            bottom = Math.min(global.screenHeight, (ratio * (i + 1) * global.gameHeight) / H - py + global.screenHeight / 2);
        if (top > global.screenHeight || bottom < 0) continue;

        //loop through tiles in this row
        let row = global.roomSetup[i];
        for (let j = 0; j < W; j++) {

            //skip if tile not visible
            let left = Math.max(0, (ratio * j * global.gameWidth) / W - px + global.screenWidth / 2),
                right = Math.min(global.screenWidth, (ratio * (j + 1) * global.gameWidth) / W - px + global.screenWidth / 2);
            if (left > global.screenWidth || right < 0) continue;

            //draw it
            let tile = row[j];
            ctx.globalAlpha = 1;
            ctx.fillStyle = settings.graphical.screenshotMode ? color.guiwhite : color.white;
            ctx.fillRect(left, top, right - left, bottom - top);
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = settings.graphical.screenshotMode ? color.guiwhite : gameDraw.modifyColor(tile);
            ctx.fillRect(left, top, right - left, bottom - top);
            if (settings.graphical.quality == "cod") {
              ctx.drawImage(callofduty, left, top, right - left, bottom  - top);
            }
        }
    }
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = settings.graphical.screenshotMode ? color.guiwhite : color.guiblack;
    ctx.globalAlpha = 0.04;
    ctx.beginPath();
    let gridsize = 30 * ratio;
    for (let x = (global.screenWidth / 2 - px) % gridsize; x < global.screenWidth; x += gridsize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, global.screenHeight);
    }
    for (let y = (global.screenHeight / 2 - py) % gridsize; y < global.screenHeight; y += gridsize) {
        ctx.moveTo(0, y);
        ctx.lineTo(global.screenWidth, y);
    }
    ctx.stroke();
    ctx.globalAlpha = 1;
}

function drawEntities(px, py, ratio) {
    // Draw things
    for (let instance of global.entities) {
        if (!instance.render.draws) {
            continue;
        }
        let motion = compensation();
        if (instance.render.status.getFade() === 1) {
            motion.set();
        } else {
            motion.set(instance.render.lastRender, instance.render.interval);
        }
        instance.render.x = util.lerp(instance.render.x, Math.round(instance.x + instance.vx), 0.1, true);
        instance.render.y = util.lerp(instance.render.y, Math.round(instance.y + instance.vy), 0.1, true);
        instance.render.f = instance.id === gui.playerid && !global.autoSpin && !instance.twiggle && !global.died ? Math.atan2(global.target.y * global.reverseTank, global.target.x * global.reverseTank) : util.lerpAngle(instance.render.f, instance.facing, 0.15, true);
        let x = ratio * instance.render.x - px,
            y = ratio * instance.render.y - py,
            baseColor = instance.color;
        
        if (instance.id === gui.playerid) {
            x = settings.graphical.centerTank && !global.player.isScoping ? 0 : x;
            y = settings.graphical.centerTank && !global.player.isScoping ? 0 : y;
            global.player.screenx = x;
            global.player.screeny = y;
        }
        x += global.screenWidth / 2;
        y += global.screenHeight / 2;
        drawEntity(baseColor, x, y, instance, ratio, instance.id === gui.playerid || global.showInvisible ? instance.alpha ? instance.alpha * 0.75 + 0.25 : 0.25 : instance.alpha, 1, 1, instance.render.f);
    }

    //dont draw healthbars and chat messages in screenshot mode
    if (settings.graphical.screenshotMode) return;

    //draw health bars above entities
    for (let instance of global.entities) {
        let x = instance.id === gui.playerid ? global.player.screenx : ratio * instance.render.x - px,
            y = instance.id === gui.playerid ? global.player.screeny : ratio * instance.render.y - py;
        x += global.screenWidth / 2;
        y += global.screenHeight / 2;
        drawHealth(x, y, instance, ratio, instance.alpha);
    }

    let now = Date.now(),
        ratioForChat = (1 + ratio) / 2;
    for (let instance of global.entities) {
        //put chat msg above name
        let size = instance.size * ratio,
            indexes = instance.index.split("-"),
            m = global.mockups[parseInt(indexes[0])],
            realSize = (size / m.size) * m.realSize,
            x = instance.id === gui.playerid ? 0 : ratio * instance.render.x - px,
            y = instance.id === gui.playerid ? 0 : ratio * instance.render.y - py;
        x += global.screenWidth / 2;
        y += global.screenHeight / 2 - realSize - 46 * ratio;
        if (instance.id !== gui.playerid && instance.nameplate) y -= 8 * ratio;

        //draw all the msgs
        for (let i in global.chats[instance.id]) {
            let chat = global.chats[instance.id][i],
                text = chat.text,
                msgLengthHalf = measureText(text, 15 * ratioForChat) / 2,
                alpha = Math.max(0, Math.min(1000, chat.expires - now) / 1000);
            ctx.globalAlpha = 0.5 * alpha;
            if (settings.game.optNoEmojis) {
              if (text.includes("--troll")) {
                trollface.addEventListener("load", () => {
                  global.emojiloaded = true;
                }); 
                trollface.src = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png"; // Set source path
                msgLengthHalf = (measureText(text, 15 * ratioForChat) / 2) - 23;
              }
            };
            drawBar(x - msgLengthHalf, x + msgLengthHalf, y, 30 * ratioForChat, gameDraw.modifyColor(instance.color));
            ctx.globalAlpha = alpha;
            settings.graphical.fontStrokeRatio *= 1.2;
            if (settings.game.optNoEmojis) {
              if (global.emojiloaded && text.includes("--troll")) {
                let wheretrollfaceis = (ratioForChat) - msgLengthHalf;
                text = text.replace("--troll", "");
                ctx.drawImage(trollface, x - wheretrollfaceis, y + -1 * ratioForChat, 18 * ratioForChat, 18 * ratioForChat);
              }
            }
            drawText(text, x, y + 7 * ratioForChat, 15 * ratioForChat, color.guiwhite, "center");
            settings.graphical.fontStrokeRatio /= 1.2;
            y -= 35 * ratioForChat;
        }
    }
}

global.showTree = false;
global.scrollX = global.scrollY = global.fixedScrollX = global.fixedScrollY = -1;
global.scrollVelocityY = global.scrollVelocityX = 0;
let lastGuiType = null;
function drawUpgradeTree(spacing, alcoveSize) {
    if (global.died) {
        global.showTree = false;
        global.scrollX = global.scrollY = global.fixedScrollX = global.fixedScrollY = global.scrollVelocityY = global.scrollVelocityX = 0;
        global.treeScale = 1;
        return;
    }

    if (lastGuiType != gui.type) {
        let m = util.getEntityImageFromMockup(gui.type), // The mockup that corresponds to the player's tank
            rootName = m.rerootUpgradeTree, // The upgrade tree root of the player's tank
            rootIndex = [];
            for (let name of rootName) {
                let ind = name == undefined ? -1 : global.mockups.find(i => i.className == name).index;
                rootIndex.push(ind); // The index of the mockup that corresponds to the root tank (-1 for no root)
            }
        if (!rootIndex.includes(-1)) {
            generateTankTree(rootIndex);
        }
        lastGuiType = gui.type;
    }

    if (!tankTree) {
        console.log('No tank tree rendered yet.');
        return;
    }

    let tileSize = alcoveSize / 2,
        size = tileSize - 4, // TODO: figure out where this 4 comes from
        spaceBetween = 10,
        screenDivisor = (spaceBetween + tileSize) * 2 * global.treeScale,
        padding = tileSize / screenDivisor,
        dividedWidth = global.screenWidth / screenDivisor,
        dividedHeight = global.screenHeight / screenDivisor,
        treeFactor = 1 + spaceBetween / tileSize;

    global.fixedScrollX = Math.max(
        dividedWidth - padding,
        Math.min(
            tankTree.width * treeFactor + padding - dividedWidth,
            global.fixedScrollX + global.scrollVelocityX
        )
    );
    global.fixedScrollY = Math.max(
        dividedHeight - padding,
        Math.min(
            tankTree.height * treeFactor + padding - dividedHeight,
            global.fixedScrollY + global.scrollVelocityY
        )
    );
    global.scrollX = util.lerp(global.scrollX, global.fixedScrollX, 0.1);
    global.scrollY = util.lerp(global.scrollY, global.fixedScrollY, 0.1);

    for (let [start, end] of branches) {
        let sx = ((start.x - global.scrollX) * (tileSize + spaceBetween) + 1 + 0.5 * size) * global.treeScale + global.screenWidth / 2,
            sy = ((start.y - global.scrollY) * (tileSize + spaceBetween) + 1 + 0.5 * size) * global.treeScale + global.screenHeight / 2,
            ex = ((end.x - global.scrollX) * (tileSize + spaceBetween) + 1 + 0.5 * size) * global.treeScale + global.screenWidth / 2,
            ey = ((end.y - global.scrollY) * (tileSize + spaceBetween) + 1 + 0.5 * size) * global.treeScale + global.screenHeight / 2;
        if (ex < 0 || sx > global.screenWidth || ey < 0 || sy > global.screenHeight) continue;
        ctx.strokeStyle = color.black;
        ctx.lineWidth = 2 * global.treeScale;
        drawGuiLine(sx, sy, ex, ey);
    }
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = color.guiwhite;
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    ctx.globalAlpha = 1;

    //draw the various tank icons
    let angle = -Math.PI / 4;
    for (let { x, y, colorIndex, index } of tiles) {
        let ax = (x - global.scrollX) * (tileSize + spaceBetween) * global.treeScale + global.screenWidth / 2,
            ay = (y - global.scrollY) * (tileSize + spaceBetween) * global.treeScale + global.screenHeight / 2;
        if (ax < -tileSize || ax > global.screenWidth + tileSize || ay < -tileSize || ay > global.screenHeight + tileSize) continue;
        drawEntityIcon(index.toString(), ax, ay, tileSize * global.treeScale, tileSize * global.treeScale, global.treeScale, angle, 1, colorIndex);
    }

    let text = "Arrow keys to navigate the class tree. Shift to navigate faster. Scroll wheel (or +/- keys) to zoom in/out.";
    let w = measureText(text, 18);
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    ctx.fillStyle = color.dgrey;
    ctx.strokeStyle = color.black;
    ctx.fillText(text, global.screenWidth / 2 - w / 2, innerHeight * 0.04);
    ctx.strokeText(text, global.screenWidth / 2 - w / 2, innerHeight * 0.04);
}

function drawMessages(spacing) {
    // Draw messages
    let vspacing = 4;
    let len = 0;
    let height = 18;
    let x = global.screenWidth / 2;
    let y = spacing;
    // Draw each message
    for (let i = global.messages.length - 1; i >= 0; i--) {
        let msg = global.messages[i],
            txt = msg.text,
            text = txt; //txt[0].toUpperCase() + txt.substring(1);
        // Give it a textobj if it doesn't have one
        if (msg.len == null) msg.len = measureText(text, height - 4);
        // Draw the background
        ctx.globalAlpha = 0.5 * msg.alpha;
        drawBar(x - msg.len / 2, x + msg.len / 2, y + height / 2, height, color.black);
        // Draw the text
        ctx.globalAlpha = Math.min(1, msg.alpha);
        drawText(text, x, y + height / 2, height - 4, color.guiwhite, "center", true);
        // Iterate and move
        y += vspacing + height;
        if (msg.status > 1) {
            y -= (vspacing + height) * (1 - Math.sqrt(msg.alpha));
        }
        if (msg.status > 1) {
            msg.status -= 0.05;
            msg.alpha += 0.05;
        } else if (
            i === 0 &&
            (global.messages.length > 5 || Date.now() - msg.time > 0)
        ) {
            msg.status -= 0.05;
            msg.alpha -= 0.05;
            // Remove
            if (msg.alpha <= 0) {
                global.messages.splice(0, 1);
            }
        }
    }
    ctx.globalAlpha = 1;
}

function drawSkillBars(spacing, alcoveSize) {
    // Draw skill bars
    statMenu.set(0 + (global.died || global.statHover || (global.canSkill && !gui.skills.every(skill => skill.cap === skill.amount))));
    global.clickables.stat.hide();
    let vspacing = 4;
    let height = 15;
    let gap = 40;
    let len = alcoveSize; // * global.screenWidth; // The 30 is for the value modifiers
    let save = len;
    let x = spacing + (statMenu.get() - 1) * (height + 50 + len * ska(gui.skills.reduce((largest, skill) => Math.max(largest, skill.cap), 0)));
    let y = global.screenHeight - spacing - height;
    let ticker = 11;
    let namedata = gui.getStatNames(global.mockups[parseInt(gui.type.split("-")[0])].statnames);
    let clickableRatio = canvas.height / global.screenHeight / global.ratio;
    for (let i = 0; i < gui.skills.length; i++) {
        ticker--;
        //information about the bar
        let skill = gui.skills[i],
            name = namedata[ticker - 1],
            level = skill.amount,
            col = color[skill.color],
            cap = skill.softcap,
            maxLevel = skill.cap;
        if (!cap) continue;
        len = save;
        let max = 0,
            extension = cap > max,
            blocking = cap < maxLevel;
        if (extension) {
            max = cap;
        }

        //bar fills
        drawBar(x + height / 2, x - height / 2 + len * ska(cap), y + height / 2, height - 3 + settings.graphical.barChunk, color.black);
        drawBar(x + height / 2, x + height / 2 + len * ska(cap) - gap, y + height / 2, height - 3, color.grey);
        drawBar(x + height / 2, x + height / 2 + len * ska(level) - gap, y + height / 2, height - 3.5, col);

        // Blocked-off area
        if (blocking) {
            ctx.lineWidth = 1;
            ctx.strokeStyle = color.grey;
            for (let j = cap + 1; j < max; j++) {
                drawGuiLine(x + len * ska(j) - gap, y + 1.5, x + len * ska(j) - gap, y - 3 + height);
            }
        }

        // Vertical dividers
        ctx.strokeStyle = color.black;
        ctx.lineWidth = 1;
        for (let j = 1; j < level + 1; j++) {
            drawGuiLine(x + len * ska(j) - gap, y + 1.5, x + len * ska(j) - gap, y - 3 + height);
        }

        // Skill name
        len = save * ska(max);
        let textcolor = level == maxLevel ? col : !gui.points || (cap !== maxLevel && level == cap) ? color.grey : color.guiwhite;
        drawText(name, Math.round(x + len / 2) + 0.5, y + height / 2, height - 5, textcolor, "center", true);

        // Skill key
        drawText("[" + (ticker % 10) + "]", Math.round(x + len - height * 0.25) - 1.5, y + height / 2, height - 5, textcolor, "right", true);
        if (textcolor === color.guiwhite) {
            // If it's active
            global.clickables.stat.place(ticker - 1, x * clickableRatio, y * clickableRatio, len * clickableRatio, height * clickableRatio);
        }

        // Skill value
        if (level) {
            drawText(textcolor === col ? "MAX" : "+" + level, Math.round(x + len + 4) + 0.5, y + height / 2, height - 5, col, "left", true);
        }

        // Move on
        y -= height + vspacing;
    }
    global.clickables.hover.place(0, 0, y * clickableRatio, 0.8 * len * clickableRatio, (global.screenHeight - y) * clickableRatio);
    if (gui.points !== 0) {
        // Draw skillpoints to spend
        drawText("x" + gui.points, Math.round(x + len - 2) + 0.5, Math.round(y + height - 4) + 0.5, 20, color.guiwhite, "right");
    }
}

function drawSelfInfo(spacing, alcoveSize, max) {
    //rendering information
    let vspacing = 4.5;
    let len = 1.75 * alcoveSize; // * global.screenWidth;
    let height = 23;
    let x = (global.screenWidth - len) / 2;
    let y = global.screenHeight - spacing - height - 1;
    ctx.lineWidth = 1;

    // Draw the exp bar
    //ctx.fillStyle = color.black;
    //drawGuiRect(x - 13, y - 3, len + 26, (height + 1) + settings.graphical.barChunk);
    //ctx.fillStyle = color.grey;
    //drawGuiRect(x - 10, y, len + 20, height - settings.graphical.barChunk / 4);
    //ctx.fillStyle = color.blue;
    //drawGuiRect(x - 10, y, (len + 20) * gui.__s.getProgress(), height - settings.graphical.barChunk / 4);
    drawBar(x, x + len, y + height / 2, height + settings.graphical.barChunk, color.black);
    drawBar(x, x + len, y + height / 2, height - settings.graphical.barChunk / 4, color.grey);
    drawBar(x, x + len * gui.__s.getProgress(), y + height / 2, height - 2, color.blue);

    // Draw the class type
    drawText("Level " + gui.__s.getLevel() + " " + gui.class, x + len / 2, y + height / 2 + 1, height - 2.5, color.guiwhite, "center", true);
    height = 16;
    y -= height + vspacing;
  
    if (gui.class === "Winsor") {
      PlaySound169();
    }

    document.onkeydown = (e) => {
      var key = e.which || e.keyCode;
      if (gui.class === "Trapper_guy" & key === global.KEY_SHIFT) {
      PlaySoundtrap();
        } else {
                if (gui.class === "Waduh" & key === global.KEY_SHIFT) {
      PlaySoundwater();
        } else {
                if (gui.class === "Waduh" & key === global.KEY_CHOOSE_5) {
      PlaySoundwatuh();
                } else {
                if (gui.class === "Pissliner" & key === global.KEY_SHIFT) {
      PlaySoundpiss();
                } else {
                if (gui.class === "Pissliner" & key === global.KEY_SPLIT) {
      PlaySoundpew();
                    } else {
                if (gui.class === "Delta Congregation" & key === global.KEY_SPLIT) {
      PlaySoundchipi();
                    } else {
                if (gui.class === "Delta" & key === global.KEY_CHOOSE_5) {
      PlaySoundneko();
                    } else {
                if (gui.class === "Delta" & key === global.KEY_CHOOSE_4) {
      PlaySoundbwomp();
                    } else {
                if (gui.class === "Delta" & key === global.KEY_CHOOSE_3) {
      PlaySoundnfl(); 
                    }
                    }
                    }
                    }
                    }
                }
                }
            }
        }
    }
    // Draw the %-of-leader bar
    drawBar(x + len * 0.1, x + len * 0.9, y + height / 2, height - 3 + settings.graphical.barChunk, color.black);
    drawBar(x + len * 0.1, x + len * 0.9, y + height / 2, height - 3 - settings.graphical.barChunk / 4, color.grey);
    drawBar(x + len * 0.1, x + len * (0.1 + 0.8 * (max ? Math.min(1, gui.__s.getScore() / max) : 1)), y + height / 2, height - 3 - settings.graphical.barChunk / 4, color.teal);

    //write the score and name
    drawText("Score: " + util.formatLargeNumber(Math.floor(gui.__s.getScore())), x + len / 2, y + height / 2 + 1, height - 3.5, color.guiwhite, "center", true);
    ctx.lineWidth = 4;
    drawText(global.player.name, Math.round(x + len / 2) + 0.5, Math.round(y - 10 - vspacing) + 0.5, 32, global.nameColor, "center");
}

function drawMinimapAndDebug(spacing, alcoveSize) {
    // Draw minimap and FPS monitors
    //minimap stuff starts here
    let len = alcoveSize; // * global.screenWidth;
    let height = (len / global.gameWidth) * global.gameHeight;
    if (global.gameHeight > global.gameWidth || global.gameHeight < global.gameWidth) {
        let ratio = [
            global.gameWidth / global.gameHeight,
            global.gameHeight / global.gameWidth,
        ];
        len /= ratio[1] * 1.5;
        height /= ratio[1] * 1.5;
        if (len > alcoveSize * 2) {
            ratio = len / (alcoveSize * 2);
        } else if (height > alcoveSize * 2) {
            ratio = height / (alcoveSize * 2);
        } else {
            ratio = 1;
        }
        len /= ratio;
        height /= ratio;
    }
    let x = global.screenWidth - spacing - len;
    let y = global.screenHeight - height - spacing;
    ctx.globalAlpha = 0.4;
    let W = global.roomSetup[0].length,
        H = global.roomSetup.length,
        i = 0;
    for (let ycell = 0; ycell < H; ycell++) {
        let row = global.roomSetup[ycell];
        let j = 0;
        for (let xcell = 0; xcell < W; xcell++) {
            let cell = global.roomSetup[ycell][xcell];
            ctx.fillStyle = gameDraw.modifyColor(cell);
            if (gameDraw.modifyColor(cell) !== color.white) {
                drawGuiRect(x + (j * len) / W, y + (i * height) / H, len / W, height / H);
            }
            j++;
        }
        i++;
    }
    ctx.fillStyle = color.white;
    drawGuiRect(x, y, len, height);
    ctx.globalAlpha = 1;
    ctx.lineWidth = 3;
    ctx.fillStyle = color.black;
    for (let entity of minimap.get()) {
        ctx.fillStyle = gameDraw.mixColors(gameDraw.modifyColor(entity.color), color.black, 0.3);
        ctx.globalAlpha = entity.alpha;
        switch (entity.type) {
            case 2:
                drawGuiRect(x + ((entity.x - entity.size) / global.gameWidth) * len - 0.4, y + ((entity.y - entity.size) / global.gameHeight) * height - 1, ((2 * entity.size) / global.gameWidth) * len + 0.2, ((2 * entity.size) / global.gameWidth) * len + 0.2);
                break;
            case 1:
                drawGuiCircle(x + (entity.x / global.gameWidth) * len, y + (entity.y / global.gameHeight) * height, (entity.size / global.gameWidth) * len + 0.2);
                break;
            case 0:
                if (entity.id !== gui.playerid) drawGuiCircle(x + (entity.x / global.gameWidth) * len, y + (entity.y / global.gameHeight) * height, 2);
                break;
        }
    }
    ctx.globalAlpha = 1;
    ctx.lineWidth = 3;
    ctx.fillStyle = color.black;
    if (settings.game.optOgIcon) {
    drawGuiRect(x, y, len, height, 1); // Border    ctx.lineWidth = 1;
    } else {
    drawGuiRect(x, y, len, height, true); // Border    ctx.lineWidth = 1;
    }
    ctx.strokeStyle = color.black;
    ctx.fillStyle = color.black;
    drawGuiCircle(x + (global.player.cx / global.gameWidth) * len - 1, y + (global.player.cy / global.gameHeight) * height - 1, 2, false);
    if (global.showDebug) {
        drawGuiRect(x, y - 40, len, 30);
        lagGraph(lag.get(), x, y - 40, len, 30, color.teal);
        gapGraph(global.metrics.rendergap, x, y - 40, len, 30, color.pink);
        //timingGraph(GRAPHDATA, x, y - 40, len, 30, color.yellow);
    }
    //minimap stuff ends here
    //debug stuff
    if (!global.showDebug) y += 14 * 3;
    // Text
    if (global.showDebug) {
        drawText("Nero Engine v3.1", x + len, y - 50 - 7 * 14 - 2, 15, "#6a36e3", "right");
        //drawText("Prediction: " + Math.round(GRAPHDATA) + "ms", x + len, y - 50 - 4 * 14, 10, color.guiwhite, "right");
        drawText("Update Version: " + "v3.108", x + len, y - 50 - 6 * 14, 10, color.guiwhite, "right");
        drawText("Update Rate: " + global.metrics.updatetime + "Hz", x + len, y - 50 - 5 * 14, 10, color.guiwhite, "right");
        drawText("Client Speed: " + global.metrics.rendertime + " FPS", x + len, y - 50 - 4 * 14, 10, global.metrics.rendertime > 10 ? color.guiwhite : color.orange, "right");
        drawText("Server Speed: " + ((global.metrics.updatetime * global.metrics.rendergap-global.metrics.lag) / 10).toFixed(2) + "%", x + len, y - 50 - 3 * 14, 10, color.guiwhite, "right");
        drawText("Kills: " + global.metrics.killcount, x + len, y - 50 - 2 * 14, 10, color.guiwhite, "right");
        drawText("Song: " + global.music2.songname, x + len, y - 50 - 1 * 14, 10, color.guiwhite, "right");
        drawText(global.metrics.latency + " ms - neroio2 :FFA:", x + len, y - 50, 10, color.guiwhite, "right");
    } else {
        drawText("Nero.io v3.1", x + len, y - 50 - 2 * 14 - 2, 15, "#2eabe6", "right");
        drawText((100 * gui.fps).toFixed(2) + "% : " + global.metrics.rendertime + " FPS", x + len, y - 50 - 1 * 14, 10, global.metrics.rendertime > 10 ? color.guiwhite : color.orange, "right");
        drawText(global.metrics.latency + " ms : " + global.metrics.updatetime + "Hz", x + len, y - 50, 10, color.guiwhite, "right");
    }
    global.fps = global.metrics.rendertime;
}

function drawLeaderboard(spacing, alcoveSize, max) {
    // Draw leaderboard
    let lb = leaderboard.get();
    let vspacing = 4;
    let len = alcoveSize; // * global.screenWidth;
    let height = 14;
    let x = global.screenWidth - len - spacing;
    let y = spacing + height + 7;
    drawText("Leaderboard", Math.round(x + len / 2) + 0.5, Math.round(y - 6) + 0.5, height + 3.5, color.guiwhite, "center");
    y += 7;
    for (let i = 0; i < lb.data.length; i++) {
        let entry = lb.data[i];
        drawBar(x, x + len, y + height / 2, height - 3 + settings.graphical.barChunk, color.black);
        drawBar(x, x + len, y + height / 2, height - 3, color.grey);
        let shift = Math.min(1, entry.score / max);
        drawBar(x, x + len * shift, y + height / 2, height - 3.5, gameDraw.modifyColor(entry.barColor));
        // Leadboard name + score
        let nameColor = entry.nameColor || "#FFFFFF";
        drawText(entry.label + (": " + util.handleLargeNumber(Math.round(entry.score))), x + len / 2, y + height / 2, height - 5, nameColor, "center", true);
        // Mini-image
        let scale = height / entry.position.axis,
            xx = x - 1.5 * height - scale * entry.position.middle.x * Math.SQRT1_2,
            yy = y + 0.5 * height - scale * entry.position.middle.y * Math.SQRT1_2,
            baseColor = entry.color;
        drawEntity(baseColor, xx, yy, entry.image, 1 / scale, 1, (scale * scale) / entry.image.size, 1, -Math.PI / 4, true);
        // Move down
        y += vspacing + height;
    }
}
function drawAvailableUpgrades(spacing, alcoveSize) {
    // Draw upgrade menu
    if (gui.upgrades.length > 0) {
        let internalSpacing = 15;
        let len = alcoveSize / 2;
        let height = len;
      
        // Animation processing
//      let columnCount = Math.max(Math.ceil(gui.upgrades.length / 5), 3);
        let columnCount = Math.max(3, Math.ceil(gui.upgrades.length / 3));
        upgradeMenu.set(0);
        if (!global.canUpgrade) {
            upgradeMenu.force(-columnCount * 3)
            global.canUpgrade = true;
        }
        let glide = upgradeMenu.get();

        let x = glide * 2 * spacing + spacing;
        let y = spacing - height - 2.5 * internalSpacing;
        let xStart = x;
        let initialX = x;
        let rowWidth = 0;
        let initialY = y;
        let ticker = 0;
        let upgradeNum = 0;
        let colorIndex = 0;
        let clickableRatio = global.canvas.height / global.screenHeight / global.ratio;
        let lastBranch = -1;
        let upgradeHoverIndex = global.clickables.upgrade.check({x: global.mouse.x, y: global.mouse.y});
        upgradeSpin += 0.01;
      
        for (let i = 0; i < gui.upgrades.length; i++) {
            let upgrade = gui.upgrades[i];
            let upgradeBranch = upgrade[0];
            let upgradeBranchLabel = upgrade[1] == "undefined" ? "" : upgrade[1];
            let model = upgrade[2];

            // Draw either in the next row or next column
            if (ticker === columnCount || upgradeBranch != lastBranch) {
                x = xStart;
                y += height + internalSpacing;
                if (upgradeBranch != lastBranch) {
                    if (upgradeBranchLabel.length > 0) {
                        drawText(" " + upgradeBranchLabel, xStart, y + internalSpacing * 2, internalSpacing * 2.3, color.guiwhite, "left", false);
                        y += 1.5 * internalSpacing;
                    }
                    y += 1.5 * internalSpacing;
                    colorIndex = 0;
                }
                lastBranch = upgradeBranch;
                ticker = 0;
            } else {
                x += len + internalSpacing;
            }

            if (y > initialY) initialY = y;
            rowWidth = x;
          
//          global.clickables.upgrade.place(i, y * clickableRatio, x * clickableRatio, len * clickableRatio, height * clickableRatio);
            global.clickables.upgrade.place(i, x * clickableRatio, y * clickableRatio, len * clickableRatio, height * clickableRatio);  
          let upgradeKey = getClassUpgradeKey(upgradeNum);
          
//          drawEntityIcon(model, y, x, len, height, 1, upgradeSpin, 0.5, colorIndex++, upgradeKey);
            drawEntityIcon(model, x, y, len, height, 1, upgradeSpin, 0.6, colorIndex++, upgradeKey, upgradeNum == upgradeHoverIndex);

            ticker++;
            upgradeNum++;
        }

        // Draw dont upgrade button
        let h = 16,
            textScale = h - 6,
            msg = "Don't Upgrade",
            m = measureText(msg, textScale) + 10;
        let buttonX = initialX + (rowWidth + len - initialX) / 2,
            buttonY = initialY + height + internalSpacing;
        drawBar(buttonX - m / 2, buttonX + m / 2, buttonY + h / 2, h + settings.graphical.barChunk, color.black);
        drawBar(buttonX - m / 2, buttonX + m / 2, buttonY + h / 2, h, color.white);
        drawText(msg, buttonX, buttonY + h / 2, textScale, color.guiwhite, "center", true);
        global.clickables.skipUpgrades.place(0, (buttonX - m / 2) * clickableRatio, buttonY * clickableRatio, m * clickableRatio, h * clickableRatio);

        // Upgrade tooltip
        if (upgradeHoverIndex > -1 && upgradeHoverIndex < gui.upgrades.length) {
            let picture = gui.upgrades[upgradeHoverIndex][2];
            if (picture.upgradeTooltip.length > 0) {
                let boxWidth = measureText(picture.name, alcoveSize / 10),
                    boxX = global.mouse.x * global.screenWidth / window.canvas.width + 2,
                    boxY = global.mouse.y * global.screenHeight / window.canvas.height + 2,
                    boxPadding = 6,
                    splitTooltip = picture.upgradeTooltip.split("\n"),
                    textY = boxY + boxPadding + alcoveSize / 10;
                
                // Tooltip box width
                for (let line of splitTooltip) boxWidth = Math.max(boxWidth, measureText(line, alcoveSize / 15));

                // Draw tooltip box
                gameDraw.setColor(ctx, color.dgrey);
                ctx.lineWidth /= 1.5;
                drawGuiRect(boxX, boxY, boxWidth + boxPadding * 3, alcoveSize * (splitTooltip.length + 1) / 10 + boxPadding * 3, false);
                drawGuiRect(boxX, boxY, boxWidth + boxPadding * 3, alcoveSize * (splitTooltip.length + 1) / 10 + boxPadding * 3, true);
                ctx.lineWidth *= 1.5;
                drawText(picture.name, boxX + boxPadding * 1.5, textY, alcoveSize / 10, color.guiwhite);
                for (let t of splitTooltip) {
                    textY += boxPadding + alcoveSize / 15
                    drawText(t, boxX + boxPadding * 1.5, textY, alcoveSize / 15, color.guiwhite);
                }
            }
        }
    } else {
        global.canUpgrade = false;
        upgradeMenu.force(0);
        global.clickables.upgrade.hide();
        global.clickables.skipUpgrades.hide();
    }
}

const gameDrawAlive = (ratio, drawRatio) => {
    let GRAPHDATA = 0;
    // Prep stuff
    renderTimes++;
    // Move the camera
    let motion = compensation();
    motion.set();
    let smear = { x: 0, y: 0 };
    GRAPHDATA = motion.getPrediction();
    // Don't move the camera if you're dead. This helps with jitter issues
    global.player.renderx = util.lerp(global.player.renderx, global.player.cx, 0.1, true);
    global.player.rendery = util.lerp(global.player.rendery, global.player.cy, 0.1, true);
    let px = ratio * global.player.renderx,
        py = ratio * global.player.rendery;

    // Get the player's target
    calculateTarget();

    //draw the in game stuff
    drawFloor(px, py, ratio);
    drawEntities(px, py, ratio);
    ratio = util.getScreenRatio();
    scaleScreenRatio(ratio, true);

    //draw hud
    let alcoveSize = 200 / ratio; // drawRatio * global.screenWidth;
    let spacing = 20;
    gui.__s.update();
    let lb = leaderboard.get();
    let max = lb.max;
    global.canSkill = !!gui.points && !global.showTree;
    if (global.showTree) {
        drawUpgradeTree(spacing, alcoveSize);
    } else {
        drawMessages(spacing);
        drawSkillBars(spacing, alcoveSize);
        drawSelfInfo(spacing, alcoveSize, max);
        drawMinimapAndDebug(spacing, alcoveSize);
        drawLeaderboard(spacing, alcoveSize, max, lb);
        drawAvailableUpgrades(spacing, alcoveSize);
    }
    global.metrics.lastrender = getNow();
};
let getKills = () => {
    let finalKills = {
        " kills": [Math.round(global.finalKills[0].get()), 1],
        " assists": [Math.round(global.finalKills[1].get()), 0.5],
        " visitors defeated": [Math.round(global.finalKills[2].get()), 3],
        " polygons destroyed": [Math.round(global.finalKills[3].get()), 0.05],
    }, killCountTexts = [];
    let destruction = 0;
    for (let key in finalKills) {
        if (finalKills[key][0]) {
            destruction += finalKills[key][0] * finalKills[key][1];
            killCountTexts.push(finalKills[key][0] + key);
        }
    }
    return (
        (destruction === 0 ? "🌼"
        : destruction < 4 ? "🎯"
        : destruction < 8 ? "💥"
        : destruction < 15 ? "💢"
        : destruction < 25 ? "🔥"
        : destruction < 50 ? "💣"
        : destruction < 75 ? "👺"
        : destruction < 100 ? "🌶️" : "💯"
        ) + " " + (!killCountTexts.length ? "A true pacifist" :
                    killCountTexts.length == 1 ? killCountTexts.join(" and ") :
                    killCountTexts.slice(0, -1).join(", ") + " and " + killCountTexts[killCountTexts.length - 1])
    );
};
let getDeath = () => {
    let txt = "";
    if (global.finalKillers.length) {
        txt = "🔪 Succumbed to";
        for (let e of global.finalKillers) {
            txt += " " + util.addArticle(util.getEntityImageFromMockup(e).name) + " and";
        }
        txt = txt.slice(0, -4);
    } else {
        txt += "🤷 Well that was kinda dumb huh";
    }
    return txt;
};
const gameDrawDead = () => {
    clearScreen(color.black, 0.25);
    let ratio = util.getScreenRatio();
    scaleScreenRatio(ratio, true);
    let shift = animations.deathScreen.get();
    ctx.translate(0, -shift * global.screenHeight);
    let x = global.screenWidth / 2,
        y = global.screenHeight / 2 - 50;
    let len = 140,
        position = global.mockups[parseInt(gui.type.split("-")[0])].position,
        scale = len / position.axis,
        xx = global.screenWidth / 2 - scale * position.middle.x * 0.707,
        yy = global.screenHeight / 2 - 35 + scale * position.middle.y * 0.707,
        picture = util.getEntityImageFromMockup(gui.type, gui.color),
        baseColor = picture.color;
    drawEntity(baseColor, (xx - 190 - len / 2 + 0.5) | 0, (yy - 10 + 0.5) | 0, picture, 1.5, 1, (0.5 * scale) / picture.realSize, 1, -Math.PI / 4, true);
    drawText("You died!", x, y - 80, 16, color.guiwhite, "center");
    drawText("Level " + gui.__s.getLevel() + " " + picture.name, x - 170, y - 30, 24, color.guiwhite);
    drawText("Final score: " + util.formatLargeNumber(Math.round(global.finalScore.get())), x - 170, y + 25, 50, color.guiwhite);
    drawText("⌚ Survived for " + util.timeForHumans(Math.round(global.finalLifetime.get())), x - 170, y + 55, 16, color.guiwhite);
    drawText(getKills(), x - 170, y + 77, 16, color.guiwhite);
    drawText(getDeath(), x - 170, y + 99, 16, color.guiwhite);
    drawText("(press enter to respawn)", x, y + 125, 16, color.guiwhite, "center");
    ctx.translate(0, shift * global.screenHeight);
};
const gameDrawWiki = () => {
    clearScreen(color.black, 0.5);
    let ratio = util.getScreenRatio();
    scaleScreenRatio(ratio, true);
    let shift = animations.deathScreen.get();
    ctx.translate(0, -shift * global.screenHeight);
    let x = global.screenWidth / 2 - 215,
        y = global.screenHeight / 2 - 50;
    let len = 140,
        position = global.mockups[parseInt(gui.type.split("-")[0])].position,
        scale = len / position.axis,
        xx = global.screenWidth / 2 - scale * position.middle.x * 0.707 - 215,
        yy = global.screenHeight / 2 - 35 + scale * position.middle.y * 0.707,
        picture = util.getEntityImageFromMockup(global.wikidisplaytank.toString(), color.blue),
        baseColor = picture.color;
        if (eval(`tankdescs.${picture.className}`) !== undefined) {
        tanktype = eval(`tankdescs.${picture.className}.type`);
        tankdesc = eval(`tankdescs.${picture.className}.desc`);
        tanktier = eval(`tankdescs.${picture.className}.tier`);
        tankweap = eval(`tankdescs.${picture.className}.weapons`);
        tankabil = eval(`tankdescs.${picture.className}.abilities`);
        tankweak = eval(`tankdescs.${picture.className}.weak`);
        tankupto = eval(`tankdescs.${picture.className}.upgradesto`);
        tankupfr = eval(`tankdescs.${picture.className}.upgradesfrom`);
        tankorgn = eval(`tankdescs.${picture.className}.origin`);
        tankupad = eval(`tankdescs.${picture.className}.updateadded`);
        } else {
        tanktype = "???";
        tankdesc = "???";
        tanktier = "???";
        tankweap = "???";
        tankabil = "???";
        tankweak = "???";
        tankupto = ["Tier 2: ???", "Tier 3: ???", "Tier 4: ???", "Misc: ???"];
        tankupad = "???";
        tankupfr = "???";
        tankorgn = "???";
        };
    drawEntity(baseColor, (xx - 190 - len / 2 + 0.5) | 0, (yy - 10 + 0.5) | 0, picture, 1.5, 1, (0.6 * scale) / picture.realSize, 1, -Math.PI / 4, true);
    drawText(picture.name, (xx - 190 - len / 2 + 0.5) | 0, (yy + 78.5 + 0.5) | 0, 18, color.guiwhite, "center");
    drawText("Class." + picture.className, (xx - 190 - len / 2 + 0.5) | 0, (yy - 80 + 0.5) | 0, 14, color.guiwhite, "center");
    drawText(global.wikidisplaytank.toString(), (xx - 190 - len / 2 + 0.5) | 0, (yy - 100 + 0.5) | 0, 16, color.guiwhite, "center");
    drawText("Description:", x - 185, y - 70, 17, color.guiwhite, "left");
    ctx.mlStrokeText(tankdesc, x - 185, y - 70, 215, 200, 'top', 'left', 20, 14);
    drawText("Do yall think this will work?", x + 100, y + 130, 16, color.guiwhite, "center");
    drawText("[Esc] Exit Entity Debugger", 10, global.screenHeight - 56, 12, color.guiwhite, "left");
    drawText("[Enter] Search Entity ID", 10, global.screenHeight - 33, 12, color.guiwhite, "left");
    drawText("[A] Cycle Left || [D] Cycle Right", 10, global.screenHeight - 10, 12, color.guiwhite, "left");
    drawGuiLine(x + 40, y - 90, x + 40, (yy + 58 + 0.5));
    drawText("Tier: " + tanktier, x + 60, y - 75, 14, color.guiwhite, "left");
    drawText("Weapons: " + tankweap, x + 60, y - 52, 14, color.guiwhite, "left");
    drawText("Abilities: " + tankabil, x + 60, y - 29, 14, color.guiwhite, "left");
    drawText("Upgrades From: " + tankupfr, x + 60, y - 6, 14, color.guiwhite, "left");
    drawText("Weak To: " + tankweak, x + 60, y + 17, 14, color.guiwhite, "left");
    drawText("Type: " + tanktype, x + 60, y + 40, 14, color.guiwhite, "left");
    drawText("Update: " + tankupad, x + 60, y + 63, 14, color.guiwhite, "left");
    drawText("Origin: " + tankorgn, x + 60, y + 86, 14, color.guiwhite, "left");
    drawGuiLine(x + 300, y - 90, x + 300, (yy + 58 + 0.5));
    drawText("Upgrades To: ", x + 320, y - 75, 14, color.guiwhite, "left");
    ctx.mlStrokeText(tankupto[0] + " \n " + tankupto[1] + " \n " + tankupto[2] + " \n " + tankupto[3], x + 320, y - 75, 350, 200, 'top', 'left', 16, 11);
    ctx.translate(0, shift * global.screenHeight);
};
const gameDrawBeforeStart = () => {
    let ratio = util.getScreenRatio();
    scaleScreenRatio(ratio, true);
    clearScreen(color.white, 1);
    let shift = animations.connecting.get();
    ctx.translate(0, -shift * global.screenHeight);
    drawText("Connecting...", global.screenWidth / 2, global.screenHeight / 2, 30, color.guiwhite, "center");
    drawText(global.message, global.screenWidth / 2, global.screenHeight / 2 + 30, 15, color.blue, "center");
    ctx.translate(0, shift * global.screenHeight);
};
const gameDrawDisconnected = () => {
    util.submitAchievementToLocalStorage("disconnectachievement");
    let ratio = util.getScreenRatio();
    scaleScreenRatio(ratio, true);
    clearScreen(gameDraw.mixColors(color.red, color.guiblack, 0.3), 0.25);
    let shift = animations.disconnected.get();
    ctx.translate(0, -shift * global.screenHeight);
    drawText("Disconnected", global.screenWidth / 2, global.screenHeight / 2, 30, color.guiwhite, "center");
    drawText(global.message, global.screenWidth / 2, global.screenHeight / 2 + 30, 15, color.orange, "center");
    ctx.translate(0, shift * global.screenHeight);
};
const gameDrawError = () => {
    util.submitAchievementToLocalStorage("disconnectachievement");
    let ratio = util.getScreenRatio();
    scaleScreenRatio(ratio, true);
    clearScreen(gameDraw.mixColors(color.red, color.guiblack, 0.2), 0.35);
    let shift = animations.error.get();
    ctx.translate(0, -shift * global.screenHeight);
    drawText("There has been an error!", global.screenWidth / 2, global.screenHeight / 2 - 50, 50, color.guiwhite, "center");
    drawText("(This Either Means The Dev's Working On The Game Or Its Bugged)", global.screenWidth / 2, global.screenHeight / 1.8, 20, color.blue, "center");
    drawText(global.message, global.screenWidth / 2, global.screenHeight / 2 + 30, 15, color.orange, "center");
    ctx.translate(0, shift * global.screenHeight);
};
// The main function
function animloop() {
    global.animLoopHandle = window.requestAnimFrame(animloop);
    gameDraw.reanimateColors();
    global.player.renderv += (global.player.view - global.player.renderv) / 30;
    var ratio = settings.graphical.screenshotMode ? 2 : util.getRatio();
    // Set the drawing style
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    // Draw the game
    if (global.gameStart && !global.disconnected) {
        lagachloop();
        global.time = getNow();
        if (global.time - lastPing > 1000) {
            // Latency
            // Do ping.
            global.socket.ping(global.time);
            lastPing = global.time;
            // Do rendering speed.
            global.metrics.rendertime = renderTimes;
            renderTimes = 0;
            // Do update rate.
            global.metrics.updatetime = global.updateTimes;
            global.updateTimes = 0;
        }
        global.metrics.lag = global.time - global.player.time;
    }
    ctx.translate(0.5, 0.5);
    try {
        if (global.gameStart) {
            gameDrawAlive(ratio, util.getScreenRatio());
        } else if (!global.disconnected) {
            gameDrawBeforeStart();
        }
        if (global.died) {
            gameDrawDead();
            PlaySound420();
            global.metrics.killcount = 0;
        } else {
        if (global.stopthefuckingkillsoundyouprick) {
            metalpipe.pause();
            metalpipe.currentTime = 0;
            global.stopthefuckingkillsoundyouprick = false;
            console.log("this better be working")
      }
        }
        if (global.disconnected) {
            gameDrawDisconnected();
        }
        if (global.wiki) {
            gameDrawWiki();
        }
        ctx.translate(-0.5, -0.5);
    //oh no we need to throw an error!
    } catch (e) {
      
        //hold on....
        gameDrawError();
        ctx.translate(-0.5, -0.5);
      
        //okay, NOW throw the error!
        throw e;
      
    }
}

})(util, global, settings, Canvas, color, gameDraw, socketStuff);