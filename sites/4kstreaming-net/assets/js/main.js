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

  // Scroll-reveal: progressive enhancement, degrades to fully-visible if unsupported.
  if ('IntersectionObserver' in window) {
    var revealEls = document.querySelectorAll('.card, .plan-card, .stat-block, .section-head');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) {
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  // Count-up stats: the real final value is already the element's text
  // content (SEO/AEO always sees the true number). This only animates the
  // DISPLAY on scroll-into-view, then sets the text back to the exact
  // original string so it can never drift from the real value.
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduceMotion) {
    var countEls = document.querySelectorAll('.js-count');
    var countIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        countIo.unobserve(entry.target);
        var el = entry.target;
        var finalText = el.textContent;
        var target = parseInt((el.getAttribute('data-count') || finalText).replace(/[^0-9]/g, ''), 10);
        if (!target) return;
        var start = performance.now();
        var duration = 1200;
        function tick(now) {
          var p = Math.min(1, (now - start) / duration);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toLocaleString('en-US');
          if (p < 1) {
            requestAnimationFrame(tick);
          } else {
            el.textContent = finalText;
          }
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    countEls.forEach(function (el) { countIo.observe(el); });
  }
})();
