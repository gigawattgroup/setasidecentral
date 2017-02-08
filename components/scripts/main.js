(function($){

var shrinkHeader = 100,
    screenXS = "screen and (min-width:480px)",
    screenSM = "screen and (min-width:768px)",
    screenMD = "screen and (min-width:992px)",
    screenLG = "screen and (min-width:1200px)";


$(window).scroll(function() {
    var scroll = getCurrentScroll();
    adjustHeader(scroll);
});

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

function adjustHeader(scroll) {
  if ( scroll >= shrinkHeader ) {
     $('.site-header').addClass('small');
  } else {
     $('.site-header').removeClass('small');
  }
}

$.fn.setAllToMaxHeight = function(){
  return this.height( Math.max.apply(this, $.map( this , function(e){ return $(e).height() }) ) );
}

var smq = window.matchMedia(screenSM);
smq.addListener(equalHeights);

$(".equalheights").setAllToMaxHeight();
function equalHeights(mediaQuery) {
  if (mediaQuery.matches) {
    $(".equalheights").css("height", "").setAllToMaxHeight();
  } else {
    $(".equalheights").css("height", "");
  }
}

// enquire.register(screenSM, {
//     match: function(){
//       $(".equalheights").setAllToMaxHeight();
//     },
//     unmatch: function() {
//       $(".equalheights").css("height", "");
//     }
// }, true);



objectFit.polyfill({
    selector: 'img', // this can be any CSS selector
    fittype: 'cover', // either contain, cover, fill or none
    disableCrossDomain: 'true' // either 'true' or 'false' to not parse external CSS files.
});

// smooth scroll to element
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});


})(jQuery);
