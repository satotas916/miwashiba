var swiper = new Swiper(".c-kv", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: 'fade',
  loop: true,
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
    nextEl: ".p-gallery-game__next",
    prevEl: ".p-gallery-game__prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
