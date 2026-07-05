const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxEJECj6QnKmdvO5f65M3nvX6tMWk43Lc2e1MIweAqx0ffR_3Iw8cWacJyS1LrLHHy_/exec';
const RECAPTCHA_SITE_KEY = '6Leeq0QtAAAAALXXIj7irVlzQLJQKTFZBD3mDJay';

const form      = document.getElementById('quoteForm');
const submitBtn = document.getElementById('submitBtn');
const btnText   = document.getElementById('btnText');
const btnLoader = document.getElementById('btnLoader');
const success   = document.getElementById('formSuccess');
const error     = document.getElementById('formError');

// ── Validation ────────────────────────────────────────
function validateField(id, errorId, message) {
  const el  = document.getElementById(id);
  const err = document.getElementById(errorId);
  if (!el.value.trim()) {
    err.textContent = message;
    el.classList.add('input-error');
    return false;
  }
  if (id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) {
    err.textContent = 'Please enter a valid email address.';
    el.classList.add('input-error');
    return false;
  }
  if (id === 'phone' && !/^[0-9\s\+\-]{7,15}$/.test(el.value)) {
    err.textContent = 'Please enter a valid phone number.';
    el.classList.add('input-error');
    return false;
  }
  err.textContent = '';
  el.classList.remove('input-error');
  return true;
}

// ── Clear errors on input ─────────────────────────────
['firstName','lastName','email','phone','service','message'].forEach(id => {
  const el = document.getElementById(id);
  el?.addEventListener('input', () => {
    document.getElementById('err-' + id).textContent = '';
    el.classList.remove('input-error');
  });
});

// ── Submit ────────────────────────────────────────────
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const valid = [
    validateField('firstName', 'err-firstName', 'First name is required.'),
    validateField('lastName',  'err-lastName',  'Surname is required.'),
    validateField('email',     'err-email',     'Email address is required.'),
    validateField('phone',     'err-phone',     'Phone number is required.'),
    validateField('service',   'err-service',   'Please select a service.'),
    validateField('message',   'err-message',   'Please describe your project.'),
  ].every(Boolean);

  if (!valid) return;
  

  // Loading state
  btnText.style.display   = 'none';
  btnLoader.style.display = 'inline';
  submitBtn.disabled      = true;
  error.style.display     = 'none';

  try {
    const recaptchaToken = await getRecaptchaToken();

    const payload = {
      firstName: document.getElementById('firstName').value.trim(),
      lastName:  document.getElementById('lastName').value.trim(),
      email:     document.getElementById('email').value.trim(),
      phone:     document.getElementById('phone').value.trim(),
      service:   document.getElementById('service').value,
      message:   document.getElementById('message').value.trim(),
      website:   document.getElementById('website').value.trim(), // honeypot - should be empty
      recaptchaToken: recaptchaToken,
      timestamp: new Date().toISOString(),
    };

    await fetch(SCRIPT_URL, {
      method:  'POST',
      mode:    'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
    });

    // no-cors means we can't read the response — assume success
    form.style.display      = 'none';
    success.style.display   = 'block';

  } catch (err) {
    error.style.display     = 'block';
    btnText.style.display   = 'inline';
    btnLoader.style.display = 'none';
    submitBtn.disabled      = false;
  }
});

// ── reCAPTCHA v3 token helper ──────────────────────────
function getRecaptchaToken() {
  return new Promise((resolve, reject) => {
    if (typeof grecaptcha === 'undefined') {
      // reCAPTCHA script failed to load (e.g. blocked, offline) - don't
      // block the whole form submission because of it.
      resolve('');
      return;
    }
    grecaptcha.ready(() => {
      grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
        .then(resolve)
        .catch(() => resolve('')); // fail open rather than blocking the user
    });
  });
}