(function($){
  $(function(){
    
    $('.cover').each(function(){
      
      var $cover = $(this),
          $banner = $cover.find('.banner'),
          $item = $banner.find('li'),
          $indicator = $cover.find('.ind'),
          $btn = $cover.find('.sm-btn'),
          
          sp = 1500,
          easing = 'easeInOutExpo',
          
          currentIndex = 0,
          
          count = $item.length,
          indicatorHTML = '',
          
          interval = 3000,
          timer ;
      
      $item.each(function(i){ 
        $(this).css({
          left: 100 * i + '%'
        });
        indicatorHTML += '<a href="#"></a>';
      });
      
      $indicator.html(indicatorHTML);
      
      function slideShow(index) {
        
        $banner.stop().animate({
          left: -100 * index + '%'
        }, sp, easing);
      
        currentIndex = index;
        
        upDate();
      } 
      
      function upDate() {
        $indicator.find('a').removeClass();
        $indicator.find('a').eq(currentIndex).addClass('on');
        
        if(currentIndex == 0) {
          $btn.find('.prev').hide()
        } else {
          $btn.find('.prev').show()
        }
        
        if(currentIndex == (count-1)) {
          $btn.find('.next').hide()
        } else {
          $btn.find('.next').show()
        }
      }
      
      function startTimer() {
        timer = setInterval(function(){
          
          var nextIndex = (currentIndex +1) % count;
          
          slideShow(nextIndex);
        }, interval);
      }
      function stopTimer() {
        clearInterval(timer);
      }
      
      $cover.on({
        mouseenter: stopTimer,
        mouseleave: startTimer
      })
      
      $btn.on('click', '.next', function(e){
        e.preventDefault();
        slideShow(currentIndex + 1);
      });
      $btn.on('click', '.prev', function(e){
        e.preventDefault();
        slideShow(currentIndex - 1);
      });
      
      $indicator.on('click', 'a', function(e){
        e.preventDefault();
        slideShow($(this).index());
      });
      
      slideShow(currentIndex);
      startTimer();
      
    
  });

});
})(jQuery);