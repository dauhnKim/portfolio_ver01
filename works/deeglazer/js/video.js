(function($){
  $(function(){
    
    var pics = '';
    
    for(var i=0; i<200; i++) {
      pics += '<img src="img/mov/sunflower'+i+'.jpg">'
    }
    
    var $js = $('.js');
    
    $js.html(pics);
    
    $js.children().hide();
    $js.find('img').eq(0).show();

    
    $('body').on('mousemove', function(e){
      
      var posX = e.pageX,
          winWidth = $(window).width();
      
      var percent = (posX / winWidth) * 200,
          result = Math.floor(percent);
      
      $js.children().hide();
      $js.find('img').eq(result).show();
    })
    
  });
})(jQuery);