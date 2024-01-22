const swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: "auto",
  spaceBetween: 16,
  //   centeredSlides: true,
  keyboard: true,
  observer: true,
  observeParents: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
});
