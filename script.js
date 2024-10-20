// Menu Functionality
const openMenuBtn = document.querySelector('#open-menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('#menu');

function openMenu() {
  menu.classList.add('open');
  window.addEventListener('keyup', pressESC);
}

function closeMenu() {
  menu.classList.remove('open');
  window.removeEventListener('keyup', pressESC);
}

openMenuBtn.addEventListener('click', () => {
  handleViewTransition(openMenu);
});

closeMenuBtn.addEventListener('click', () => {
  handleViewTransition(closeMenu);
});

function handleViewTransition(callback) {
  if (!document.startViewTransition) callback();
  else document.startViewTransition(() => callback());
}

// Close Menu by Pressing Escape (ESC)
function pressESC(e) {
  if (e.key === 'Escape') {
    handleViewTransition(closeMenu);
  }
}

// Image Animation on Scroll
const sections = document.querySelectorAll('.content-section');
const images = document.querySelectorAll('.image');

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
