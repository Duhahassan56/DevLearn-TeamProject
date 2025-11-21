// main.js

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav"); // النافبار الأساسي

  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});