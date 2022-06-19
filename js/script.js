$(function() {
  /*fixed header */
      let header = $("#header")
      let headerWrapper = $("#headerWrapper")
    
      let headerAutor = $("#autor")
      let headerInnerH = header.height()
  
      let scrollPos = $(window).scrollTop();
  
      checkScroll(scrollPos,headerInnerH)
  
      let navToggle = $("#navToggle")
      let nav = $('#nav')
  
      $(window).on('scroll resize', function() {
          scrollPos = $(this).scrollTop();
  
          checkScroll(scrollPos,headerInnerH)
      });
  
      function checkScroll(scrollPos,headerInnerH){
          if( scrollPos > headerInnerH ){
              header.addClass("fixed")
          } else {
              header.removeClass("fixed")
          }
      }
  
      /*scroll smooth */
      $("[data-scroll]").on('click', function(event){
          event.preventDefault();
  
          let elementID = $(this).data('scroll');
          
          let elementOffset = $(elementID).offset().top;
  
          nav.removeClass('show')
  
          $("html , body").animate({
              scrollTop: elementOffset + 1
          },500);
      })

      /*Nav Toggle */

    navToggle.on('click', function(event){
      event.preventDefault();

      nav.toggleClass('show')
  })
  
  
  });
