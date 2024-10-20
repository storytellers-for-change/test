// Menu Functionality
const openMenuBtn = document.querySelector('#open-menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('#menu');

function openMenu() {
  menu.classList.add('open');
}

function closeMenu() {
  menu.classList.remove('open');
}

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

// Image Animation on Scroll
const sections = document.querySelectorAll('.content-section');
const images = document.querySelectorAll('.image');
const imageContainer = document.querySelector('.image-container');

window.addEventListener('scroll', () => {
  let index = 0;
  sections.forEach((section, i) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2) {
      index = i;
    }
  });

  images.forEach((img, i) => {
    if (i === index) {
      img.style.opacity = 1;
    } else {
      img.style.opacity = 0;
    }
  });
});
