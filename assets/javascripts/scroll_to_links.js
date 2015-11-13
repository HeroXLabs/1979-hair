window.ScrollToLinks = function($) {
  function setup() {
    $('a.scrollto').click(function(e) {
      e.preventDefault();
      scrollToHash(this.hash);
    });
  }

  function scrollToHash(target, opts) {
    var scrollOpts = $.extend({ gap: { y: -200 } }, opts || {});
    console.log(target);
    $('html,body').scrollTo(target, target, scrollOpts);

    if ($('.navbar-collapse').hasClass('in')){
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
  }

  return {
    setup: setup
  }
}(jQuery)
;
