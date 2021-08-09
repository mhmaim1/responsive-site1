$(function(){
//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 1500,);
            return false;
        }
    }
});
 
    //Header Background
    $(window).scroll(function(){
      var scrolling= $(this).scrollTop();

      if(scrolling>50){
        $(".menu").addClass("menu_bg");
      }
      else{
        $(".menu").removeClass("menu_bg");
      }
    });

    $(window).scroll(function(){
      var scrolling = $(this).scrollingTop();

      if(scrolling > 100){
        $(".navbar").addClass("menu_bg");
      }else{
        $(".navbar").removeClass("menu_bg");
      }
  });

//Banner Slick Part
    $('.banner_main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        dots:false,
        prevArrow:".previous",
        nextArrow:".next",
      });

//Testimonial Slick Part
      $('.testimonial_all').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
         
        ]
      });
      
      //Works Mixitup Part
      var mixer = mixitup('.all_works');
});