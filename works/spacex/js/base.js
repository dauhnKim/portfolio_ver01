(function($){
  $(function(){
    
  $('section')
    .on('mouseenter', function(){
    var mov = $(this).find('video').get(0),
        sp = 1000;
    
    mov.currentTime = 0;
    mov.play();
    
    $(this).stop().animate({
      width: '25%'
    }, sp, function(){
      $(this).find('p').stop().animate({
        right: 0
      }, sp*0.4)
    })
  
    
    $(this).find('video')
      .stop()
      .animate({
        opacity: '0.9'
      }, sp)
      .prop({
        muted: false
      });
  })
    .on('mouseleave', function(){
    var $video = $(this).find('video'),
        mov = $video.get(0),
        sp = 1000;
    
    mov.pause();
    $(this).stop().animate({
      width: '12%'
    });
    
    $video.stop().animate({
      opacity: 0
    }, sp);
    
    $(this).find('p').stop().animate({
      right: '100%'
    })
  });
  })
})(jQuery);