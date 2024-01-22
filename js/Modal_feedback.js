IMask(document.getElementById("tel"), {
  mask: "+{7}(000)000-00-00",
});

// кнопка бургер
const juim = document.querySelector(".feedback");
document
  .querySelector(".main_button-Feedback")
  .addEventListener("click", function () {
    const els = document.querySelectorAll(".open");
    if (els.length) {
      for (const el of els) {
        el && !el.classList.contains("feedback") && el.classList.toggle("open");
      }
    }
    juim.classList.toggle("open");
  });

document.querySelector(".close_btn").addEventListener("click", function () {
  const els = document.querySelectorAll(".open");
  if (els.length) {
    for (const el of els) {
      el && !el.classList.contains("feedback") && el.classList.toggle("open");
    }
  }
  juim.classList.toggle("open");
});
// document
//   .querySelector(".burger_background")
//   .addEventListener("click", function () {
//     document.querySelector(".burger-menu").classList.toggle("open");
//   });

const juimb = document.querySelector(".feedback");
document
  .querySelector("#nav__chat_tabletid")
  .addEventListener("click", function () {
    const els = document.querySelectorAll(".open");
    if (els.length) {
      for (const el of els) {
        el && !el.classList.contains("feedback") && el.classList.toggle("open");
      }
    }
    juimb.classList.toggle("open");
  });

const juimbb = document.querySelector(".feedback");
document
  .querySelector(".burger_feedback")
  .addEventListener("click", function () {
    const els = document.querySelectorAll(".open");
    if (els.length) {
      for (const el of els) {
        el && !el.classList.contains("feedback") && el.classList.toggle("open");
      }
    }
    juimbb.classList.toggle("open");
  });
