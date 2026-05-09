/* common.js — Shared interactivity for PMP Study Guide */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    // ── Sidebar toggle ──────────────────────────────────────────
    var toggleBtn  = document.getElementById('sidebarToggle');
    var sidebar    = document.getElementById('sidebar');
    var mainCont   = document.getElementById('mainContent');
    var overlay    = document.getElementById('overlay');
    var isMobile   = function () { return window.innerWidth <= 900; };

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', function () {
        if (isMobile()) {
          sidebar.classList.toggle('mobile-open');
          if (overlay) { overlay.classList.toggle('show'); }
        } else {
          sidebar.classList.toggle('collapsed');
          if (mainCont) { mainCont.classList.toggle('full-width'); }
        }
      });
    }
    if (overlay) {
      overlay.addEventListener('click', function () {
        if (sidebar) { sidebar.classList.remove('mobile-open'); }
        overlay.classList.remove('show');
      });
    }
    // Start collapsed on mobile
    if (isMobile() && sidebar) { sidebar.classList.remove('mobile-open'); }

    // ── Accordion ──────────────────────────────────────────────
    document.querySelectorAll('.acc-header').forEach(function (hdr) {
      hdr.addEventListener('click', function () {
        this.classList.toggle('open');
        var body = this.nextElementSibling;
        if (body && body.classList.contains('acc-body')) {
          body.classList.toggle('open');
        }
      });
    });

    // ── Quiz answer reveal ──────────────────────────────────────
    document.querySelectorAll('.ans-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var reveal = this.nextElementSibling;
        if (!reveal) { return; }
        var isVisible = reveal.style.display === 'block';
        reveal.style.display = isVisible ? 'none' : 'block';
        this.textContent = isVisible
          ? '👁 Show Answer / Xem đáp án'
          : '🙈 Hide Answer / Ẩn đáp án';
      });
    });

    // ── Active nav link highlight ───────────────────────────────
    var cur = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('a[href="' + cur + '"]').forEach(function (a) {
      a.classList.add('active');
    });

    // ── Smooth scroll for anchor links ──────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = this.getAttribute('href').slice(1);
        var el = document.getElementById(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });

  }); // DOMContentLoaded
})();
