var swiper = new Swiper(".partnerSwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    pagination: {
      el: ".swiper-pagination",
      // clickable: true,
      type: "fraction",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 32,
      }
    },
  });