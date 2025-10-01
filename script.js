// script.js
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 80;
  navLinks.forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});