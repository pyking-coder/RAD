/* ──────────────────────────────────────────────────────
   ZypherixLabs Launch Countdown System v1.0
   KMFG Solutions — Private Use Only
────────────────────────────────────────────────────── */

(function () {

  // ── CONFIG ─────────────────────────────────────────
  const LAUNCH_CONFIG = {
    adminPassword: 'ZL_LAUNCH_2026',   // Your private admin password
    storageKey:    'zl_launch_kmfg',   // LocalStorage key
    siteName:      'KMFG Solutions',
    accentColor:   '#CC0000',
  };

  // ── STYLES ─────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    /* Admin modal */
    #zl-launch-modal {
      position: fixed; inset: 0; z-index: 99995;
      background: rgba(0,0,0,0.95);
      display: flex; align-items: center; justify-content: center;
      opacity: 0; pointer-events: none;
      transition: opacity 0.3s;
      font-family: 'Inter', sans-serif;
      backdrop-filter: blur(8px);
    }
    #zl-launch-modal.open {
      opacity: 1; pointer-events: all;
    }
    #zl-launch-panel {
      width: 90%; max-width: 520px;
      background: #111; border: 1px solid rgba(204,0,0,0.25);
      padding: 40px; position: relative;
    }
    #zl-launch-panel::before {
      content: '';
      position: absolute; top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, #CC0000, transparent);
    }
    .zl-lc-agency {
      font-size: 10px; font-weight: 600;
      letter-spacing: 0.2em; text-transform: uppercase;
      color: #CC0000; margin-bottom: 20px;
    }
    .zl-lc-title {
      font-size: 26px; font-weight: 700;
      color: #fff; margin-bottom: 28px; line-height: 1.1;
    }
    .zl-lc-label {
      font-size: 10px; font-weight: 600;
      letter-spacing: 0.14em; text-transform: uppercase;
      color: #666; margin-bottom: 8px; display: block;
    }
    .zl-lc-input {
      width: 100%; padding: 12px 14px;
      background: #0a0a0a; border: 1px solid #222;
      color: #fff; font-size: 13px;
      font-family: 'Inter', sans-serif;
      outline: none; margin-bottom: 16px;
      transition: border-color 0.25s;
      box-sizing: border-box;
    }
    .zl-lc-input:focus { border-color: #CC0000; }
    .zl-lc-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .zl-lc-btn {
      padding: 13px 20px;
      font-size: 11px; font-weight: 600;
      letter-spacing: 0.12em; text-transform: uppercase;
      border: none; cursor: pointer;
      font-family: 'Inter', sans-serif;
      transition: all 0.2s;
    }
    .zl-lc-btn-primary { background: #CC0000; color: #fff; }
    .zl-lc-btn-primary:hover { background: #E53333; }
    .zl-lc-btn-ghost {
      background: transparent; color: #666;
      border: 1px solid #222;
    }
    .zl-lc-btn-ghost:hover { border-color: #444; color: #fff; }
    .zl-lc-error {
      font-size: 12px; color: #ff4444;
      margin-bottom: 12px; display: none;
    }
    .zl-lc-divider {
      height: 1px; background: #1a1a1a;
      margin: 24px 0;
    }
    .zl-lc-close {
      position: absolute; top: 16px; right: 16px;
      background: none; border: none;
      color: #444; font-size: 18px; cursor: pointer;
      transition: color 0.2s;
    }
    .zl-lc-close:hover { color: #fff; }

    /* Status display */
    .zl-lc-status {
      background: #0a0a0a; border: 1px solid #1a1a1a;
      padding: 16px; margin-bottom: 20px;
      display: none;
    }
    .zl-lc-status.visible { display: block; }
    .zl-lc-status-label {
      font-size: 10px; font-weight: 600;
      letter-spacing: 0.14em; text-transform: uppercase;
      color: #CC0000; margin-bottom: 8px;
    }
    .zl-lc-status-val {
      font-size: 13px; color: #fff; line-height: 1.6;
    }

    /* Countdown overlay — shown to everyone */
    #zl-countdown {
      position: fixed; inset: 0; z-index: 99990;
      background: #080808;
      display: none;
      flex-direction: column;
      align-items: center; justify-content: center;
      font-family: 'Inter', sans-serif;
      text-align: center; padding: 40px;
    }
    #zl-countdown.active { display: flex; }
    .zl-cd-label {
      font-size: 10px; font-weight: 600;
      letter-spacing: 0.24em; text-transform: uppercase;
      color: #CC0000; margin-bottom: 20px;
    }
    .zl-cd-site {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(32px, 6vw, 56px);
      letter-spacing: 4px; color: #fff;
      margin-bottom: 48px; line-height: 1;
    }
    .zl-cd-site span { color: #CC0000; }
    .zl-cd-grid {
      display: flex; gap: 4px;
      margin-bottom: 48px;
    }
    .zl-cd-unit {
      background: #111; border: 1px solid rgba(204,0,0,0.15);
      padding: 24px 20px; min-width: 90px; text-align: center;
    }
    .zl-cd-num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(40px, 8vw, 72px);
      color: #CC0000; line-height: 1; display: block;
    }
    .zl-cd-unit-label {
      font-size: 9px; font-weight: 600;
      letter-spacing: 0.18em; text-transform: uppercase;
      color: rgba(255,255,255,0.3); margin-top: 8px;
    }
    .zl-cd-msg {
      font-size: 14px; color: rgba(255,255,255,0.4);
      max-width: 400px; line-height: 1.7; margin-bottom: 32px;
      font-weight: 300;
    }
    .zl-cd-credit {
      font-size: 11px; color: rgba(255,255,255,0.15);
      letter-spacing: 0.1em;
    }
    .zl-cd-credit span { color: #CC0000; }

    /* Launch celebration */
    #zl-launch-celebrate {
      position: fixed; inset: 0; z-index: 99999;
      background: #080808;
      display: none; flex-direction: column;
      align-items: center; justify-content: center;
      font-family: 'Inter', sans-serif; text-align: center;
    }
    #zl-launch-celebrate.active { display: flex; }
    .zl-cel-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(48px, 10vw, 96px);
      letter-spacing: 4px; color: #fff;
      line-height: 1; margin-bottom: 16px;
      animation: zl-pulse 1s ease infinite alternate;
    }
    .zl-cel-title span { color: #CC0000; }
    @keyframes zl-pulse {
      from { opacity: 0.8; } to { opacity: 1; }
    }
    .zl-cel-sub {
      font-size: 16px; color: rgba(255,255,255,0.5);
      margin-bottom: 40px; font-weight: 300;
    }
    .zl-cel-btn {
      padding: 16px 40px; background: #CC0000;
      color: #fff; border: none; cursor: pointer;
      font-size: 12px; font-weight: 600;
      letter-spacing: 0.14em; text-transform: uppercase;
      font-family: 'Inter', sans-serif;
      transition: background 0.2s;
    }
    .zl-cel-btn:hover { background: #E53333; }

    @media (max-width: 640px) {
      .zl-cd-grid { gap: 2px; }
      .zl-cd-unit { min-width: 70px; padding: 16px 12px; }
      .zl-lc-row { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(style);

  // ── STATE ───────────────────────────────────────────
  let adminUnlocked = false;
  let countdownInterval = null;

  function getState() {
    try {
      return JSON.parse(localStorage.getItem(LAUNCH_CONFIG.storageKey)) || {};
    } catch { return {}; }
  }

  function setState(data) {
    localStorage.setItem(LAUNCH_CONFIG.storageKey, JSON.stringify({ ...getState(), ...data }));
  }

  // ── BUILD UI ────────────────────────────────────────
  // NOTE: no visible trigger button in the DOM at all — see the
  // "SECRET ACTIVATION" listener near the bottom of this file for
  // how the admin panel is opened.

  // Admin modal
  const modal = document.createElement('div');
  modal.id = 'zl-launch-modal';
  modal.innerHTML = `
    <div id="zl-launch-panel">
      <button class="zl-lc-close" id="zlLcClose">✕</button>
      <p class="zl-lc-agency">ZypherixLabs — Launch Control</p>
      <h2 class="zl-lc-title">KMFG Solutions<br>Launch System</h2>

      <!-- Auth screen -->
      <div id="zl-auth-screen">
        <span class="zl-lc-label">Admin Password</span>
        <input type="password" id="zl-admin-pw" class="zl-lc-input" placeholder="Enter admin password..." />
        <p class="zl-lc-error" id="zl-auth-error">Incorrect password.</p>
        <button class="zl-lc-btn zl-lc-btn-primary" id="zl-auth-btn" style="width:100%">Unlock</button>
      </div>

      <!-- Control screen -->
      <div id="zl-control-screen" style="display:none">
        <div class="zl-lc-status" id="zl-current-status">
          <p class="zl-lc-status-label">Current Launch Target</p>
          <p class="zl-lc-status-val" id="zl-status-val">No launch date set.</p>
        </div>

        <span class="zl-lc-label">Set Launch Date & Time</span>
        <input type="datetime-local" id="zl-launch-dt" class="zl-lc-input" />

        <span class="zl-lc-label">Countdown Message (shown to client)</span>
        <input type="text" id="zl-launch-msg" class="zl-lc-input"
          placeholder="Something exciting is coming..."
          value="The new KMFG Solutions website is launching soon. Stay tuned." />

        <div class="zl-lc-divider"></div>

        <div class="zl-lc-row">
          <button class="zl-lc-btn zl-lc-btn-primary" id="zl-start-btn">▶ Start Countdown</button>
          <button class="zl-lc-btn zl-lc-btn-ghost" id="zl-stop-btn">✕ Stop & Hide</button>
        </div>
        <div style="margin-top: 10px">
          <button class="zl-lc-btn zl-lc-btn-ghost" id="zl-launch-now-btn" style="width:100%; margin-top:8px; border-color: rgba(204,0,0,0.3); color: #CC0000;">
            🚀 LAUNCH NOW — Go Live
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Countdown overlay
  const cdOverlay = document.createElement('div');
  cdOverlay.id = 'zl-countdown';
  cdOverlay.innerHTML = `
    <p class="zl-cd-label">Coming Soon</p>
    <div class="zl-cd-site">KM<span>FG</span> SOLUTIONS</div>
    <div class="zl-cd-grid">
      <div class="zl-cd-unit"><span class="zl-cd-num" id="cd-days">00</span><p class="zl-cd-unit-label">Days</p></div>
      <div class="zl-cd-unit"><span class="zl-cd-num" id="cd-hours">00</span><p class="zl-cd-unit-label">Hours</p></div>
      <div class="zl-cd-unit"><span class="zl-cd-num" id="cd-mins">00</span><p class="zl-cd-unit-label">Minutes</p></div>
      <div class="zl-cd-unit"><span class="zl-cd-num" id="cd-secs">00</span><p class="zl-cd-unit-label">Seconds</p></div>
    </div>
    <p class="zl-cd-msg" id="cd-message">The new KMFG Solutions website is launching soon. Stay tuned.</p>
    <p class="zl-cd-credit">Built by <span>ZypherixLabs</span></p>
  `;
  document.body.appendChild(cdOverlay);

  // Launch celebration screen
  const celebrate = document.createElement('div');
  celebrate.id = 'zl-launch-celebrate';
  celebrate.innerHTML = `
    <div class="zl-cel-title">WE ARE<br><span>LIVE.</span></div>
    <p class="zl-cel-sub">KMFG Solutions is officially online.</p>
    <button class="zl-cel-btn" id="zl-cel-enter">Enter Site →</button>
  `;
  document.body.appendChild(celebrate);

  // ── COUNTDOWN LOGIC ────────────────────────────────
  function pad(n) { return String(Math.floor(n)).padStart(2, '0'); }

  function tickCountdown(target) {
    const now  = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      clearInterval(countdownInterval);
      cdOverlay.classList.remove('active');
      celebrate.classList.add('active');
      document.body.style.overflow = 'hidden';
      return;
    }

    const days  = diff / (1000 * 60 * 60 * 24);
    const hours = (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    const mins  = (diff % (1000 * 60 * 60)) / (1000 * 60);
    const secs  = (diff % (1000 * 60)) / 1000;

    document.getElementById('cd-days').textContent  = pad(days);
    document.getElementById('cd-hours').textContent = pad(hours);
    document.getElementById('cd-mins').textContent  = pad(mins);
    document.getElementById('cd-secs').textContent  = pad(secs);
  }

  function startCountdown(targetTs, message) {
    if (countdownInterval) clearInterval(countdownInterval);
    document.getElementById('cd-message').textContent = message || '';
    cdOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    tickCountdown(targetTs);
    countdownInterval = setInterval(() => tickCountdown(targetTs), 1000);
  }

  function stopCountdown() {
    if (countdownInterval) clearInterval(countdownInterval);
    cdOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ── AUTO-RESUME on page load ────────────────────────
  const saved = getState();
  if (saved.active && saved.target) {
    if (Date.now() < saved.target) {
      startCountdown(saved.target, saved.message);
    } else {
      celebrate.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  // ── UPDATE STATUS DISPLAY ───────────────────────────
  function updateStatusDisplay() {
    const s   = getState();
    const el  = document.getElementById('zl-current-status');
    const val = document.getElementById('zl-status-val');
    if (s.active && s.target) {
      const d = new Date(s.target);
      val.textContent = `Active — targeting ${d.toLocaleString()}`;
      el.classList.add('visible');
    } else {
      val.textContent = 'No countdown active.';
      el.classList.add('visible');
    }
  }

  // ── MODAL OPEN/CLOSE ────────────────────────────────
  function openAdminModal() {
    modal.classList.add('open');
    updateStatusDisplay();
    if (adminUnlocked) {
      document.getElementById('zl-auth-screen').style.display    = 'none';
      document.getElementById('zl-control-screen').style.display = 'block';
    }
  }

  // ── SECRET ACTIVATION ────────────────────────────────
  // No button, no icon, nothing in the DOM to find or inspect.
  // Type this sequence anywhere on the page (not while focused in
  // a text field) and the admin modal opens. Change LAUNCH_KEYS to
  // whatever phrase you want — keep it short but not guessable.
  const LAUNCH_KEYS = 'launch';
  let keyBuffer = '';
  let keyBufferTimer = null;

  document.addEventListener('keydown', e => {
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return; // don't hijack normal typing

    clearTimeout(keyBufferTimer);
    keyBuffer += e.key.toLowerCase();
    keyBuffer = keyBuffer.slice(-LAUNCH_KEYS.length);

    if (keyBuffer === LAUNCH_KEYS) {
      keyBuffer = '';
      openAdminModal();
    }

    keyBufferTimer = setTimeout(() => { keyBuffer = ''; }, 2000);
  });

  document.getElementById('zlLcClose').addEventListener('click', () => {
    modal.classList.remove('open');
  });

  // ── AUTH ────────────────────────────────────────────
  document.getElementById('zl-auth-btn').addEventListener('click', () => {
    const pw  = document.getElementById('zl-admin-pw').value.trim();
    const err = document.getElementById('zl-auth-error');
    if (pw === LAUNCH_CONFIG.adminPassword) {
      adminUnlocked = true;
      document.getElementById('zl-auth-screen').style.display    = 'none';
      document.getElementById('zl-control-screen').style.display = 'block';
      document.getElementById('zl-admin-pw').value = '';
      err.style.display = 'none';
      updateStatusDisplay();
    } else {
      err.style.display = 'block';
      document.getElementById('zl-admin-pw').value = '';
    }
  });

  document.getElementById('zl-admin-pw').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('zl-auth-btn').click();
  });

  // ── START COUNTDOWN ─────────────────────────────────
  document.getElementById('zl-start-btn').addEventListener('click', () => {
    const dt  = document.getElementById('zl-launch-dt').value;
    const msg = document.getElementById('zl-launch-msg').value.trim();

    if (!dt) {
      alert('Please select a launch date and time.');
      return;
    }

    const target = new Date(dt).getTime();
    if (target <= Date.now()) {
      alert('Launch date must be in the future.');
      return;
    }

    setState({ active: true, target, message: msg });
    startCountdown(target, msg);
    modal.classList.remove('open');
    updateStatusDisplay();
  });

  // ── STOP COUNTDOWN ───────────────────────────────────
  document.getElementById('zl-stop-btn').addEventListener('click', () => {
    setState({ active: false, target: null });
    stopCountdown();
    modal.classList.remove('open');
  });

  // ── LAUNCH NOW ───────────────────────────────────────
  document.getElementById('zl-launch-now-btn').addEventListener('click', () => {
    if (!confirm('🚀 Launch KMFG Solutions NOW? This will show the live celebration screen.')) return;
    setState({ active: false, target: null });
    stopCountdown();
    celebrate.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.classList.remove('open');
  });

  // ── ENTER SITE (from celebration screen) ─────────────
  document.getElementById('zl-cel-enter').addEventListener('click', () => {
    celebrate.classList.remove('active');
    document.body.style.overflow = '';
    setState({ active: false, target: null });
  });

})();