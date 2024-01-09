// swiper

var banana = new Swiper(".reviewSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      // clickable: true,
      type: "fraction",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

  });