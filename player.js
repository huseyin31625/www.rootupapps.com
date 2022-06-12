const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');
if (id == "0") {
  document.getElementById("name").innerHTML = "Japanese Logos on crack!!!";
  document.getElementById("willplay").src = "https://video.static.rootupapps.com/2nH_nOiB17E.mp4";
}
const embed = urlParams.get('embed');
if (embed == "0") {
  document.getElementsByClassName("player-top-controls")[0].remove();
}
var playing = false;
document.getElementById("playpause").addEventListener("click", function() {
  playing = !playing;
  if (playing == true) {
    document.getElementById("willplay").play();
  }
  else {
    document.getElementById("willplay").pause();
  }
});
document.getElementById("fback").addEventListener("click", function() {
  document.getElementById("willplay").currentTime -= 5;
});
document.getElementById("fforw").addEventListener("click", function() {
  document.getElementById("willplay").currentTime += 5;
});
document.getElementById("willplay").addEventListener("ended", function() {
  playing = false;
  document.getElementById("controller").style.display = null;
});
document.getElementById("willplay").addEventListener("play", function() {
  playing = true;
});
document.getElementById("willplay").addEventListener("pause", function() {
  playing = false;
  document.getElementById("controller").style.display = null;
});
document.getElementById("willplay").addEventListener("mouseenter", function() {
  if (playing == true) {
    document.getElementById("controller").style.display = null;
  }
});
document.getElementById("controller").addEventListener("mouseleave", function() {
  if (playing == true) {
    document.getElementById("controller").style.display = "none";
  }
});
document.getElementById("speed").addEventListener("input", function() {
  document.getElementById("willplay").playbackRate = document.getElementById("speed").value;
  document.getElementById("speedind").innerHTML = document.getElementById("speed").value;
});
timer = setInterval(function() {
  document.getElementById("played").innerHTML = display(document.getElementById("willplay").currentTime) + " / " + display(document.getElementById("willplay").duration);
}, 1);
function display (seconds) {
  const format = val => `0${Math.floor(val)}`.slice(-2)
  const hours = seconds / 3600
  const minutes = (seconds % 3600) / 60

  return [hours, minutes, seconds % 60].map(format).join(':')
}
