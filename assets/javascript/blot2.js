var styleProperties2 = {
  family : "sans-serif",
  size : 72,
  fill: '#008080'
};

var oneline1 = new Blotter.Text("LANDGRAF LAB", styleProperties2);

var material2 = new Blotter.FliesMaterial();


material2.uniforms.uPointCellWidth.value = .08;
material2.uniforms.uPointRadius.value = .2;


var blotter2 = new Blotter(material2, {
  texts : oneline1
});

var scope4 = blotter2.forText(oneline1);

scope4.appendTo(document.getElementById("oneline1-target"));
