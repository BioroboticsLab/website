function draw(img) {
  var portrait = document.getElementById("backgroundVid");
  var canvas = portrait.getContext("2d");
  portrait.setAttribute("width", img.width);
  portrait.setAttribute("height", img.height);

  canvas.drawImage(img, 0, 0, img.width, img.height,
  0, 0, portrait.width, portrait.height);
}

var img = new Image();
img.src = "/website/assets/images/lab_photo.png";
img.onload = function() {
  draw(this);
};
