// ── Navbar scroll ────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ── Mobile nav ───────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ── Scroll reveal ────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal, .reveal-left');
const observer  = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ── Counter animation ────────────────────────────────
function animateCount(el) {
  const target = +el.dataset.count;
  const suffix = el.dataset.count === '100' ? '%' : '+';
  const dur    = 1600;
  const start  = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / dur, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + (progress < 1 ? '' : suffix);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(step);
}
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCount(e.target);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));

// ── Hero text reveal on load ─────────────────────────
document.querySelectorAll('.hero-content > *').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }));
});