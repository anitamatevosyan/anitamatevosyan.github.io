const element = document.getElementById("tel2");
const maskOptions = {
  mask: "+{7}(000)000-00-00",
};
const mask = IMask(element, maskOptions);

// кнопка бургер
const juim1 = document.querySelector(".feedback2");
document
  .querySelector(".main_button-call")
  .addEventListener("click", function () {
    const els = document.querySelectorAll(".open");
    if (els.length) {
      for (const el of els) {
        el &&
          !el.classList.contains("feedback2") &&
          el.classList.toggle("open");
      }
    }
    juim1.classList.toggle("open");
  });

document.querySelector(".close_btn2").addEventListener("click", function () {
  const els = document.querySelectorAll(".open");
  if (els.length) {
    for (const el of els) {
      el && !el.classList.contains("feedback2") && el.classList.toggle("open");
    }
  }
  juim1.classList.toggle("open");
});
// document
//   .querySelector(".burger_background")
//   .addEventListener("click", function () {
//     document.querySelector(".burger-menu").classList.toggle("open");
//   });

const juimbc = document.querySelector(".feedback2");
document
  .querySelector("#nav__call_tabletid")
  .addEventListener("click", function () {
    const els = document.querySelectorAll(".open");
    if (els.length) {
      for (const el of els) {
        el &&
          !el.classList.contains("feedback2") &&
          el.classList.toggle("open");
      }
    }
    juimbc.classList.toggle("open");
  });
