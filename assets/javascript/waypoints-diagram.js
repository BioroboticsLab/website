anime({
  targets: '.diagram g',
  opacity: 0
});
var diagramStep1 = anime.timeline({
  autoplay:false,
  duration: 500,
  complete: function(anim) {
    anim.reverse();
    anim.pause();
  }
});
var diagramStep2 = anime.timeline({
  autoplay:false,
  duration: 500,
  complete: function(anim) {
    anim.reverse();
    anim.pause();
  }
});
var diagramStep3 = anime.timeline({
  autoplay:false,
  duration: 500,
  complete: function(anim) {
    anim.reverse();
    anim.pause();
  }
});
var diagramStep4 = anime.timeline({
  autoplay:false,
  duration: 500,
  complete: function(anim) {
    anim.reverse();
    anim.pause();
  }
});
var diagramStep5 = anime.timeline({
  autoplay:false,
  duration: 500,
  complete: function(anim) {
    anim.reverse();
    anim.pause();
  }
});
// var waypoint0 = new Waypoint({
//   element: document.getElementById('step0'),
//   handler: function(direction) {
//     anime({
//       update: function() {
//       document.getElementById('counter').innerHTML = 'there are currently ' + anime.running.length + ' instances running';
//       }
//     });
//   },
//   offset: "65%"
// });
var waypoint1 = new Waypoint({
  element: document.getElementById('step1'),
  handler: function(direction) {
    if (direction === 'down') {
      this.element.classList.add('story-entered');
      document.getElementsByClassName('bees-story')[0].classList.add('transform-bees');
      diagramStep1.add({
          targets: '#tracker',
          opacity: 1,
        })
        .add({
          targets: '#text',
          opacity: 1,
        }).play();
    }
    else if (direction === 'up') {
      this.element.classList.remove('story-entered');
      document.getElementsByClassName('bees-story')[0].classList.remove('transform-bees');
      diagramStep1.play();
    }
  },
  offset: "50%"
});
var waypoint2 = new Waypoint({
  element: document.getElementById('step2'),
  handler: function(direction) {
    if (direction === 'down') {
      this.element.classList.add('story-entered');
    }
    else if (direction === 'up') {
      this.element.classList.remove('story-entered');
    }
  },
  offset: "50%"
});
var waypoint3 = new Waypoint({
  element: document.getElementById('step3'),
  handler: function(direction) {
    if (direction === 'down') {
      this.element.classList.add('story-entered');
      diagramStep3.add({
        targets: '#dot',
        opacity: 1,
      }).add({
        targets: ['#tracker','#text'],
        opacity:0
      }).add({
        targets: '#dot',
        translateX: 313,
        translateY: 321,
        scaleX: .25,
        scaleY: .25,
      }).add({
        targets: '#nodes',
        opacity: 1,
      }).add({
        targets:'#dot',
        opacity:0
      }).add({
        targets: '#connections',
        opacity: 1
      }).play();
    }
    else if (direction === 'up') {
      this.element.classList.remove('story-entered');
      diagramStep3.play();
    }
  },
  offset: "50%"
});
var waypoint4 = new Waypoint({
  element: document.getElementById('step4'),
  handler: function(direction) {
    if (direction === 'down') {
      this.element.classList.add('story-entered');
      diagramStep4.add({
        targets: ['#box1','#box2','#box3'],
        opacity: {
          value:1,
        }
        }).add({
          targets: ['#nodes','#connections'],
          opacity: 0,
        }).add({
        targets: ['#box1','#box2','#box3'],
        scaleX: {
          delay: 500,
          value: .5
        },
        skewY: {
          delay:500,
          value: -10,
        },
        translateX: {
          value: function(el, i) {
            return 100 + (i * 150);
          },
          delay:500,
          duration:1000
        },
        translateY: {
          value: function(el, i) {
            return 50 + (i * 30);
          },
          delay:500,
          duration:1000
        }
      }).play();
    }
    else if (direction === 'up') {
      this.element.classList.remove('story-entered');
      diagramStep4.play();
    }
  },
  offset: "50%"
})
var waypoint5 = new Waypoint({
  element: document.getElementById('step5'),
  handler: function(direction) {
    if (direction === 'down') {
      this.element.classList.add('story-entered');
      diagramStep5.add({
        targets: ['#box1','#box2','#box3'],
        skewY: {
          value: 10,
          duration: 500
        },
        scaleX: .2,
        translateX: 1000,
        opacity: 0
      }).add({
        targets: '#networkAge',
        opacity: 1
      }).play();
    }
    else if (direction === 'up') {
      this.element.classList.remove('story-entered');
      diagramStep5.play();
    }
  },
  offset: "50%"
})
