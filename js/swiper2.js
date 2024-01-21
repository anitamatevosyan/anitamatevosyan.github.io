swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  spaceBetween: 16,
  //   centeredSlides: true,
  keyboard: true,
  observer: true,
  observeParents: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});

//кнопки свернуть,посмотреть еще. 2 свайпер
const viewMoreBtn2 = document.getElementById("button-more__id2");
const navigationContainer2 = document.querySelector("#main__navigation3");
const HideBtn2 = document.getElementById("button-more2__id2");

viewMoreBtn2.addEventListener("click", () => {
  viewMoreBtn2.style.display = "none";
  HideBtn2.style.display = "flex";
  navigationContainer2.style.overflow = "visible";
  navigationContainer2.style.height = "fit-content";
});

HideBtn2.addEventListener("click", () => {
  HideBtn2.style.display = "none";
  viewMoreBtn2.style.display = "flex";
  navigationContainer2.style.overflow = "hidden";
  navigationContainer2.style.height = "168px";
});
