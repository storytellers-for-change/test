/* Import Open Props */
@import 'https://unpkg.com/open-props';

/* Global Styles */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-image: linear-gradient(
    180deg,
    oklch(63% 0.1 204) 0%,
    oklch(98% 0.01 170) 100%
  );
  color: var(--gray-10);
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: inherit;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Navigation Menu */
nav {
  position: fixed;
  width: 100%;
  padding: var(--size-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(31, 32, 41, 0.8);
  z-index: 1000;
}

nav .logo h1 {
  font-size: var(--font-size-6);
  color: white;
}

.btn-custom {
  background: none;
  border: none;
  cursor: pointer;
  color: white;
}

.btn-custom svg {
  width: var(--size-7);
  height: var(--size-7);
}

.menu {
  display: none;
}

.menu.open {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(31, 32, 41, 0.95);
  z-index: 999;
  padding: var(--size-5);
}

.menu header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.close-menu {
  background: none;
  border: none;
  cursor: pointer;
  color: white;
}

.close-menu svg {
  width: var(--size-7);
  height: var(--size-7);
}

.menu ul {
  margin-top: var(--size-6);
}

.menu ul li {
  margin-bottom: var(--size-5);
}

.menu ul li a {
  font-size: var(--font-size-6);
  color: white;
  text-transform: uppercase;
}

/* Sections */
.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--size-6) var(--size-4);
  position: relative;
}

.section:nth-child(even) {
  background: rgba(255, 255, 255, 0.1);
}

.content {
  max-width: var(--size-content-3);
  text-align: center;
}

.parallax {
  background-attachment: fixed;
}

.shadow-title {
  position: absolute;
  top: 10%;
  left: 5%;
  font-size: calc(var(--font-size-fluid-5) * 4);
  color: rgba(255, 255, 255, 0.05);
  z-index: -1;
}

.parallax-top-shadow {
  animation: parallax-scroll 10s infinite;
}

/* Footer */
footer {
  text-align: center;
  padding: var(--size-5);
  background: rgba(31, 32, 41, 0.8);
  color: white;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .shadow-title {
    font-size: calc(var(--font-size-fluid-4) * 3);
  }

  nav .logo h1 {
    font-size: var(--font-size-5);
  }

  .menu ul li a {
    font-size: var(--font-size-5);
  }
}

/* Parallax Animation */
@keyframes parallax-scroll {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15%);
  }
  100% {
    transform: translateY(0);
  }
}
