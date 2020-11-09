(function($){
  $(function(){
    
    var $wrap = $('.wrap'),
        $btn = $wrap.find('.btn'),
        $close = $wrap.find('.close-btn'),
        $main = $wrap.find('main'),
        $section = $main.find('section'),
        $gnb = $wrap.find('.gnb'),
        $header = $wrap.find('header'),
        $pic = $wrap.find('.pic');
    
    
    $btn.on('click', function(){
      $btn.stop().fadeOut('fast');
      $header.addClass('on')
    });
    
    $close.on('click', function(){
      $header.removeClass('on');
      $btn.stop().fadeIn('fast')
    })
    
    $gnb.on('mouseover', 'a', function(){
      
      var i = $(this).index();
      
      $pic.removeClass('on');
      $pic.eq(i).addClass('on');
    })
    
    $gnb.on('mouseleave', 'a', function(){
      $pic.addClass('on');
      $pic.removeClass('on')
    })
    
    $gnb.on('click', 'a', function(){
      
      var e = $(this).index();
      
      $gnb.find('a').removeClass();
      $(this).addClass('on');
     

      $section.removeClass('on');
      $section.eq(e).addClass('on');
      
      $btn.fadeIn('slow');
      $header.removeClass('on');
      $main.removeClass('on');

    });
    
  });
})(jQuery);