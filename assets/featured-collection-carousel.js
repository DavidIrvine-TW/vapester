$("#slick-hero").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    
    const fadeSlickInstance = $('.fade').slick('getSlick');
    const numberOfFadeSlides = fadeSlickInstance.slideCount;
    console.log('Number of slides for .fade carousel:', numberOfFadeSlides);
  });
  