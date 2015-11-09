window.FoodsterIntro = function() {
  function matchCarouselHeight() {
    "use strict";
    // Adjust Header carousel .item height to same as window height
    var wH = $(window).height();
    $('#hero-carousel .item').css("height", wH);
  }

  function setup() {
    matchCarouselHeight();

    $(document).scroll( function() {
      "use strict";
      // Add and remove the navbar-shrink class for fixed navigation on page scroll
      if ( $(this).scrollTop()>=$('header').position().top ) {
        $('nav').addClass('navbar-shrink');
      }

      if ( $(window).scrollTop() < $('header').height() + 1 ) {
        $('nav').removeClass('navbar-shrink');
      }
      if ( $('nav').hasClass('navbar-shrink') ) {
        $('body').addClass('navbar-shrink-margin');
      }
      else {
        $('body').removeClass('navbar-shrink-margin');
      }
    });

    $(window).scroll(function() {
      "use strict";
      if ($(this).scrollTop() > 100) {
        $('.scroll-up').fadeIn();
      } else {
        $('.scroll-up').fadeOut();
      }
    });

    $('body').scrollspy({
        target: '.navbar-shrink',
        offset: 85
    });

    // Smooth scrolling links - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);

        if ( $anchor.hasClass('header-scroll') ) {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        }
        else{
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 75
            }, 1500, 'easeInOutExpo');
        }
        event.preventDefault();
    });

    $(window).resize(function() {
      "use strict";
      matchCarouselHeight();
    });

    $('#hero-carousel').on('slide.bs.carousel', function () {
      matchCarouselHeight();
    });

    // Initialise WOW.js for section animation triggered when page scrolling
    new WOW().init()
  }

  return {
    setup: setup
  }
}()
;
