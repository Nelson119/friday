$( document ).ready(function() {
  function parallax(){
    // $.each($('.layer1'), function(index, layer) {
    //   layer.style.transform = 'translateY(' + -(window.pageYOffset*0.3)+'px)';
    //   layer.style['-webkit-transform'] = 'translateY(' + -(window.pageYOffset*0.3)+'px)';
    // });
    TweenMax.set($('.layer1'),{
      marginTop : $(window).scrollTop() * -0.3
    });
    TweenMax.set($('.layer2'),{
      marginTop : $(window).scrollTop() * -0.5
    });
    // TweenMax.set( $('div.page'),{
    //   marginTop : $(window).scrollTop() * 0.5
    // });
    // $.each($('.layer2'), function(index, layer) {
    //   console.log(layer.outerHTML);
    //   layer.style.transform = 'translateY(' + -(window.pageYOffset*0.5)+'px)';
    //   layer.style['-webkit-transform'] = 'translateY(' + -(window.pageYOffset*0.5)+'px)';
    // });

    $('div.page').each(function(){
        if (
           $(this).offset().top < window.pageYOffset + 10
        && $(this).offset().top + $(this).height() > window.pageYOffset + 10
        ) {
            var pageId = $(this).attr('id');
          $('.pager a').each(function() {
            if ($(this).attr('href').indexOf(pageId) !== -1) {
              $(this).addClass('selected');

            } else {
              $(this).removeClass('selected');
            }
          });
        }
    });

  }

  $(window).on('scroll', parallax);//, false);
  $('a').smoothScroll({speed: 1200});
});
