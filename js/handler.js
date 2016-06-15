$(document).ready(function() {
  $(document).on("scroll", function(){
    $("section.menu-bar").css("background-color", "rgba(255,255,255," + (0.5 + $(document).scrollTop()/1000) + ")");
  });

  $(".reviews-owl").owlCarousel({
        items : 4,
        responsive:{
            0: {
              items: 1
            },
            768: {
              items: 1
            },
            992: {
              items: 2
            },
            1200: {
              items: 2
            }
        },
        loop: true,
        dots: false,
        nav : false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoHeight: true
    });

  $(".sponsors-owl").owlCarousel({
        items : 12,
        responsive:{
            0: {
              items: 2
            },
            768: {
              items: 4
            },
            992: {
              items: 5 
            },
            1200: {
              items: 6
            }
        },
        loop: true,
        dots: false,
        nav : false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoHeight: true
    });

  $(".desc").dotdotdot({
    wrap : 'word',
    height : 300  
  });
});


