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
  .from($('.section-about .bcg'), 2, {y: '-75%', ease:Power0.easeNone}, 0)
  ;

var parallaxScene01 = new ScrollMagic.Scene({
  triggerElement: '.section-about',
  triggerHook: 1,
  duration: '175%'
})
.setTween(parallax01Tl)
.addTo(controller);




// #section-map
var parallax02Tl = new TimelineMax();
parallax02Tl
.from($('.section-map .entry-title'), 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0.6)
;

var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
var scene02 = new ScrollMagic.Scene({
  triggerElement: '.section-map'
})
.setTween(parallax02Tl)
.setClassToggle('#section-map-content', 'slide-right')
.addTo(controller);

var scene03 = new ScrollMagic.Scene({
  triggerElement: '.section-hubzones'
})
.setTween(TweenMax.from($('.section-hubzones .entry-content'), 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0.6))
.addTo(controller);



 })(jQuery);


 // .on('start', function () {
 //     $('#hubzone-contractors, #hubzone-employed').html("0");
 //
 //     $('#hubzone-contractors').animateNumber(
 //       {
 //         number: 5000,
 //         numberStep: comma_separator_number_step
 //       },
 //       1500
 //     );
 //
 //     setTimeout(function() {
 //
 //       $('#hubzone-employed').animateNumber(
 //         {
 //           number: 75000,
 //           numberStep: comma_separator_number_step
 //         },
 //         1500
 //       );
 //
 //     }, 1500);
 //
 // })

// .addIndicators({
//   name: 'parallax-fadein',
//   colorTrigger: 'yellow',
//   colorStart: 'red',
//   colorEnd: 'green'
// })
