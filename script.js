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

// Parallax Effect
window.addEventListener('scroll', function () {
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach(function (element) {
    let offset = window.pageYOffset;
    element.style.backgroundPositionY = offset * 0.5 + 'px';
  });
});
