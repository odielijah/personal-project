// HEADER SCROLL
const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll',()=> {
  const currentScroll = window.scrollY

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up")
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
  }

  lastScroll = currentScroll;
})

// RESPONSIVE NAVBAR
const primaryNav = document.querySelector(".lower-part");
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener("click", ()=> {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);


  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});