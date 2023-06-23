$(window).scroll(function(){
  var pixel = $(window).scrollTop();

  if(pixel > 200){
    $('#main_menu').addClass('fixd_menu');
  }
  else{
    $('#main_menu').removeClass('fixd_menu')
  }
})
var typed2 = new Typed('#typed2', {
    strings: ['web Designer',
    'Developer'],
     cursorChar: '_',
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });

  var mixer = mixitup('.content');


  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();


  $(document).ready(function(){
    $('#bar1').barfiller();
});
  $(document).ready(function(){
    $('#bar2').barfiller();
});
  $(document).ready(function(){
    $('#bar3').barfiller();
});



$('.slider_1').slick({
  dots: false,
  infinite: true,
  speed: 30,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
