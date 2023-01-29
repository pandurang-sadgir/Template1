var menus = document.getElementById('menu-bar');
var bar = document.getElementById('menu-btn');
var close = document.getElementById('close-btn');

if(bar) {
  bar.addEventListener('click',()=>{
  menus.classList.add('active');
  });
}


if(close) {
  close.addEventListener('click',()=>{
  menus.classList.remove('active');
  });
}


document.onclick = function (clickEvent) {
  if(!bar.contains(clickEvent.target)){
  menus.classList.remove('active');
  }
}

// $(document).ready(function(){
//     $(window).scroll(function () { 

//         if(window.scrollY>20){

//             $('.root-container').addClass('sticky');
//             // $('.root-container .menu li a').css('color','white');
//         }else{
//             $('.root-container').removeClass('sticky');

//         }

//         if(this.scrollY >500){
//             $('.scroll-up-button').addClass('show');
//         }else{
//             $('.scroll-up-button').removeClass('show');

//         }
//     });


    

//     $('.scroll-up-button').click(()=>{
//         $('html').animate({scrollTop:0});
//     });


//     $('.menu-btn').click(function () { 
//         $('.root-container .navbar-content .menu').toggleClass('active');
//         //Cross icons
//         $('.root-container .navbar-content .menu-btn i').toggleClass('active');
        
//     });


//     // Note : we can add '.menu-btn' class to an anchor tag ,to achieve same functinality. 
    
//     $('.navbar-content .menu li a').click(function(){
//         $('.root-container .navbar-content .menu').removeClass('active');
//         $('.root-container .navbar-content .menu-btn i').removeClass('active');
            

//     });


//     // owl carosuel styling 
//     $('.carousel').owlCarousel({
//         margin:20,
//         loop:true,
//         autoplay:true,
//         autoplayTimeout:2000,
//         autoplayHoverPause:true,
//         responsiveClass:true,
//         smartSpeed:500,
//         responsive:{
//             0:{
//                 items:1,
//                 nav:false
//             },
//             600:{
//                 items:2,
//                 nav:false
//             },
//             1000:{
//                 items:3,
//                 nav:false
//             }
//         }
//     })


//     // Typed text animation 


//     let typed= new Typed('#text-animation',{
//         strings: ['Youtuber', 'Developer', 'Blogger','Designer','Freelancer'],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop:true,
//     })
// });


  
  