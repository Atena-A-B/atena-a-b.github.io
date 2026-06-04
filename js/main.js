// ── Shared JS for Atena's website ──

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Scroll-triggered fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Nav shadow on scroll
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.style.boxShadow = '0 4px 24px rgba(123, 44, 191, 0.14)';
    } else {
      nav.style.boxShadow = '0 2px 16px rgba(123, 44, 191, 0.08)';
    }
  });
});
