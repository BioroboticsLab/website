
var waypoint1 = new Waypoint({
  element: document.getElementById('step1'),
  handler: function(direction) {
    if (direction === 'down') {
      this.element.classList.add('story-entered');
      anime({
        targets: '.diagram circle',
        opacity: .2,
        delay: anime.stagger(800),
        // direction: 'alternate',
        // loop: true
      });
    }
    else if (direction === 'up') {
      this.element.classList.remove('story-entered');
      anime({
        targets: '.diagram circle',
        opacity: 1,
        delay: anime.stagger(800),
        // direction: 'alternate',
        // loop: true
      });
    }
  },
  offset: "50%"
})
var waypoint2 = new Waypoint({
  element: document.getElementById('step2'),
  handler: function(direction) {
    if (direction === 'down') {
      this.element.classList.add('story-entered');
      anime({
        targets: '.diagram rect',
        opacity: .2,
        delay: anime.stagger(800),
        // direction: 'alternate',
        // loop: true
      });
    }
    else if (direction === 'up') {
      this.element.classList.remove('story-entered');
      anime({
        targets: '.diagram rect',
        opacity: 1,
        delay: anime.stagger(800),
        // direction: 'alternate',
        // loop: true
      });
    }
  },
  offset: "50%"
})
