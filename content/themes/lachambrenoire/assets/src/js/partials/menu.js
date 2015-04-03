var Menu = (function(my, Helpers, $){

  my.initMenuOpen = function(){
    $('#js-menu-open').click(function(event) {
      $('body').addClass('menu-open');
      Helpers.disableScroll();
    });
  };
  my.initMenuClose = function(){
    $('#js-menu-close').click(function(event) {
      $('.banner').addClass('fadeOut');
      setTimeout( function() {
        $('body').removeClass('menu-open');
        Helpers.enableScroll();
        $('.banner').removeClass('fadeOut');
      }, 1000); //wait for fadeOut animation to finish
    });
  };

  my.init = function(){
    my.initMenuOpen();
    my.initMenuClose();
  };

  return my;
}(Menu || {}, HELPERS || {}, jQuery));