const swiper = new Swiper(".hero-swiper", {
  loop: true,
  centeredSlides: true,
  speed: 1200,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      opacity: 0,
      translate: ["-100%", 0, -400],
      scale: 0.9,
    },
    next: {
      opacity: 0,
      translate: ["100%", 0, -400],
      scale: 0.9,
    },
  },
});

const swiperReports= new Swiper('.reports__swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

const headerNavLinks = document.querySelectorAll('.header-nav-item a');
const burgerMenu = document.getElementById('burger-menu');
const navWrapper = document.querySelector('.header-nav-wrapper');
const closeBurger = document.querySelector('.close-btn');

burgerMenu.addEventListener('click', function() {
  navWrapper.classList.toggle('open');
});

closeBurger.addEventListener('click', () => {
  navWrapper.classList.remove('open');
});
  
headerNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    navWrapper.classList.remove('open');
  });
});
  