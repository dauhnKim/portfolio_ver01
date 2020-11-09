(function($){
  $(function(){ 
    
    var $hc = $('.header-con'),
        $lang_a = $hc.find('.lang a'),
        $gnb_a = $hc.find('.gnb a'),
        $info = $('.info'),
        $sns_a = $info.find('.sns a');
    
    $lang_a.on('click', function(){ 
     // var i = $(this).index();
       
      $lang_a.removeClass();
      $(this).addClass('on');
        
        console.log('1');
    });  
    
    $gnb_a.on('click', function(){
     // var j = $(this).index();
      
      $gnb_a.removeClass();
      $(this).addClass('on');
    });
    
    $sns_a.on('click', function(){
     // var k = $(this).index();
      
      $sns_a.removeClass();
      $(this).addClass('on');
    });
    
    var $header = $('header'),
        $main = $('main'),
        $visual = $('.visual'),
        visualBottom = $visual.outerHeight() - 100;
     /*   headerBottom = $header.offset().top + $header.outerHeight(),
        visualBottom = $visual.offset().top + $visual.outerHeight();*/
        
    $(window).on('scroll', function(){
      var offset = visualBottom,
          scroll = Math.floor($(this).scrollTop());
       
      if(offset < scroll) {
        $header.addClass('on')
      } else { 
        $header.removeClass('on') 
      }
    });

         
  });
})(jQuery);