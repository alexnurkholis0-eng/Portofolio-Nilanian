const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('main .slide');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const target = link.getAttribute('href');
        const isActive = target === `#${entry.target.id}`;
        link.classList.toggle('active', isActive);
      });
    });
  },
  {
    rootMargin: '-20% 0px -45% 0px',
    threshold: 0.2,
  }
);

sections.forEach((section) => observer.observe(section));
