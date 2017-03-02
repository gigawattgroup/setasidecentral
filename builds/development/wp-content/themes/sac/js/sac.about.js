(function($){

// Init ScrollMagic
var controller = new ScrollMagic.Controller();

/* About Scenes */
TweenMax.from($('.section-featured .container'), 1, {autoAlpha:0, y: '100px', delay:1});

// #who-we-are scene
var aboutParallaxTl = new TimelineMax();
aboutParallaxTl
  .from($('.section-who .entry-content'), 0.4, {autoAlpha: 0, x: '-100px', ease:Power0.easeNone}, 0.4)
  .from($('.section-who .bcg'), 2, {y: '-40%', ease:Power0.easeNone}, 0)
  ;

var aboutScene01 = new ScrollMagic.Scene({
  triggerElement: '.section-who',
  triggerHook: 1,
  duration: '120%'
})
.setTween(aboutParallaxTl)
.addTo(controller);

// #why-us scene
var aboutWhyUsTl = new TimelineMax();
aboutWhyUsTl
  .from($('.section-why .entry-title'), 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0)
  .from($('.section-why .container-border'), 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0.6)
  ;

var aboutScene02 = new ScrollMagic.Scene({
  triggerElement: '.section-why'
})
.setTween(aboutWhyUsTl)
.addTo(controller);




 })(jQuery);
