const swiper = new Swiper('.testimonialSection__swiperContainer', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  autoplay: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
        delay: 5000,
        disableOnInteraction: false
  }
 
});
