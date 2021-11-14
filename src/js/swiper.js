const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
    // type: 'custom',
    // bulletClass: 'swiper_pagination_img',
  },
  autoplay: {
    delay: 6000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  effect: 'flip',
  flipEffect: {
    slideShadows: true,
    limitRotation: true,
  },
});