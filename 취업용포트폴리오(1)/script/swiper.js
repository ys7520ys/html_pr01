// 데스크탑 스와이퍼 동작
var swiper1 = new Swiper(".mySwiper", {
  speed: 1500, 
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".mySwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mySwiper .swiper-button-next",
    prevEl: ".mySwiper .swiper-button-prev",
  },
});

// 모바일 스와이퍼 동작작
var swiper2 = new Swiper(".swiper_mobile", {
  speed: 300,
  pagination: {
    el: ".swiper_mobile .swiper-pagination",
  }
});