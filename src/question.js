(function($) {
    
  var allPanels = $('.accordion__header');
    

  allPanels.first().addClass('active').next().slideToggle();

  allPanels.on('click', function() {
  	allPanels.not($(this)).removeClass('active');
    allPanels.not($(this)).next().slideUp();
  	$(this).next().stop().slideToggle();
  	$(this).toggleClass('active');
  });

})(jQuery);