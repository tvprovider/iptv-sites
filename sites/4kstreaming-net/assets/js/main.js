(function () {
  'use strict';

  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  function handleForm(formId, successId, errorId, endpoint) {
    var form = document.getElementById(formId);
    if (!form) return;
    var successEl = document.getElementById(successId);
    var errorEl = document.getElementById(errorId);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      successEl.classList.remove('visible');
      errorEl.classList.remove('visible');

      // Honeypot spam trap
      var honeypot = form.querySelector('input[name="company"]');
      if (honeypot && honeypot.value) return;

      var data = Object.fromEntries(new FormData(form).entries());
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Request failed');
          form.reset();
          successEl.classList.add('visible');
        })
        .catch(function () {
          errorEl.classList.add('visible');
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        });
    });
  }

  handleForm('contact-form', 'form-success', 'form-error', '/api/lead');
  handleForm('trial-form', 'trial-success', 'trial-error', '/api/trial');
})();
