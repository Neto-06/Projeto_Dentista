$(function () {
  function scroll() {

    $("nav a").click(function () {
      var href = $(this).attr("href"); //THIS FAZ REFERENCIA AO LINK 
      var offSetTop = $(href).offset().top;

      $("html,body").animate(
        {
          "scrollTop": offSetTop,
        },
        500
      );

      return false;
    });
  }

  scroll();

  

  /*
  function animationScroll(){


    $(window).scroll(function(){

      var windowTop = $(window).scrollTop();
      var windowsHeight = $(window).height();

      $('.sessao').each(function(){

        var elOff = $(this).offset().top;

        if(elOff < windowTop + windowsHeight &&
          elOff + $(this).height() > windowTop
        ){

          $("header nav.menu-desktop a ").css('border-bottom','none');

          var target = $(this).attr('target');

          $("header nav.menu-desktop a[href='#"+target+"']").css('border-bottom','2px solid #688293');

         
        }

      })


    })


    
  }
  animationScroll();

  */


});
