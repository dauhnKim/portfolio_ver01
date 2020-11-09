(function($){
  $(function(){
    
    var $btn = $('.btn'),
        sp = 500;
    
    $btn
      .on('mouseenter', function(){
      $(this).find('.bg').stop().animate({
        height: '100%'
  
      }, sp)
    })
    
      .on('mouseleave', function(){
      $(this).children('.bg').stop().animate({
        height: '0'
      }, 'fast')
    })
    
  });
})(jQuery);