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

    jQuery("#gallery").unitegallery({
      tile_enable_shadow:false,
      tile_enable_border:true,
      tiles_space_between_cols:15,
      tiles_justified_space_between:15,
      tiles_col_width:235,
      tile_border_color: "#ffffff",
      tile_enable_outline:true,
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space