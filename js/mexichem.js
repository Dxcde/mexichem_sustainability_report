(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Navigation arrows
  var $sec = $("section");
  $(".prev, .next").click(function(){
      var y = $sec.filter(function(i, el) {
          return el.getBoundingClientRect().bottom > 0;
      })[$(this).hasClass("next")?"next":"prev"]("section").offset().top;
      $("html, body").stop().animate({scrollTop: y});
  });

})(jQuery); // End of use strict

// Zoom for browser
function browserZoom() {
  // Determinates height of window
  windowHeight = $(window).height();
  // Window zoom percentage
  if (windowHeight >= 685) {
    return 1;
  }
  else if (windowHeight >= 620) {
    return 0.9;
  }
  else if (windowHeight >= 550) {
    return 0.8;
  }
 
  return 0.6;
  
}
window.parent.document.body.style.zoom = browserZoom();