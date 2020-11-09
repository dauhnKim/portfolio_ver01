(function($){
  $(function(){
    
    var $header = $('header'),
        $aside = $('aside'),
        $comm = $header.find('.comm'),
        $leftAside = $('.left-aside'),
        $about = $header.find('.gnb-about'),
        $rightAside = $('.right-aside'),
        $blur = $('.blur'),
        $close = $aside.find('.close-btn');
    
    $about.on('click', function(e){
      e.preventDefault();
//      $about.stop().fadeOut('fast');
      $rightAside.addClass('on');
    });
    
    $comm.on('click', function(e){
      e.preventDefault();
      $leftAside.addClass('on');
    });
    
    $close.on('click', function(e){
      e.preventDefault();
      $rightAside.removeClass('on');
      $leftAside.removeClass('on');
    });
    
    $blur.on('click', function(e){
      e.preventDefault();
      $rightAside.removeClass('on');
      $leftAside.removeClass('on');
    });
    
  });
})(jQuery);