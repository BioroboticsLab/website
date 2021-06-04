// function draw(img) {
//   var portrait = document.getElementById("backgroundVid");
//   var canvas = portrait.getContext("2d");
//   portrait.setAttribute("width", img.width);
//   portrait.setAttribute("height", img.height);
//
//   canvas.drawImage(img, 0, 0, img.width, img.height,
//   0, 0, portrait.width, portrait.height);
// }
//
// var img = new Image();
// img.src = "/website/assets/images/lab_photo.png";
// img.onload = function() {
//   draw(this);
// };

p5.disableFriendlyErrors = true; // disables FES

let bees;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('display', 'block');
  canvas.parent('p5Vid');
  background(255, 0, 200);
  bees = createVideo(['/landgraflab-demo/assets/videos/beedance.mp4']);
  bees.volume(0);
  bees.autoplay();
  bees.loop();
  bees.size(canvas.width, canvas.height)
  bees.hide();
  noStroke();
  fill(0);
}

// function draw() {
//   background(255);
//   image(bees,0,0,canvas.width,canvas.height);
// }

// function draw() {
//   background(255);
//   bees.loadPixels();
//   const stepSize = round(constrain(mouseX / 8, 6, 32));
//   for (let y = 0; y < height; y += stepSize) {
//     for (let x = 0; x < width; x += stepSize) {
//       const i = y * width + x;
//       const darkness = (255 - bees.pixels[i * 4]) / 255;
//       const radius = stepSize * darkness;
//       ellipse(x, y, radius, radius);
//     }
//   }
// }

function draw() {
  background(255,255,255);
  bees.loadPixels();
  var blocksize = 32;
  //var greys = [];
  // var maxA = max(bees.pixels);
  // var minA = min(bees.pixels);
  for (var y = 0; y < height; y += blocksize/2) {
    for (var x = 0; x < width; x += blocksize) {
      var offset = ((y*width)+x)*4;
      // grey = (bees.pixels[offset] + bees.pixels[offset+1] + bees.pixels[offset+2])/3;
      grey = bees.pixels[offset];
      // greys.push(grey);
      //var alpha = map(grey,minA,maxA,0,255);

      // if (grey < 70) {
      //   fill(255,0,255,grey);
      // } else if (grey > 210) {
      //   fill(255,255,0,grey);
      // } else {
      //   fill(0,255,255,grey);
      // }

      fill(100,100,100,grey);

      // fill(bees.pixels[offset],
      //   bees.pixels[offset+1],
      //   bees.pixels[offset+2]);
      rect(x, y, blocksize, blocksize);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  bees.size(canvas.width, canvas.height);
}
