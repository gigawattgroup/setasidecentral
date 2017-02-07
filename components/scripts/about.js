(function($){

// Init ScrollMagic
var controller = new ScrollMagic.Controller();

/* About Scenes */
TweenMax.from($('.section-featured .container'), 1, {autoAlpha:0, y: '100px', delay:1});

// #who-we-are scene
var parallax03Tl = new TimelineMax();
parallax03Tl
  .from($('.section-who .entry-content'), 0.4, {autoAlpha: 0, x: '-100px', ease:Power0.easeNone}, 0.6)
  .from($('.section-who .bcg'), 2, {y: '-40%', ease:Power0.easeNone}, 0)
  ;

var parallaxScene03 = new ScrollMagic.Scene({
  triggerElement: '.section-who',
  triggerHook: 1,
  duration: '175%'
})
.setTween(parallax03Tl)
.addTo(controller);

// #why-us scene
var parallax04Tl = new TimelineMax();
parallax04Tl
  .from($('.section-why .entry-title'), 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0)
  .from($('.section-why .container-border'), 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0.6)
  ;

var parallaxScene04 = new ScrollMagic.Scene({
  triggerElement: '.section-why'
})
.setTween(parallax04Tl)
.addTo(controller);




 })(jQuery);



 // .addIndicators({
 //   name: 'parallax-fadein',
 //   colorTrigger: 'yellow',
 //   colorStart: 'red',
 //   colorEnd: 'green'
 // })
