/* ──────────────────────────────────────────────────────
   ZypherixLabs Theme System v1.0
   KMFG Solutions
────────────────────────────────────────────────────── */

(function () {

  const STORAGE_KEY = 'kmfg_theme';
  const body        = document.body;

  // ── Apply saved theme immediately (no flash) ────────
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light') body.classList.add('light-mode');

  // ── Build toggle ────────────────────────────────────
  function buildToggle() {
    const wrap   = document.createElement('div');
    wrap.className = 'theme-toggle-wrap';
    wrap.innerHTML = `
      <span class="theme-icon moon" title="Dark mode">🌙</span>
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle light/dark mode"></button>
      <span class="theme-icon sun" title="Light mode">☀️</span>
    `;

    // Insert into nav — before hamburger
    const hamburger = document.getElementById('hamburger');
    const navInner  = document.querySelector('.nav-inner');
    if (hamburger && navInner) {
      navInner.insertBefore(wrap, hamburger);
    }

    // Toggle handler
    document.getElementById('themeToggle').addEventListener('click', () => {
      body.classList.toggle('light-mode');
      const current = body.classList.contains('light-mode') ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, current);
    });
  }

  // ── Run after DOM ready ─────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildToggle);
  } else {
    buildToggle();
  
  }

})();
function applyTheme(theme) {
  const icon = document.getElementById('themeIcon');
  if (theme === 'light') {
    document.body.classList.add('light-mode');
    if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
  } else {
    document.body.classList.remove('light-mode');
    if (icon) { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); }
  }
}