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

/* Fallback for Scroll-Driven Animations */
if (!CSS.supports('animation-timeline: scroll()')) {
  const scrollSections = document.querySelectorAll('.scroll-section');

  window.addEventListener('scroll', () => {
    scrollSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visual = section.querySelector('.Visual picture');
      const textContent = section.querySelector('.text-content');

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Element is in viewport
        visual.style.opacity = 1;
        visual.style.transform = 'translateY(0)';
        textContent.style.opacity = 1;
      } else {
        // Element is out of viewport
        visual.style.opacity = 0;
        visual.style.transform = 'translateY(50%)';
        textContent.style.opacity = 0;
      }
    });
  });
}
