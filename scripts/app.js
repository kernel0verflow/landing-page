// Globals
const invertBtn = document.querySelector(".invert-img");
const bodyTag = document.querySelector(".body");

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
