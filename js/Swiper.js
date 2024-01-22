const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  //   centeredSlides: true,
  keyboard: true,
  observer: true,
  observeParents: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//кнопки свернуть,посмотреть еще.
const viewMoreBtn = document.getElementById("button-more__id");
const navigationContainer = document.querySelector("#main__navigation");
const HideBtn = document.getElementById("button-more2__id");

viewMoreBtn.addEventListener("click", () => {
  viewMoreBtn.style.display = "none";
  HideBtn.style.display = "flex";
  navigationContainer.style.overflow = "visible";
  navigationContainer.style.height = "fit-content";
});

HideBtn.addEventListener("click", () => {
  HideBtn.style.display = "none";
  viewMoreBtn.style.display = "flex";
  navigationContainer.style.overflow = "hidden";
  navigationContainer.style.height = "168px";
});

// кнопка бургер
document.querySelector(".nav__burger").addEventListener("click", function () {
  document.querySelector(".burger-menu").classList.toggle("open");
});

document
  .querySelector("#close-sidebar__btn")
  .addEventListener("click", function () {
    document.querySelector(".burger-menu").classList.toggle("open");
  });
document
  .querySelector(".burger_background")
  .addEventListener("click", function () {
    document.querySelector(".burger-menu").classList.toggle("open");
  });
