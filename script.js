(function () {
  'use strict';

  // Scroll Parallax Functionality
  function scrollBanner() {
    document.addEventListener('scroll', function () {
      const scrollPos = window.scrollY;
      document.querySelector('.parallax-fade-top').style.top = scrollPos / 2 + 'px';
      document.querySelector('.parallax-fade-top').style.opacity = 1 - scrollPos / 700;

      document.querySelector('.parallax-00').style.top = scrollPos / -3.5 + 'px';
      document.querySelector('.parallax-01').style.top = scrollPos / -2.8 + 'px';
      document.querySelector('.parallax-top-shadow').style.top = scrollPos / -2 + 'px';
    });
  }
  scrollBanner();

  // Scroll to top functionality
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('active-arrow');
    } else {
      scrollToTopBtn.classList.remove('active-arrow');
    }
  });

  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
})();
