var swiper = new Swiper(".c-kv", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var galleryThumbs = new Swiper(".p-gallery-game__thumbnail", {
  spaceBetween: 10,
  slidesPerView: 6,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var galleryTop = new Swiper(".p-gallery-game__slide", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
