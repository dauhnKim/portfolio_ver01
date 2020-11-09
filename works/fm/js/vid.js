(function($){
  $(function(){
    
    var $visual = $('.visual'),
        $play = $visual.find('.play'),
        $pause = $visual.find('.pause');
    
    $play.on('click', function(){
      $(this).addClass('on');
      $pause.addClass('on');
    });
    
    $pause.on('click', function(){
      $(this).removeClass('on');
      $play.removeClass('on');
    });
    
    $('.pj-vid')
    .on ('mouseenter click focus', 'a', function(e){  
      e.preventDefault();
      var mov = $(this).find('video').get(0);
      mov.play();
    })
    .on('mouseleave blur', 'a', function(e){
      e.preventDefault();
      var $video = $(this).find('video'),
          mov = $video.get(0);
      mov.pause();
    });
    
  });
})(jQuery);