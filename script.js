document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll reveal animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealElements = document.querySelectorAll('.timeline-item, .skills-category, .section-header, .project-card');

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Set initial hidden styles and observe
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    revealOnScroll.observe(el);
  });

  // Header scroll appearance
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.padding = '0.5rem 0';
      header.style.backgroundColor = 'rgba(11, 15, 25, 0.85)';
      header.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.3)';
    } else {
      header.style.padding = '0';
      header.style.backgroundColor = 'rgba(19, 26, 44, 0.6)';
      header.style.boxShadow = 'none';
    }
  });

  // Delightful console log message
  console.log(
    '%cHello, curious developer! 🚀 Thanks for checking out my CV. Let\'s build something great together!',
    'color: #6366f1; font-size: 14px; font-weight: bold; padding: 8px; border-radius: 4px; background: #131a2c;'
  );
});
