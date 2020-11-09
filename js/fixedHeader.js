(function($){
  $(function(){
    
    var $header = $('header'),
        headerTop = $header.offset().top,
        $lang_a = $header.find('.lang_a');
    
    $(window).on('scroll', function(){
      var scroll = Math.floor($(this).scrollTop());
      
      if(headerTop < scroll) {
        $header.addClass('on');
      } else {
        $header.removeClass('on')
      }
    });

      
    $lang_a.on('click', function(){ 
       
      $lang_a.removeClass();
      $(this).addClass('on');
        
    }); 
      
  });
})(jQuery);