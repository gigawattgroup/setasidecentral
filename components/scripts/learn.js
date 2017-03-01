(function($){

  $(".section-hubzones .entry-image, .section-hubzones .entry-content").setAllToMaxHeight();
  $(".section-setasides .entry-image, .section-setasides .entry-content").setAllToMaxHeight();
  $(".section-eligibility .content-desc").setAllToMaxHeight();

  //$(".section-getcert .content-order, .section-getcert .content-desc, .section-getcert .content-link").setAllToMaxHeight();

// Init ScrollMagic
var controller = new ScrollMagic.Controller();

/* Learn Scenes */
TweenMax.from($('.section-featured .container'), 1, {autoAlpha:0, y: '100px', delay:1});

var learnSetAsidesAnimation = TweenMax.from($('.section-setasides .entry-content'), 0.4, {autoAlpha: 0, x: '-100px', ease:Power0.easeNone}, 0.6);
var learnScene01 = new ScrollMagic.Scene({
  triggerElement: '.section-setasides'
})
.setTween(learnSetAsidesAnimation)
.addTo(controller);

var learnHUBzonesAnimation = TweenMax.from($('.section-hubzones .entry-content'), 0.4, {autoAlpha: 0, x: '100px', ease:Power0.easeNone}, 0.6);
var learnScene02 = new ScrollMagic.Scene({
  triggerElement: '.section-hubzones'
})
.setTween(learnHUBzonesAnimation)
.addTo(controller);

var learnEligibilityAnimation = TweenMax.staggerFrom($('.section-eligibility .items li'), 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0.4);
var learnScene03 = new ScrollMagic.Scene({
  triggerElement: '.section-eligibility'
})
.setTween(learnEligibilityAnimation)
.addTo(controller);

var learnGetCertAnimation = TweenMax.staggerFrom($('.section-getcert .items li'), 0.4, {autoAlpha: 0, x: '-200px', ease:Power0.easeNone}, 0.4);
var learnScene04 = new ScrollMagic.Scene({
  triggerElement: '.section-getcert'
})
.setTween(learnGetCertAnimation)
.addTo(controller);

// var learnParallaxTl = new TimelineMax();
// learnParallaxTl
//   .from($('.section-registration .entry-content'), 0.4, {autoAlpha: 0, y: '100px', ease:Power0.easeNone}, 0.6)
//   .from($('.section-registration .bcg'), 2, {y: '-75%', ease:Power0.easeNone}, 0)
//   ;

// var learnScene05 = new ScrollMagic.Scene({
//   triggerElement: '.section-registration',
//   triggerHook: 1,
//   duration: '175%'
// })
// .setTween(learnParallaxTl)
// .addTo(controller);




 })(jQuery);
