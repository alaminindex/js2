$(document).ready(function(){
    $('#one').owlCarousel({
        loop:true,
        margin:18,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        
        responsive:{
            0:{
                items:1
            },
            425:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    
  });



  $(document).ready(function(){
    $('#two').owlCarousel({
        loop:true,
        margin:18,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        
        responsive:{
            0:{
                items:1
            },
            425:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })

    
  });






  