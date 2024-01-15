// customer review
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

//hero banner
const heroSwiper = new Swiper(".heroSwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// featured collection
var swiper = new Swiper(".featuredSwiper", {
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

// Our partners
var partnerSwiper = new Swiper(".partnerSwiper", {
  loop: true,
  grabCursor: true,
  // centeredSlides: true,
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
      slidesPerView: 1,
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
    // 1200: {
    //   slidesPerView: 5,
    //   spaceBetween: 16,
    // }
  },
});

 // Initialize main slider with thumbs navigation
 var productSwiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  
});
var swiper2 = new Swiper(".mySwiper2", {
  zoom: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productSwiper,
  },
});