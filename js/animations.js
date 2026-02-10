const observerOptions = { threshold: 0.15 };

const elements = document.querySelectorAll(
  '.papastico-section, .papastico-card'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

elements.forEach(el => {
  el.classList.add('fade-section');
  observer.observe(el);
});
