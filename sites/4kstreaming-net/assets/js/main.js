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

  function handleForm(formId, successId, errorId, endpoint, beforeSend) {
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
      if (typeof beforeSend === 'function') data = beforeSend(data, form) || data;

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
          successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
  handleForm('order-form', 'order-success', 'order-error', '/api/order', function (data, form) {
    var select = form.querySelector('#order-plan');
    var selected = select && select.selectedOptions[0];
    if (selected) data.plan = selected.getAttribute('data-label') || data.plan;
    return data;
  });

  // Pre-select the plan on /order/?plan=<id> so pricing-card links land on the right plan.
  var orderPlanSelect = document.getElementById('order-plan');
  if (orderPlanSelect) {
    var params = new URLSearchParams(window.location.search);
    var planParam = params.get('plan');
    if (planParam) {
      var match = Array.from(orderPlanSelect.options).find(function (o) { return o.value === planParam; });
      if (match) orderPlanSelect.value = planParam;
    }
  }
})();
