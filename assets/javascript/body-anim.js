  var anim;
  var elem = document.getElementById('bodymovin')
  var animData = {
      container: elem,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
          progressiveLoad:false,
          preserveAspectRatio: 'xMidYMid slice'
      },
      path: 'assets/data/data.json'
  };
  anim = bodymovin.loadAnimation(animData);

  // $(window).scroll(function() {
  //
  //     // calculate the percentage the user has scrolled down the page
  //     var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
  //
  //     console.log(scrollPercent);
  //     //console.log(anim.currentRawFrame);
  //
  //     scrollPercentRounded = Math.round(scrollPercent);
  //
  //     /*console.log( (scrollPercentRounded / 100) * anim.totalFrames );*/
  //
  //     anim.goToAndStop( (scrollPercentRounded / 100) * 10000)
  // });

  enterView({
  	selector: '#scrolly-diagram',
  	// enter: function(el) {
  	// 	el.classList.add('entered');
  	// },
  	// exit: function(el) {
  	// 	el.classList.remove('entered');
  	// },
  	progress: function(el, progress) {
  		anim.goToAndStop( progress * 3500)
  	},
  	offset: 0.7, // enter at middle of viewport
  	// once: true, // trigger just once
  });
