const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const header = document.querySelector('.site-header');
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach((link) => {
          link.style.color =
            link.getAttribute('href') === `#${entry.target.id}`
              ? 'var(--white)'
              : '';
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((section) => observer.observe(section));

fetch('week.json')
  .then((response) => (response.ok ? response.json() : Promise.reject()))
  .then((week) => {
    const art = document.querySelector('.hero-week-art');
    const label = document.querySelector('.hero-week-label');
    if (art && week.image) art.src = week.image;
    if (label && week.label) label.textContent = week.label;
  })
  .catch(() => {});