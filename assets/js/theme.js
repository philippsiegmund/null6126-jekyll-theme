---
permalink: /assets/js/theme.js
---
document.querySelector(".menu-icon").addEventListener("click", function () {
  console.log("menu-icon clicked");
  const menu = document.querySelector(".navbar");
  menu.classList.toggle("active");
});
