(function($){
  $(function(){
    
    var $main = $('main'),
        $article = $main.find('article'),
        $artCon = $article.find('.article-con'),
        $artCon2 = $article.find('.article-con2');
    
    
    $artCon.on('click', function(){
      
      $artCon2.removeClass('on');
      $artCon.removeClass('on');
      
      $(this).addClass('on');
      $(this).prev().addClass('on')
    })

    $artCon2.on('click', function(){
      
      $artCon2.removeClass('on');
      $artCon.removeClass('on')
    });
    
    
  });
})(jQuery);