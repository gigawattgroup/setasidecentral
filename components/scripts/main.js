(function($){

var shrinkHeader = 100;

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

$(".equalheights").setAllToMaxHeight();

objectFit.polyfill({
    selector: 'img', // this can be any CSS selector
    fittype: 'cover', // either contain, cover, fill or none
    disableCrossDomain: 'true' // either 'true' or 'false' to not parse external CSS files.
});


})(jQuery);
