const body = document.body;
const docEl = document.documentElement;

const MathUtils = {
    lineEq: (y2, y1, x2, x1, currentVal) => {
        // y = mx + b
        var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
        return m * currentVal + b;
    },
    lerp: (a, b, n) =>  (1 - n) * a + n * b,
    distance: (x1, x2, y1, y2) => {
        var a = x1 - x2;
        var b = y1 - y2;
        return Math.hypot(a,b);
    }
};

let winsize;
const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
calcWinsize();
window.addEventListener('resize', calcWinsize);

const getMousePos = (ev) => {
    let posx = 0;
    let posy = 0;
    if (!ev) ev = window.event;
    if (ev.pageX || ev.pageY) {
        posx = ev.pageX;
        posy = ev.pageY;
    }
    else if (ev.clientX || ev.clientY) 	{
        posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
        posy = ev.clientY + body.scrollTop + docEl.scrollTop;
    }
    return {x: posx, y: posy};
}

let mousePos = {x: winsize.width/2, y: winsize.height/2};
window.addEventListener('mousemove', ev => mousePos = getMousePos(ev))

//my old code

var styleProperties = {
  family : "sans-serif",
  size : 55,
  leading: 1.2,
  fill: '#333152',
  paddingLeft: 50,
  paddingRight: 50,
  paddingTop: 10,
  paddingBottom: 10
};
text.needsUpdate = true;

var text1 = new Blotter.Text("LAND", styleProperties);
var text2 = new Blotter.Text("GRAF", styleProperties);
var text3 = new Blotter.Text("LAB_", styleProperties);

var material = new Blotter.FliesMaterial();

material.uniforms.uPointCellWidth.value = .04;
material.uniforms.uPointRadius.value = .6;
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

let lastMousePosition = {x: winsize.width/2, y: winsize.height/2};
let volatility = 0;

const render = () => {
    const docScrolls = {left : body.scrollLeft + docEl.scrollLeft, top : body.scrollTop + docEl.scrollTop};
    const relmousepos = {x : mousePos.x - docScrolls.left, y : mousePos.y - docScrolls.top };
    const mouseDistance = MathUtils.distance(lastMousePosition.x, relmousepos.x, lastMousePosition.y, relmousepos.y);

    volatility = MathUtils.lerp(volatility, Math.min(MathUtils.lineEq(0.9, 0, 100, 0, mouseDistance),0.9), 0.05);
    material.uniforms.uVolatility.value = volatility;
    lastMousePosition = {x: relmousepos.x, y: relmousepos.y};
    requestAnimationFrame(render);
}
requestAnimationFrame(render);
