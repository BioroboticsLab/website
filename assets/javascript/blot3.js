var styleProperties = {
  family : "sans-serif",
  size : 55,
  leading: 1.1,
  fill: '#ffffff'
};

var text1 = new Blotter.Text("LAND", styleProperties);
var text2 = new Blotter.Text("GRAF", styleProperties);
var text3 = new Blotter.Text("LAB", styleProperties);

var material = new Blotter.FliesMaterial();

material.uniforms.uPointCellWidth.value = .05;
material.uniforms.uPointRadius.value = .9;
// material.uniforms.uDodge.value = 1;
// material.uniforms.uDodgePosition.value = [.5,.5];
// material.uniforms.uDodgeSpread.value = .4;


var blotter = new Blotter(material, {
  texts : [text1, text2, text3]
});

var scope1 = blotter.forText(text1);
var scope2 = blotter.forText(text2);
var scope3 = blotter.forText(text3);

scope1.appendTo(document.getElementById("text1-target"));
scope2.appendTo(document.getElementById("text2-target"));
scope3.appendTo(document.getElementById("text3-target"));
