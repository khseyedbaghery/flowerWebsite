///// my-button  /////////
$(".my-button").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );


 ///// owl-carousel  ////////// 
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    rtl:true,
    loop: true,
    margin:10,
    nav:false, // remove tag div by class: owl-nav
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

//// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

///// scrollspy
// $('[data-spy="scroll"]').each(function () {
//   var $spy = $(this).scrollspy('refresh')
// })


////////// wow
//At the document ready event
$(function(){
  new WOW().init(); 
});

// //also at the window load event
// $(window).on('load', function(){

//      new WOW().init(); 
// });