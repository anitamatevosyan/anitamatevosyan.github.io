document.querySelector("#button-more").addEventListener("click", () => {
  document.querySelector(".info__text-third").style.display = "inline";
  document.querySelector(".info__text-second").style.display = "inline";
  document.querySelector("#button-min").style.display = "flex";
  document.querySelector("#button-more").style.display = "none";
});
document.querySelector("#button-min").addEventListener("click", () => {
  document.querySelector(".info__text-third").style.removeProperty("display");
  document.querySelector(".info__text-second").style.removeProperty("display");
  document.querySelector("#button-min").style.display = "none";
  document.querySelector("#button-more").style.display = "flex";
});
