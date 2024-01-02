$(".fade").slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    
    const fadeSlickInstance = $('.fade').slick('getSlick');
    const numberOfFadeSlides = fadeSlickInstance.slideCount;
    console.log('Number of slides for .fade carousel:', numberOfFadeSlides);
  });
  