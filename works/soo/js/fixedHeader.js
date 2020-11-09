 (function($){
   $(function(){
     
     var $header = $('header'),
         headerTop = $header.offset().top;
     
     $(window).on('scroll', function(){
       var scroll = Math.floor($(this).scrollTop());
     
       if(headerTop < scroll) {
         $header.addClass('on');
       } else {
         $header.removeClass('on');
       }
     });
     
     var $btn = ('.btn'),
        sp = 500,
        easing = ['easeInBounce', 'easeOutBounce'];     
     
   });
 })(jQuery);