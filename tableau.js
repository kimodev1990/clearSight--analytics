const consultClick = document.getElementById("consult-click");
const consulting = document.getElementById("consulting-popup-situation");
const solutionsClick = document.getElementById("solutions-click");
const solutions = document.getElementById("solutions-popup-situation");
const hamburger = document.getElementById("menu-hamburger-mobile");
const menuMobile = document.getElementById("menu-content-mobile");
const consultPopMobile = document.getElementById("consult-showpop-up-mobile");
const consultClickMobile = document.getElementById("consult-click-mobile");
const solutionsClickMobile = document.getElementById("solutions-click-mobile");
const solutionsPopMobile = document.getElementById(
  "solutions-showpop-up-mobile"
);

consultClick.addEventListener("click", () => {
  consulting.classList.toggle("hidden");
});
solutionsClick.addEventListener("click", () => {
  solutions.classList.toggle("hidden");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  menuMobile.classList.toggle("hidden");
  menuMobile.setAttribute("id", "fading");
  if (!consultPopMobile.classList.contains("hidden")) {
    consultPopMobile.classList.add("hidden");
  }
  if (!solutionsPopMobile.classList.contains("hidden")) {
    solutionsPopMobile.classList.add("hidden");
  }
});

consultClickMobile.addEventListener("click", () => {
  consultPopMobile.classList.toggle("hidden");
});

solutionsClickMobile.addEventListener("click", () => {
  solutionsPopMobile.classList.toggle("hidden");
});
