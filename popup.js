function _2022Popup() {
  var element = document.createElement("div");
  element.className = "modal-container";
  var element2 = document.createElement("div");
  element2.className = "modal-body";
  var img = document.createElement("img");
  img.src = "https://static.rootupapps.com/2022.png";
  var info = document.createElement("div");
  info.innerHTML = "Happy New Year 2022!";
  var ok = document.createElement("button");
  ok.innerHTML = "OK";
  ok.onclick = function() {element.remove();};
  element2.appendChild(img);
  element2.appendChild(info);
  element2.appendChild(ok);
  element.appendChild(element2);
  document.body.appendChild(element);
}
setTimeout(function() {_2022Popup();}, 1000);
