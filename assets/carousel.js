// hero-banner
$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $(document).ready(function() {
    $('.hamburger-menu').on('click', function() {
      $(this).toggleClass('cross');
    });
  });
  