/* ──────────────────────────────────────────────────────
   ZypherixLabs Page Loader v1.0
   KMFG Solutions
────────────────────────────────────────────────────── */

(function () {

  // Inject loader styles
  const style = document.createElement('style');
  style.textContent = `
    #zl-loader {
      position: fixed; inset: 0; z-index: 99990;
      background: #080808;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1),
                  transform 0.6s cubic-bezier(0.16,1,0.3,1);
    }
    #zl-loader.fade-out {
      opacity: 0;
      pointer-events: none;
    }
    .zl-loader-logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 48px; letter-spacing: 6px;
      color: #fff; margin-bottom: 6px;
      opacity: 0; transform: translateY(16px);
      animation: zl-rise 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s forwards;
    }
    .zl-loader-logo span { color: #CC0000; }
    .zl-loader-tagline {
      font-family: 'Inter', sans-serif;
      font-size: 10px; font-weight: 600;
      letter-spacing: 0.24em; text-transform: uppercase;
      color: rgba(255,255,255,0.3); margin-bottom: 48px;
      opacity: 0;
      animation: zl-rise 0.6s cubic-bezier(0.16,1,0.3,1) 0.35s forwards;
    }
    .zl-loader-bar-wrap {
      width: 200px; height: 1px;
      background: rgba(255,255,255,0.08);
      position: relative; overflow: hidden;
      opacity: 0;
      animation: zl-rise 0.4s ease 0.5s forwards;
    }
    .zl-loader-bar {
      position: absolute; top: 0; left: 0;
      height: 100%; width: 0%;
      background: #CC0000;
      transition: width 0.1s linear;
    }
    .zl-loader-pct {
      font-family: 'Inter', sans-serif;
      font-size: 11px; font-weight: 600;
      letter-spacing: 0.14em; color: #CC0000;
      margin-top: 14px;
      opacity: 0;
      animation: zl-rise 0.4s ease 0.5s forwards;
    }
    .zl-loader-credit {
      position: absolute; bottom: 24px;
      font-family: 'Inter', sans-serif;
      font-size: 10px; letter-spacing: 0.12em;
      color: rgba(255,255,255,0.15);
      opacity: 0;
      animation: zl-rise 0.4s ease 0.8s forwards;
    }
    .zl-loader-credit span { color: #CC0000; }
    @keyframes zl-rise {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // Build loader DOM
  const loader = document.createElement('div');
  loader.id = 'zl-loader';
  loader.innerHTML = `
    <div class="zl-loader-logo">KM<span>FG</span></div>
    <p class="zl-loader-tagline">Value in Solutions</p>
    <div class="zl-loader-bar-wrap">
      <div class="zl-loader-bar" id="zlBar"></div>
    </div>
    <p class="zl-loader-pct" id="zlPct">0%</p>
    <p class="zl-loader-credit">Built by <span>ZypherixLabs</span></p>
  `;
  document.body.prepend(loader);
  document.body.style.overflow = 'hidden';

  // Animate progress bar
  const bar = document.getElementById('zlBar');
  const pct = document.getElementById('zlPct');
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 18 + 4;
    if (progress >= 90) { clearInterval(interval); progress = 90; }
    bar.style.width  = progress + '%';
    pct.textContent  = Math.floor(progress) + '%';
  }, 120);

  // On page load complete
  window.addEventListener('load', () => {
    clearInterval(interval);
    bar.style.width  = '100%';
    pct.textContent  = '100%';
    bar.style.transition = 'width 0.3s ease';

    setTimeout(() => {
      loader.classList.add('fade-out');
      document.body.style.overflow = '';
      setTimeout(() => loader.remove(), 700);
    }, 400);
  });

})();