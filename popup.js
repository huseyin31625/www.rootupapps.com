function _16GBPopup() {
  var element = document.createElement("div");
  element.className = "modal-container";
  var element2 = document.createElement("div");
  element2.className = "modal-body";
  var img = document.createElement("img");
  img.src = "https://static.rootupapps.com/newram.jpg";
  var info = document.createElement("div");
  info.innerHTML = "My new 16 GB RAM! (i made typo: It'll be 'We' instead of 'We'll'.)";
  var ok = document.createElement("button");
  ok.innerHTML = "OK";
  ok.onclick = function() {element.remove();};
  element2.appendChild(img);
  element2.appendChild(info);
  element2.appendChild(ok);
  element.appendChild(element2);
  document.body.appendChild(element);
}
setTimeout(function() {_16GBPopup();}, 1000);
