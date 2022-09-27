// Globals
const invertBtn = document.querySelector(".invert-img");
const hamburgerMenu = document.querySelector(".hamburger");
const bodyTag = document.querySelector(".body");
const navList = document.querySelector(".nav-list");

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") == "darkmode") {
    document.querySelector("body").classList.add("darkmode");
  }
});

invertBtn.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("darkmode");
  if (localStorage.getItem("theme") == "darkmode") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "darkmode");
  }
});

hamburgerMenu.addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("mobile-menu-click");
});
