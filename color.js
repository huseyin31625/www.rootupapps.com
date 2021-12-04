var r = document.getElementById("r");
var g = document.getElementById("g");
var b = document.getElementById("b");
var ri = document.getElementById("r-i");
var gi = document.getElementById("g-i");
var bi = document.getElementById("b-i");
document.querySelectorAll("#colors div.color-item").forEach(e => 
{
e.addEventListener("click", function() {
var color = "rgb(" + r.value + ", " + g.value + ", " + b.value + ")";
e.style["background-color"] = color;
});
});
r.addEventListener("input", function() {
  ri.innerHTML = r.value;
});
g.addEventListener("input", function() {
  gi.innerHTML = g.value;
});
b.addEventListener("input", function() {
  bi.innerHTML = b.value;
});