$(document).ready(function(){
    $(window).scroll(function () { 

        if(window.scrollY>20){

            $('.root-container').addClass('sticky');
            // $('.root-container .menu li a').css('color','white');
        }else{
            $('.root-container').removeClass('sticky');

        }
    });


    $('.menu-btn').click(function () { 
        $('.root-container .navbar-content .menu').toggleClass('active');
        //Cross icons
        $('.root-container .navbar-content .menu-btn i').toggleClass('active');
        
    });


    // owl carosuel styling 
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:true,
        smartSpeed:500,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })
    
});


  
  