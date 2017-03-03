(function($){

  $(".section-product-features .content-desc").setAllToMaxHeight();


// Init ScrollMagic
var controller = new ScrollMagic.Controller();

/* Learn Scenes */
TweenMax.from($('.section-featured .container'), 1, {autoAlpha:0, y: '100px', delay:1});

// #mission-statement scene
var missionParallaxTl = new TimelineMax();
missionParallaxTl
  .from('#mission-statement', 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0.6)
  .from($('.section-mission .bcg'), 2, {y: '-75%', ease:Power0.easeNone}, 0)
  ;

var osdbuScene01 = new ScrollMagic.Scene({
  triggerElement: '.section-mission',
  triggerHook: 1,
  duration: '140%'
})
.setTween(missionParallaxTl)
.addTo(controller);

// #product-features scene
var productFeaturesAnimation = TweenMax.staggerFrom($('.section-product-features .items li'), 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0.4);
var osdbuScene02 = new ScrollMagic.Scene({
  triggerElement: '.section-product-features'
})
.setTween(productFeaturesAnimation)
.addTo(controller);


 })(jQuery);
