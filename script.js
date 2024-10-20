document.addEventListener('DOMContentLoaded', function() {
  // Parallax Effect
  window.addEventListener('scroll', function() {
    var scrollPos = window.pageYOffset;
    var parallaxTitle = document.querySelector('.parallax-title');
    parallaxTitle.style.transform = 'translateY(' + (scrollPos * -0.5) + 'px)';
    parallaxTitle.style.opacity = 1 - (scrollPos / 700);
  });

  // Case Study Interaction
  var menuItems = document.querySelectorAll('.case-study-menu li');
  var caseStudyItems = document.querySelectorAll('.case-study-items li');

  menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('mouseenter', function() {
      var target = this.getAttribute('data-target');

      // Remove active class from all menu items
      menuItems.forEach(function(item) {
        item.classList.remove('active');
      });
      this.classList.add('active');

      // Show corresponding case study item
      caseStudyItems.forEach(function(item) {
        if (item.id === target) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    });
  });

  // Initialize first item as active
  menuItems[0].classList.add('active');
  caseStudyItems[0].classList.add('active');

  // Scroll to Top Functionality
  var scrollToTopBtn = document.querySelector('.scroll-to-top');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('active-arrow');
    } else {
      scrollToTopBtn.classList.remove('active-arrow');
    }
  });

  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Custom Cursor
  var cursor = document.getElementById('cursor');

  document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  var hoverTargets = document.querySelectorAll('.hover-target');

  hoverTargets.forEach(function(target) {
    target.addEventListener('mouseover', function() {
      cursor.classList.add('hover');
    });
    target.addEventListener('mouseout', function() {
      cursor.classList.remove('hover');
    });
  });
});
