/* Prisciantelli Parrucchieri — main.js
   PLUMBING_V 1 (canonico) + firma:
   · hero entrance (.reveal-hero, unica animazione d'opacità → flash-safe)
   · il pettine che si disegna: strokeDashoffset (NON opacity → flash-safe) */

/* ---------- firma: hero entrance ---------- */
window.bespokeHeroEntrance = function () {
  var els = document.querySelectorAll('.reveal-hero');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (typeof gsap !== 'undefined' && !reduced) {
    gsap.fromTo(els, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12 });
  } else { els.forEach(function (el) { el.style.opacity = 1; }); }
};

(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) root.classList.add('reduced-motion');

  /* ══════════ CONFIG PER-SITO ══════════ */
  var SITE = {
    slug: 'prisciantelli-parrucchieri',
    whatsapp: { number: '', message: '', ids: [] },
    hours: {
      0: [],
      1: [],
      2: [['09:00', '18:30']],
      3: [['09:00', '18:30']],
      4: [['09:00', '18:30']],
      5: [['09:00', '18:30']],
      6: [['09:00', '17:00']],
    },
    hoursStatusId: 'orarioStato',
    hoursTableSelector: '[data-day]',
    todayClass: 'is-today',
    introId: 'intro',
    introDuration: 1700,
    revealSelector: '.reveal',
    inViewClass: 'in-view',
    breakpointMenu: 720,
    EN: {
      'skip': 'Skip to content',
      'nav.servizi': 'Services', 'nav.salone': 'The salon', 'nav.prenota': 'Book', 'nav.dove': 'Find us & hours', 'nav.cta': 'Call',
      'hero.eyebrow': 'Unisex hair salon · Affori, Via Vergato',
      'hero.t1': 'Affori regulars,', 'hero.t2': 'keeping up with the times',
      'hero.lead': "The family salon of Affori: cuts for men and women, colour and highlights. The same care as always — and the convenience of booking online.",
      'hero.reviews': '63 Google reviews', 'hero.book': 'Book online', 'hero.call': 'Call: 02 646 8891',
      'gesto.eyebrow': 'The salon of Affori',
      'gesto.t1': "The 'scissors' of always,", 'gesto.t2': 'never left behind',
      'gesto.lead': "Some 'have come here since they were born'. Prisciantelli is the neighbourhood salon that's been here for many years — but never fell behind: cuts for men and women, colour with the right products, and online booking. Long-standing, and always keeping up with the times.",
      'serv.eyebrow': 'Unisex', 'serv.title': 'For her and for him',
      's1.t': 'Women', 's1.d': 'Cut and blow-dry, styling, treatments. Hair care done properly.',
      's2.t': 'Men', 's2.d': 'Classic or modern cut and the beard. Quick, precise, by appointment.',
      's3.t': 'Colour', 's3.d': 'Tints, highlights and glosses with professional ALFAPARF products.',
      'lav.eyebrow': 'The work', 'lav.title': "The winning 'scissors'",
      'lav.p1': "What customers have always appreciated: the quality of the cut and colour, the attention to everyone's needs. 'The result of my highlights was exactly what I wanted.'",
      'lav.p2': 'Professional and friendly — the recipe of a salon that lasts.',
      'sal.eyebrow': 'The salon', 'sal.title': 'A neighbourhood story in Affori',
      'sal.p1': 'On the corner of Via Vergato and Via Astesani, Prisciantelli has been a neighbourhood landmark for many years. A family-run unisex salon, where you feel at ease and keep coming back.',
      'sal.p2': 'Professional ALFAPARF Milano products, by appointment. The craft tradition, with an eye on the present.',
      'pre.eyebrow': 'By appointment', 'pre.title': 'Book your spot',
      'pre.lead': "Pick the day and time at your convenience, or call the salon. We'll see you on Via Vergato.",
      'pre.call': 'Call: 02 646 8891', 'pre.map': 'How to get here',
      'rev.eyebrow': 'Voices of the neighbourhood', 'rev.title': '4.7 on Google',
      'rev1.t': "«Long-standing hairdressers of Affori, quality and friendliness their winning 'scissors'.»", 'rev1.a': '— Google customer',
      'rev2.t': "«I've come here since I was born. The shop has been here for many years but managed to keep up with the times and never fell behind.»", 'rev2.a': '— Valerio B.',
      'rev3.t': "«Eleonora really attentive to the customer's needs. The result of my highlights was exactly as expected.»", 'rev3.a': '— Simona C.',
      'rev4.t': "«Competent, professional, courteous and friendly. Always had a good experience.»", 'rev4.a': '— Chemical B.',
      'rev.src': 'Real customer reviews on Google.',
      'dove.eyebrow': 'Find us & hours', 'dove.title': 'Via Vergato, Affori',
      'day.lun': 'Monday', 'day.mar': 'Tuesday', 'day.mer': 'Wednesday', 'day.gio': 'Thursday', 'day.ven': 'Friday', 'day.sab': 'Saturday', 'day.dom': 'Sunday',
      'closed': 'Closed', 'closed2': 'Closed',
      'dove.addr_l': 'Address', 'dove.tel_l': 'Phone', 'dove.serv_l': 'How', 'dove.serv': 'By appointment · unisex', 'dove.call': 'Call the salon',
      'faq.eyebrow': 'FAQ', 'faq.title': 'Before you come',
      'faq1.q': 'Do you do men and women?',
      'faq1.a': 'Yes, we are a unisex salon: cut and blow-dry for her and for him, beard and services for the neighbourhood. And colour: tints, highlights and glosses.',
      'faq2.q': 'What products do you use?',
      'faq2.a': 'We work with professional ALFAPARF Milano products for colour and hair care.',
      'faq3.q': 'Can I book online?',
      'faq3.a': 'Yes: you can book online conveniently, or call the salon. We work by appointment.',
      'faq4.q': 'What are your opening hours?',
      'faq4.a': 'Tuesday–Friday 9:00–18:30, Saturday 9:00–17:00. Closed Sunday and Monday.',
      'foot.hours_l': 'Hours', 'foot.hours1': 'Tue–Fri 9–6:30 · Sat 9–5', 'foot.hours2': 'Closed Sunday and Monday',
      'foot.disclaimer': 'Demonstration website (concept) created by Bespoke Studio for presentation purposes. It is not the official website of the business. Images and reviews belong to their respective owners.',
    },
  };
  /* ═════════════════════════════════════ */

  if (SITE.whatsapp.number) {
    var waHref = 'https://wa.me/' + SITE.whatsapp.number + '?text=' + encodeURIComponent(SITE.whatsapp.message);
    SITE.whatsapp.ids.forEach(function (id) { var el = document.getElementById(id); if (el) { el.href = waHref; el.target = '_blank'; el.rel = 'noopener'; } });
  }

  var hasGsap = typeof gsap !== 'undefined';
  var hasST = hasGsap && typeof ScrollTrigger !== 'undefined';
  if (hasST) gsap.registerPlugin(ScrollTrigger);

  function showAllReveals() {
    var els = document.querySelectorAll(SITE.revealSelector);
    els.forEach(function (el) { el.classList.add(SITE.inViewClass); });
    if (hasGsap) {
      if (hasST) { els.forEach(function (el) { ScrollTrigger.getAll().forEach(function (st) { if (st.trigger === el && !st.progress) st.kill(); }); }); }
      gsap.set(els, { opacity: 1, y: 0, x: 0 });
    }
  }
  setTimeout(function () { if (!hasGsap || reducedMotion) showAllReveals(); }, 1500);

  if (hasGsap && !reducedMotion) {
    gsap.utils.toArray(SITE.revealSelector).forEach(function (el) {
      gsap.fromTo(el, { opacity: 0, y: 28 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', immediateRender: false,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
  } else if ('IntersectionObserver' in window && !reducedMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add(SITE.inViewClass); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(SITE.revealSelector).forEach(function (el) { io.observe(el); });
  } else { showAllReveals(); }

  /* intro */
  var intro = document.getElementById(SITE.introId);
  var heroEntrance = window.bespokeHeroEntrance || function () {};
  function hideIntro() {
    if (!intro) return;
    var el = intro; intro = null;
    el.classList.add('hide');
    setTimeout(function () { el.remove(); }, 700);
    heroEntrance();
  }
  if (reducedMotion || !intro) { if (intro) { intro.remove(); intro = null; } heroEntrance(); }
  else { setTimeout(hideIntro, SITE.introDuration); setTimeout(hideIntro, 6000); intro.addEventListener('click', hideIntro); }

  /* burger */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('mainNav');
  if (burger && nav) {
    var lastFocus = null;
    var closeNav = function () { nav.classList.remove('nav-open'); burger.setAttribute('aria-expanded', 'false'); if (lastFocus) { lastFocus.focus(); lastFocus = null; } };
    var openNav = function () { lastFocus = document.activeElement; nav.classList.add('nav-open'); burger.setAttribute('aria-expanded', 'true'); var f = nav.querySelector('a, button'); if (f) f.focus(); };
    burger.addEventListener('click', function () { nav.classList.contains('nav-open') ? closeNav() : openNav(); });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('nav-open')) closeNav(); });
    window.addEventListener('resize', function () { if (window.innerWidth > SITE.breakpointMenu) closeNav(); });
  }

  /* orari Europe/Rome */
  function romeNow() {
    try {
      var f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false });
      var p = f.formatToParts(new Date());
      var map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      var get = function (t) { return p.find(function (x) { return x.type === t; }).value; };
      return { day: map[get('weekday')], mins: parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10) };
    } catch (e) { var d = new Date(); return { day: d.getDay(), mins: d.getHours() * 60 + d.getMinutes() }; }
  }
  var toMin = function (hm) { var a = hm.split(':'); return parseInt(a[0], 10) * 60 + parseInt(a[1], 10); };
  var fmt = function (m) { m = m % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2); };
  var DAYS_IT = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var DAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function hoursState() {
    var now = romeNow();
    var wins = SITE.hours[now.day] || [];
    for (var i = 0; i < wins.length; i++) { var s = toMin(wins[i][0]), e = toMin(wins[i][1]); if (now.mins >= s && now.mins < Math.min(e, 1440)) return { open: true, day: now.day, closesAt: fmt(e) }; }
    var prev = (now.day + 6) % 7, pw = SITE.hours[prev] || [];
    for (var j = 0; j < pw.length; j++) { var pe = toMin(pw[j][1]); if (pe > 1440 && now.mins < pe - 1440) return { open: true, day: prev, closesAt: fmt(pe) }; }
    for (var k = 0; k < wins.length; k++) { if (now.mins < toMin(wins[k][0])) return { open: false, day: now.day, opensToday: fmt(toMin(wins[k][0])) }; }
    for (var d = 1; d <= 7; d++) { var nd = (now.day + d) % 7, nw = SITE.hours[nd] || []; if (nw.length) return { open: false, day: now.day, opensDay: nd, opensAt: fmt(toMin(nw[0][0])) }; }
    return { open: false, day: now.day };
  }
  function renderHours() {
    var el = document.getElementById(SITE.hoursStatusId);
    var st = hoursState();
    document.querySelectorAll(SITE.hoursTableSelector).forEach(function (row) { row.classList.toggle(SITE.todayClass, parseInt(row.getAttribute('data-day'), 10) === st.day); });
    if (!el) return;
    var en = root.lang === 'en', txt;
    if (st.open) txt = (en ? 'Open now' : 'Aperto ora') + ' · ' + (en ? 'closes at ' : 'chiude alle ') + st.closesAt;
    else if (st.opensToday) txt = (en ? 'Closed · opens today at ' : 'Chiuso · apre oggi alle ') + st.opensToday;
    else if (st.opensAt !== undefined) txt = (en ? 'Closed · opens ' + DAYS_EN[st.opensDay] + ' at ' : 'Chiuso · apre ' + DAYS_IT[st.opensDay] + ' alle ') + st.opensAt;
    else txt = en ? 'Closed' : 'Chiuso';
    el.textContent = txt;
  }
  renderHours();
  setInterval(renderHours, 60000);

  /* i18n */
  var originals = {};
  var I18N_ATTRS = [['data-i18n', null], ['data-i18n-aria', 'aria-label'], ['data-i18n-alt', 'alt'], ['data-i18n-placeholder', 'placeholder'], ['data-i18n-title', 'title']];
  function setLang(lang) {
    root.lang = lang === 'en' ? 'en' : 'it';
    I18N_ATTRS.forEach(function (pair) {
      var dattr = pair[0], target = pair[1];
      if (!originals[dattr]) originals[dattr] = {};
      document.querySelectorAll('[' + dattr + ']').forEach(function (el) {
        var key = el.getAttribute(dattr), store = originals[dattr];
        if (!(key in store)) store[key] = target ? el.getAttribute(target) : el.textContent;
        var val = lang === 'en' && SITE.EN[key] !== undefined ? SITE.EN[key] : store[key];
        if (target) el.setAttribute(target, val); else el.textContent = val;
      });
    });
    renderHours();
    try { localStorage.setItem(SITE.slug + '-lang', lang); } catch (e) {}
  }
  var langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.addEventListener('click', function () { setLang(root.lang === 'en' ? 'it' : 'en'); });
  try { if (localStorage.getItem(SITE.slug + '-lang') === 'en') setLang('en'); } catch (e) {}

  /* ══════════ FIRMA: il pettine si disegna (strokeDashoffset → flash-safe) ══════════ */
  if (hasGsap && hasST && !reducedMotion) {
    var strokes = gsap.utils.toArray('.pettine .draw');
    strokes.forEach(function (p) {
      var len = p.getTotalLength ? p.getTotalLength() : 300;
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
    });
    gsap.to(strokes, {
      strokeDashoffset: 0, duration: 0.7, ease: 'power2.out', stagger: 0.05,
      scrollTrigger: { trigger: '.gesto', start: 'top 74%', once: true },
    });
  }
})();
