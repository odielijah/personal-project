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

// BACKGROUND BLUR ON CLICK + OVERFLOW FIX
function toggle() {
  var blur = document.getElementById('blur');
  blur.classList.toggle("active")
}

// function lockScroll() {
//   if ($('body').hasClass('lock-scroll')) {
//       $('body').removeClass('lock-scroll');
//   } else {
//       $('body').addClass('lock-scroll');
//   }
// };

function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
  window.onscroll=function(){};
}

// SEARCH 
let searchBtn = document.querySelector(".searchBtn");
let closeBtn = document.querySelector(".closeBtn");
let searchBox = document.querySelector(".searchbox");

searchBtn.onclick = function() {
  searchBox.classList.add('active');
  closeBtn.classList.add('active');
  searchBtn.classList.add('active');
}

closeBtn.onclick = function() {
  searchBox.classList.remove('active');
  closeBtn.classList.remove('active');
  searchBtn.classList.remove('active');
}

// CAROUSEL SLIDER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //NEW ARRIVALS & BESTSELLER TABS
  const tabs= document.querySelectorAll('.tab-btn');
  const all_content= document.querySelectorAll('.content2');

  tabs.forEach((tab, index)=>{
    tab.addEventListener('click', (e)=>{
      tabs.forEach(tab=>{tab.classList.remove('active')}); 
      tab.classList.add('active');

      var line=document.querySelector('.line');
      line.style.width = e.target.offsetWidth + "px";
      line.style.left = e.target.offsetLeft + "px";

      all_content.forEach(content=>{content.classList.remove('active')});
      all_content[index].classList.add('active');
    })
  })
