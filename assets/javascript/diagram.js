enterView({
 selector: '#step1',
 offset: 0.5,
 enter: function(el) {
  anime({
    targets: '.diagram circle',
    opacity: 0,
    delay: anime.stagger(200),
    // direction: 'alternate',
    // loop: true
  });
 },
 exit: function(el) {
 },
});
