(function($){

// owl carousel
$('.section-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    autoHeightClass:'owl-lazy',
    margin:0
});

// Init ScrollMagic
var controller = new ScrollMagic.Controller();

/* Homepage Scenes */
// #section-about scene
var parallax01Tl = new TimelineMax();
parallax01Tl
  .from('#section-about-content', 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0.6)
  .from('.bcg', 2, {y: '-75%', ease:Power0.easeNone}, 0)
  ;

var parallaxScene01 = new ScrollMagic.Scene({
  triggerElement: '.section-about',
  triggerHook: 1,
  duration: '175%'
})
.setTween(parallax01Tl)
.addTo(controller);




// #section-map
// var parallax02Tl = new TimelineMax();
// parallax02Tl
//   .from('#section-about-content', 1, {width: 0, ease:Power0.easeNone});

var scene02 = new ScrollMagic.Scene({
  triggerElement: '.section-map'
})
.setClassToggle('#section-map-content', 'slide-right')
.addIndicators({
  name: 'section-map',
  colorTrigger: 'yellow',
  colorStart: 'red',
  colorEnd: 'green'
})
.addTo(controller);

console.log("test!");


 })(jQuery);

// .addIndicators({
//   name: 'parallax-fadein',
//   colorTrigger: 'yellow',
//   colorStart: 'red',
//   colorEnd: 'green'
// })
