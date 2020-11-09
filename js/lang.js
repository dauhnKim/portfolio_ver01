(function($){
  $(function(){
    
    var $header = $('header'),
        $lang_a = $header.find('.lang a');
    
    $lang_a.on('click', function(){ 
       
      $lang_a.removeClass();
      $(this).addClass('on');
        
    }); 
      
  });
})(jQuery);