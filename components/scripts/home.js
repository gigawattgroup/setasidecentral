(function($){

// owl carousel
var owl = $('.section-carousel');
owl.owlCarousel({
    items:1,
    dots:true,
    nav:true,
    lazyLoad:true,
    loop:true,
    autoplay:false,
    margin:0,
    onChanged: callback,
    onResized: callback
});

function callback(e) {
    var currentIndex = e.item.index;
    var $current = $(e.target).find('.owl-item').eq(currentIndex);
    var $caption = $current.find('.slide-caption');
    var curh = ($current.length > 0) ? $current[0].clientHeight : 0;
    var caph = ($caption.length > 0) ? ($caption[0].clientHeight + 41) : 0;

    console.dir($current[0]);
    console.dir($caption[0]);
    console.log('curh: '+curh);
    console.log('caph: '+caph);

    if ( caph <= curh ) {
      owl.addClass("centerr");
    } else {
      owl.removeClass("centerr");
    }
}


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
  duration: '140%'
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

//Checkered-In Effect
/*var boxWidth = $('.section-more .entry-link').width() + 10;
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
.addTo(controller);*/



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
