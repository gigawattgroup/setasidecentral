(function($){

// owl carousel
$('.section-carousel').owlCarousel({
    items:1,
    dots:true,
    nav:true,
    lazyLoad:true,
    loop:true,
    animateOut: 'fadeOut',
    autoHeightClass:'owl-lazy',
    margin:0
});

// Init ScrollMagic
var controller = new ScrollMagic.Controller();

/* Homepage Scenes */
// #section-about scene
var homeParallaxTl = new TimelineMax();
homeParallaxTl
  .from('#section-about-content', 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0.6)
  .from($('.section-about .bcg'), 2, {y: '-75%', ease:Power0.easeNone}, 0)
  ;

var homeScene01 = new ScrollMagic.Scene({
  triggerElement: '.section-about',
  triggerHook: 1,
  duration: '175%'
})
.setTween(homeParallaxTl)
.addTo(controller);




// #section-map
var homeMapTl = new TimelineMax();
homeMapTl
.from($('.section-map .entry-title'), 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0.6)
;

var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
var homeScene02 = new ScrollMagic.Scene({
  triggerElement: '.section-map'
})
.setTween(homeMapTl)
.setClassToggle('#section-map-content', 'slide-right')
.addTo(controller);



var homeHubZonesAnimation = TweenMax.from($('.section-hubzones .entry-content'), 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0.6);
var homeScene03 = new ScrollMagic.Scene({
  triggerElement: '.section-hubzones'
})
.setTween(homeHubZonesAnimation)
.addTo(controller);


// .section-more
var boxWidth = $('.section-more .entry-link').width() + 10;
var homeMoreTl = new TimelineMax();
homeMoreTl
.from($('.section-more .entry-link:eq(0) img'), 0.5, {x:-boxWidth+'px', ease:Power0.easeNone}, 0.2)
.from($('.section-more .entry-link:eq(1) img'), 0.5, {x:-boxWidth+'px', ease:Power0.easeNone}, 0.8)
.from($('.section-more .entry-link:eq(2) img'), 0.5, {x:-boxWidth+'px', ease:Power0.easeNone}, 0.2)
.from($('.section-more .entry-link:eq(3) img'), 0.5, {x:-boxWidth+'px', ease:Power0.easeNone}, 0.8)
;
var homeScene04 = new ScrollMagic.Scene({
  triggerElement: '.section-more'
})
.setTween(homeMoreTl)
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
