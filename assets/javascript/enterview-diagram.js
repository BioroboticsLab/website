enterView({
 selector: '#step1',
 offset: 0.5,
 enter: function(el) {
  el.classList.add('story-entered');
  anime({
    targets: '.diagram circle',
    opacity: .2,
    delay: anime.stagger(800),
    // direction: 'alternate',
    // loop: true
  });
 },
 exit: function(el) {
   el.classList.remove('story-entered');
   anime({
     targets: '.diagram circle',
     opacity: 1,
     delay: anime.stagger(800),
     // direction: 'alternate',
     // loop: true
   });
 },
});
enterView({
 selector: '#step2',
 offset: 0.5,
 enter: function(el) {
  el.classList.add('story-entered');
  anime({
    targets: '.diagram circle',
    opacity: .2,
    delay: anime.stagger(800),
    // direction: 'alternate',
    // loop: true
  });
 },
 exit: function(el) {
   el.classList.remove('story-entered');
   anime({
     targets: '.diagram circle',
     opacity: 1,
     delay: anime.stagger(800),
     // direction: 'alternate',
     // loop: true
   });
 },
});
