$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 3,
        loop: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    
      });
});

