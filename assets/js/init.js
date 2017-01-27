(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $(".work-menu").click(function() {
      $('html, body').animate({
          scrollTop: $("#work").offset().top - 30
      }, 900);
    });

    $(".about-menu").click(function() {
      $('html, body').animate({
          scrollTop: $("#about").offset().top - 30
      }, 900);
    });

    $(".contact-menu").click(function() {
      $('html, body').animate({
          scrollTop: $("#contact").offset().top
      }, 900);
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space