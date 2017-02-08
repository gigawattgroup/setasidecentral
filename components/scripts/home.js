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
var xval = 0 - $(".entry-link").width();
console.log(xval);
var homeMoreTl = new TimelineMax();
homeMoreTl
.from($('#link-hubzones img'), 0.6, {x:'-5000px', ease:Power0.easeNone}, 0)
.from($('#link-certified img'), 0.6, {x: '-5000px', ease:Power0.easeNone}, 0.6)
.from($('#link-owners img'), 0.6, {x: '-5000px', ease:Power0.easeNone}, 0)
.from($('#link-osdbu img'), 0.6, {x: '-5000px', ease:Power0.easeNone}, 0.6)
;
var homeScene04 = new ScrollMagic.Scene({
  triggerElement: '.section-more'
})
.setTween(homeMoreTl)
.addTo(controller);


// #section-about scene
// var homeMoreLinksTl = new TimelineMax();
// homeMoreLinksTl
//   .from('#section-about-content', 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0.6)
//   .from($('.section-about .bcg'), 2, {y: '-75%', ease:Power0.easeNone}, 0)
//   ;
//
// var homeScene04 = new ScrollMagic.Scene({
//   triggerElement: '.section-about',
//   triggerHook: 1,
//   duration: '175%'
// })
// .setTween(homeMoreLinksTl)
// .addTo(controller);



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
