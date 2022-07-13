$(document).ready(function() {
  var playbutton = document.getElementById("playbutton");

  var bgvideo = document.getElementById('backgroundvideo');
  bgvideo.playbackRate = 3;

  playbutton.onclick = function() {
    if(playbutton.className === "play") {
      playbutton.className = "pause";
      bgvideo.play();
      
    }
    else {
      playbutton.className = "play";
      bgvideo.pause();
    }
  }
})
