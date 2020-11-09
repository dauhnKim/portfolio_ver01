(function($){
  $(function(){
    
    $('main').each(function(){
      
      var $main = $(this),
          $ul = $main.find('ul'),
          $show = $ul.find('.show'),
          showBottom = $show.outerHeight(),
          $btn = $('.top-btn');
      
      
      $(window).on('scroll', function(){
        
        var offset = showBottom,
            scroll = Math.floor($(this).scrollTop());
        
        if(offset < scroll) {
          $btn.fadeIn(1000)
        } else {
          $btn.fadeOut(200)
        }        
      });
      
      $btn.on('click', function(){
      $('html, body').stop().animate({
        scrollTop:0
        }, 1500, 'easeOutExpo');      
      });
    
      $(window).trigger('scroll');
      
    });    
  });  
})(jQuery);