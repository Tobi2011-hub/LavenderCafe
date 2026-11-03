/* ============ Lavender Café — interactions ============ */
(() => {
  'use strict';

  /* ---------- Editable settings ---------- */
  const CONFIG = {
    currency: '₦',
    whatsappNumber: '2347070434854', // 07070434854 in international format
    // Opening hours: 0 = Sunday ... 6 = Saturday. [open, close] in 24h, or null for closed.
    hours: {
      1: [8, 20], 2: [8, 20], 3: [8, 20], 4: [8, 20], 5: [8, 22], 6: [9, 22], 0: [11, 18]
    },
    taglines: [
      'A welcoming space where every sip and bite feels comforting, like home.',
      'Fresh pastries, warm lattes, and a seat saved just for you.',
      'Slow down. Sip. Savour the little moments.'
    ]
  };

  const IMG = {
    pastries: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=600&q=80',
    cakes: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    coffee: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
    desserts: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRz97reD2hBpauoQZrRRTQOEasVGiENhMqdWAWOvmqw-Q&s=10',
    boba: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80',
    breakfast: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpuYPHjmKNvQdpMMVpYPllQ2q8HOsteAJ7a7uolZEunA&s=10',
    latte: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    hero: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
  };
  // If an image link ever breaks, fall back to a safe pastry photo.
  const FALLBACK = IMG.hero;

  const MENU = [
    { id: 'p1', cat: 'pastries', name: 'Butter Croissant', desc: 'Flaky, golden and baked fresh every morning.', price: 1800, tag: 'Bestseller', img: IMG.pastries },
    { id: 'p2', cat: 'pastries', name: 'Cinnamon Roll', desc: 'Soft swirls with cinnamon sugar and cream-cheese glaze.', price: 2200, img: IMG.pastries },
    { id: 'p3', cat: 'pastries', name: 'Almond Danish', desc: 'Buttery pastry with almond cream and toasted flakes.', price: 2500, img: IMG.pastries },
    { id: 'c1', cat: 'cakes', name: 'Lavender Honey Cake', desc: 'Our signature slice with a floral honey buttercream.', price: 3500, tag: 'Signature', img: IMG.cakes },
    { id: 'c2', cat: 'cakes', name: 'Red Velvet Slice', desc: 'Velvety sponge layered with silky cream cheese frosting.', price: 3200, img: IMG.cakes },
    { id: 'c3', cat: 'cakes', name: 'Celebration Cake (6")', desc: 'Custom flavours for birthdays — order 3 days ahead.', price: 18000, tag: 'Custom', img: IMG.cakes },
    { id: 'k1', cat: 'coffee', name: 'Caramel Latte', desc: 'Rich espresso, steamed milk and buttery caramel.', price: 2800, tag: 'Guest fave', img: IMG.coffee },
    { id: 'k2', cat: 'coffee', name: 'Cappuccino', desc: 'Velvety foam over a bold double espresso.', price: 2400, img: IMG.latte },
    { id: 'k3', cat: 'coffee', name: 'Lavender Latte', desc: 'A soft floral latte with vanilla — calm in a cup.', price: 3000, tag: 'Seasonal', img: IMG.latte },
    { id: 'd1', cat: 'desserts', name: 'New York Cheesecake', desc: 'Creamy, rich and set on a buttery biscuit base.', price: 3400, img: IMG.desserts },
    { id: 'd2', cat: 'desserts', name: 'Fudge Brownie', desc: 'Dense, gooey chocolate with a crackly top.', price: 2000, img: IMG.desserts },
    { id: 'd3', cat: 'desserts', name: 'Chocolate Chip Cookie', desc: 'Warm, chewy and loaded with chocolate chunks.', price: 1200, img: IMG.desserts },
    { id: 'b1', cat: 'boba', name: 'Brown Sugar Milk Tea', desc: 'Creamy tea with caramelised pearls.', price: 3000, tag: 'Trending', img: IMG.boba },
    { id: 'b2', cat: 'boba', name: 'Strawberry Refresher', desc: 'Fruity, zesty and topped with popping boba.', price: 2800, img: IMG.boba },
    { id: 'b3', cat: 'boba', name: 'Taro Bubble Tea', desc: 'Smooth purple taro blended with milk and pearls.', price: 3200, img: IMG.boba },
    { id: 'f1', cat: 'breakfast', name: 'Breakfast Combo', desc: 'Eggs, toast and fresh coffee to start your day.', price: 4500, tag: 'Morning', img: IMG.breakfast },
    { id: 'f2', cat: 'breakfast', name: 'Pancake Stack', desc: 'Fluffy pancakes with maple syrup and berries.', price: 3800, img: IMG.breakfast }
  ];

  const REVIEWS = [
    { n: 'Sarah M.', s: 5, t: 'Lavender feels like home. The pastries are always fresh, and the atmosphere is so peaceful.' },
    { n: 'David A.', s: 5, t: "Their caramel latte and croissants are amazing. It's my favourite place to study." },
    { n: 'Grace T.', s: 5, t: 'The staff are incredibly kind, and every dessert tastes homemade. Highly recommended!' }
  ];

  const QUIZ = [
    { q: 'What is your mood today?', o: [['cozy', '🧸 Cozy'], ['energetic', '⚡ Energetic'], ['sweet', '🍬 Sweet-toothed'], ['calm', '🌿 Calm']] },
    { q: 'What time of day is it?', o: [['morning', '🌅 Morning'], ['afternoon', '☀️ Afternoon'], ['evening', '🌇 Evening'], ['anytime', '🕰️ Anytime']] },
    { q: 'Pick a flavour you love', o: [['choc', '🍫 Chocolate'], ['fruit', '🍓 Fruity'], ['caramel', '🍯 Caramel'], ['floral', '💜 Floral']] }
  ];
  const QUIZ_RESULTS = { cozy: 'k1', energetic: 'b2', sweet: 'c1', calm: 'k3', choc: 'd2', fruit: 'b2', caramel: 'k1', floral: 'k3', morning: 'f1', afternoon: 'k2', evening: 'd1', anytime: 'p1' };

  /* ---------- Helpers ---------- */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const money = n => CONFIG.currency + n.toLocaleString();
  const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem('lav_' + k)) ?? d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem('lav_' + k, JSON.stringify(v)); } catch { /* ignore */ } }
  };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2400);
  }
  function modal(emoji, title, text) {
    $('#modalEmoji').textContent = emoji; $('#modalTitle').textContent = title; $('#modalText').textContent = text;
    $('#modal').classList.add('show');
  }
  $('#modalClose').onclick = () => $('#modal').classList.remove('show');
  $('#modal').onclick = e => { if (e.target.id === 'modal') $('#modal').classList.remove('show'); };

  /* ---------- Preloader ---------- */
  window.addEventListener('load', () => setTimeout(() => $('#preloader').classList.add('done'), 700));
  setTimeout(() => $('#preloader').classList.add('done'), 3500); // safety net

  /* ---------- Theme ---------- */
  const themeBtn = $('#themeToggle');
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
  }
  applyTheme(store.get('theme', matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  themeBtn.onclick = () => {
    const t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(t); store.set('theme', t);
  };

  /* ---------- Header, progress, nav ---------- */
  const header = $('#header'), bar = $('#progressBar'), toTop = $('#toTop');
  function onScroll() {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    header.classList.toggle('scrolled', y > 40);
    toTop.classList.toggle('show', y > 600);
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  toTop.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

  const ham = $('#hamburger'), links = $('#navLinks');
  ham.onclick = () => { ham.classList.toggle('open'); links.classList.toggle('open'); };
  $$('a', links).forEach(a => a.addEventListener('click', () => { ham.classList.remove('open'); links.classList.remove('open'); }));

  const navMap = $$('a', links).map(a => ({ a, sec: $(a.getAttribute('href')) })).filter(x => x.sec);
  const navIO = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) navMap.forEach(y => y.a.classList.toggle('active', y.sec === e.target));
  }), { rootMargin: '-45% 0px -50% 0px' });
  navMap.forEach(x => navIO.observe(x.sec));

  /* ---------- Scroll reveal ---------- */
  const revealIO = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealIO.unobserve(e.target); }
  }), { threshold: 0.12 });
  $$('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 90 + 'ms'; revealIO.observe(el); });
  $$('.section-head').forEach(el => revealIO.observe(el));

  /* ---------- Counters ---------- */
  const countIO = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    countIO.unobserve(e.target);
    const el = e.target, end = +el.dataset.count, dur = 1800, t0 = performance.now();
    (function tick(t) {
      const p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(end * eased).toLocaleString() + (p === 1 && end >= 1000 ? '+' : '');
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }), { threshold: 0.6 });
  $$('[data-count]').forEach(el => countIO.observe(el));

  /* ---------- Typewriter ---------- */
  (function typewriter() {
    const el = $('#typewriter'); let i = 0, j = 0, del = false;
    if (reduceMotion) { el.textContent = CONFIG.taglines[0]; return; }
    (function step() {
      const full = CONFIG.taglines[i];
      el.textContent = full.slice(0, j);
      if (!del && j === full.length) { del = true; return setTimeout(step, 2200); }
      if (del && j === 0) { del = false; i = (i + 1) % CONFIG.taglines.length; return setTimeout(step, 400); }
      j += del ? -1 : 1;
      setTimeout(step, del ? 18 : 45);
    })();
  })();

  /* ---------- Falling lavender petals (canvas) ---------- */
  (function petals() {
    const c = $('#petals'), ctx = c.getContext('2d');
    if (reduceMotion) return;
    let w, h, ps = [];
    const colors = ['#c3a8ff', '#d9c8ff', '#ffc9e0', '#a982f2', '#e8d9ff'];
    const resize = () => { w = c.width = c.offsetWidth; h = c.height = c.offsetHeight; };
    resize(); addEventListener('resize', resize);
    const make = () => ({ x: Math.random() * w, y: -20 - Math.random() * h, r: 5 + Math.random() * 9, v: .5 + Math.random() * 1.2, s: Math.random() * Math.PI * 2, sw: .01 + Math.random() * .02, a: Math.random() * Math.PI, c: colors[(Math.random() * colors.length) | 0] });
    for (let i = 0; i < 38; i++) { const p = make(); p.y = Math.random() * h; ps.push(p); }
    const mouse = { x: -999, y: -999 };
    c.parentElement.addEventListener('mousemove', e => { const b = c.getBoundingClientRect(); mouse.x = e.clientX - b.left; mouse.y = e.clientY - b.top; });
    (function draw() {
      ctx.clearRect(0, 0, w, h);
      ps.forEach(p => {
        p.s += p.sw; p.y += p.v; p.x += Math.sin(p.s) * 1.1; p.a += .02;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 90) { p.x += dx / d * 3; p.y += dy / d * 3; }
        if (p.y > h + 20) Object.assign(p, make(), { y: -20 });
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.globalAlpha = .75; ctx.fillStyle = p.c;
        ctx.beginPath(); ctx.ellipse(0, 0, p.r, p.r * .5, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      });
      requestAnimationFrame(draw);
    })();
  })();

  /* ---------- Custom cursor ---------- */
  (function cursor() {
    if (matchMedia('(hover: none)').matches) return;
    const dot = $('#cursorDot'), ring = $('#cursorRing');
    let x = 0, y = 0, rx = 0, ry = 0;
    addEventListener('mousemove', e => { x = e.clientX; y = e.clientY; document.body.classList.add('has-cursor'); dot.style.transform = `translate(${x}px,${y}px)`; });
    (function loop() { rx += (x - rx) * .16; ry += (y - ry) * .16; ring.style.transform = `translate(${rx}px,${ry}px)`; requestAnimationFrame(loop); })();
    document.addEventListener('mouseover', e => ring.classList.toggle('hover', !!e.target.closest('a, button, input, select, textarea, summary, .gallery img')));
  })();

  /* ---------- 3D tilt, magnetic buttons, parallax, ripple ---------- */
  $$('.tilt').forEach(el => {
    el.addEventListener('mousemove', e => {
      const b = el.getBoundingClientRect(), px = (e.clientX - b.left) / b.width - .5, py = (e.clientY - b.top) / b.height - .5;
      el.style.transform = `perspective(900px) rotateY(${px * 12}deg) rotateX(${-py * 12}deg) translateY(-4px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
  $$('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => { const b = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * .25}px, ${(e.clientY - b.top - b.height / 2) * .35}px)`; });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
  addEventListener('scroll', () => {
    if (reduceMotion) return;
    $$('.floaters span').forEach((s, i) => { s.style.translate = `0 ${scrollY * (.06 + i * .02)}px`; });
  }, { passive: true });
  document.addEventListener('click', e => {
    const b = e.target.closest('.btn, .add-btn'); if (!b) return;
    const r = document.createElement('span'), d = Math.max(b.offsetWidth, b.offsetHeight), bb = b.getBoundingClientRect();
    r.className = 'ripple'; r.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - bb.left - d / 2}px;top:${e.clientY - bb.top - d / 2}px`;
    b.appendChild(r); setTimeout(() => r.remove(), 600);
  });

  /* ---------- Confetti ---------- */
  function confetti() {
    if (reduceMotion) return;
    const c = $('#confetti'), ctx = c.getContext('2d'); c.width = innerWidth; c.height = innerHeight;
    const cols = ['#a982f2', '#c3a8ff', '#ffc9e0', '#ffb53e', '#8d63d9', '#fff'];
    const ps = Array.from({ length: 140 }, () => ({ x: innerWidth / 2, y: innerHeight * .6, vx: (Math.random() - .5) * 16, vy: -Math.random() * 16 - 4, s: 5 + Math.random() * 7, r: Math.random() * 6, vr: (Math.random() - .5) * .4, c: cols[(Math.random() * cols.length) | 0] }));
    let f = 0;
    (function tick() {
      ctx.clearRect(0, 0, c.width, c.height);
      ps.forEach(p => { p.vy += .35; p.x += p.vx; p.y += p.vy; p.r += p.vr; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore(); });
      if (++f < 170) requestAnimationFrame(tick); else ctx.clearRect(0, 0, c.width, c.height);
    })();
  }

  /* ---------- Opening hours ---------- */
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const fmtH = h => { const ap = h >= 12 ? 'PM' : 'AM'; return ((h + 11) % 12 + 1) + ':00 ' + ap; };
  function renderHours() {
    const today = new Date().getDay();
    $('#hoursList').innerHTML = [1, 2, 3, 4, 5, 6, 0].map(d => {
      const h = CONFIG.hours[d];
      return `<li class="${d === today ? 'today' : ''}"><span>${DAYS[d]}</span><span>${h ? fmtH(h[0]) + ' – ' + fmtH(h[1]) : 'Closed'}</span></li>`;
    }).join('');
  }
  function updateStatus() {
    const now = new Date(), h = CONFIG.hours[now.getDay()], dec = now.getHours() + now.getMinutes() / 60;
    const open = !!h && dec >= h[0] && dec < h[1];
    const pill = $('#openStatus');
    pill.className = 'pill ' + (open ? 'open' : 'closed');
    pill.textContent = open ? `Open now · closes ${fmtH(h[1])}` : 'Closed right now · see hours below';
    $('#clockStatus').textContent = open ? '● We’re open' : '○ We’re closed';
    $('#clockTime').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  renderHours(); updateStatus(); setInterval(updateStatus, 15000);

  /* ---------- Menu ---------- */
  let favs = store.get('favs', []), cat = 'all';
  const grid = $('#menuGrid');
  function renderMenu() {
    const q = $('#menuSearch').value.trim().toLowerCase(), sort = $('#menuSort').value;
    let items = MENU.filter(m => (cat === 'all' || (cat === 'favs' ? favs.includes(m.id) : m.cat === cat)) && (!q || (m.name + ' ' + m.desc).toLowerCase().includes(q)));
    if (sort === 'low') items.sort((a, b) => a.price - b.price);
    if (sort === 'high') items.sort((a, b) => b.price - a.price);
    if (sort === 'az') items.sort((a, b) => a.name.localeCompare(b.name));
    grid.innerHTML = items.map((m, i) => `
      <article class="menu-card" style="animation-delay:${i * 60}ms">
        <div class="menu-img">
          <img loading="lazy" src="${m.img}" alt="${esc(m.name)}" onerror="this.onerror=null;this.src='${FALLBACK}'" />
          ${m.tag ? `<span class="tag">${esc(m.tag)}</span>` : ''}
          <button class="fav ${favs.includes(m.id) ? 'on' : ''}" data-fav="${m.id}" aria-label="Favourite ${esc(m.name)}">♥</button>
        </div>
        <div class="menu-body">
          <h3>${esc(m.name)}</h3><p>${esc(m.desc)}</p>
          <div class="menu-foot"><span class="price">${money(m.price)}</span><button class="add-btn" data-add="${m.id}">+ Add</button></div>
        </div>
      </article>`).join('');
    $('#menuEmpty').hidden = items.length > 0;
  }
  $('#menuTabs').onclick = e => {
    const t = e.target.closest('.tab'); if (!t) return;
    $$('.tab').forEach(x => x.classList.remove('active')); t.classList.add('active'); cat = t.dataset.cat; renderMenu();
  };
  $('#menuSearch').oninput = renderMenu; $('#menuSort').onchange = renderMenu;
  grid.onclick = e => {
    const f = e.target.closest('[data-fav]'), a = e.target.closest('[data-add]');
    if (f) {
      const id = f.dataset.fav; favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id]; store.set('favs', favs);
      f.classList.toggle('on'); toast(favs.includes(id) ? 'Saved to favourites 💜' : 'Removed from favourites');
      if (cat === 'favs') renderMenu();
    }
    if (a) addToCart(a.dataset.add);
  };
  renderMenu();

  /* ---------- Cart ---------- */
  let cart = store.get('cart', {});
  const drawer = $('#drawer'), overlay = $('#overlay');
  const openCart = () => { drawer.classList.add('open'); overlay.classList.add('show'); };
  const closeCart = () => { drawer.classList.remove('open'); overlay.classList.remove('show'); };
  $('#cartOpen').onclick = openCart; $('#cartClose').onclick = closeCart; overlay.onclick = closeCart;
  function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1; saveCart();
    const c = $('#cartCount'); c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump');
    toast(`${MENU.find(m => m.id === id).name} added 🛍️`);
  }
  function saveCart() { store.set('cart', cart); renderCart(); }
  function renderCart() {
    const ids = Object.keys(cart).filter(id => MENU.some(m => m.id === id));
    const count = ids.reduce((s, id) => s + cart[id], 0);
    $('#cartCount').textContent = count;
    $('#cartItems').innerHTML = ids.length ? ids.map(id => {
      const m = MENU.find(x => x.id === id);
      return `<div class="cart-item"><img src="${m.img}" alt="" onerror="this.onerror=null;this.src='${FALLBACK}'"/>
        <div><h5>${esc(m.name)}</h5><small>${money(m.price)}</small>
        <div class="qty"><button data-dec="${id}">−</button><b>${cart[id]}</b><button data-inc="${id}">+</button></div></div>
        <button class="rm" data-rm="${id}" aria-label="Remove">✕</button></div>`;
    }).join('') : '<p class="cart-empty">Your order is empty 🍃<br>Add something sweet from the menu.</p>';
    $('#cartTotal').textContent = money(ids.reduce((s, id) => s + cart[id] * MENU.find(m => m.id === id).price, 0));
  }
  $('#cartItems').onclick = e => {
    const t = e.target;
    if (t.dataset.inc) cart[t.dataset.inc]++;
    if (t.dataset.dec) { cart[t.dataset.dec]--; if (cart[t.dataset.dec] <= 0) delete cart[t.dataset.dec]; }
    if (t.dataset.rm) delete cart[t.dataset.rm];
    saveCart();
  };
  $('#cartClear').onclick = () => { cart = {}; saveCart(); };
  $('#cartCheckout').onclick = () => {
    const ids = Object.keys(cart); if (!ids.length) return toast('Add something first 🍰');
    const lines = ids.map(id => { const m = MENU.find(x => x.id === id); return `• ${cart[id]} × ${m.name} — ${money(m.price * cart[id])}`; });
    const total = ids.reduce((s, id) => s + cart[id] * MENU.find(m => m.id === id).price, 0);
    const msg = `Hi Lavender! I'd like to order:\n${lines.join('\n')}\n\nTotal: ${money(total)}`;
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    confetti();
  };
  renderCart();

  /* ---------- Quiz ---------- */
  (function quiz() {
    const body = $('#quizBody'), barEl = $('#quizBar'); let step = 0, answers = [];
    function show() {
      if (step >= QUIZ.length) return result();
      barEl.style.width = (step / QUIZ.length) * 100 + '%';
      const q = QUIZ[step];
      body.innerHTML = `<div class="quiz-step"><h3 class="quiz-q">${q.q}</h3><div class="quiz-opts">${q.o.map(o => `<button class="quiz-opt" data-v="${o[0]}">${o[1]}</button>`).join('')}</div></div>`;
    }
    function result() {
      barEl.style.width = '100%';
      const tally = {}; answers.forEach(a => { const id = QUIZ_RESULTS[a]; tally[id] = (tally[id] || 0) + 1; });
      const id = Object.keys(tally).sort((a, b) => tally[b] - tally[a])[0] || answers.map(a => QUIZ_RESULTS[a])[0];
      const m = MENU.find(x => x.id === id);
      body.innerHTML = `<div class="quiz-step quiz-result"><img src="${m.img}" alt="${esc(m.name)}" onerror="this.onerror=null;this.src='${FALLBACK}'"/>
        <p>Your perfect match is…</p><h3>${esc(m.name)}</h3><p>${esc(m.desc)}</p>
        <button class="btn btn-primary" id="qAdd">Add to order · ${money(m.price)}</button>
        <button class="btn btn-ghost" id="qAgain">Try again</button></div>`;
      confetti();
      $('#qAdd').onclick = () => { addToCart(m.id); openCart(); };
      $('#qAgain').onclick = () => { step = 0; answers = []; show(); };
    }
    body.onclick = e => { const b = e.target.closest('.quiz-opt'); if (!b) return; answers.push(b.dataset.v); step++; show(); };
    show();
  })();

  /* ---------- Gallery lightbox ---------- */
  const lb = $('#lightbox');
  $('#galleryGrid').onclick = e => { if (e.target.tagName === 'IMG') { $('#lbImg').src = e.target.src; $('#lbImg').alt = e.target.alt; lb.classList.add('show'); } };
  lb.onclick = e => { if (e.target !== $('#lbImg')) lb.classList.remove('show'); };
  addEventListener('keydown', e => { if (e.key === 'Escape') { lb.classList.remove('show'); closeCart(); $('#modal').classList.remove('show'); } });

  /* ---------- Reviews carousel ---------- */
  let reviews = [...REVIEWS, ...store.get('reviews', [])], ci = 0, timer;
  const track = $('#carouselTrack'), dots = $('#carDots');
  function renderReviews() {
    track.innerHTML = reviews.map(r => `<div class="review"><div class="stars">${'★'.repeat(r.s)}${'☆'.repeat(5 - r.s)}</div><p>“${esc(r.t)}”</p><cite>— ${esc(r.n)}</cite></div>`).join('');
    dots.innerHTML = reviews.map((_, i) => `<button class="${i === ci ? 'on' : ''}" data-i="${i}" aria-label="Review ${i + 1}"></button>`).join('');
    track.style.transform = `translateX(-${ci * 100}%)`;
  }
  function go(i) { ci = (i + reviews.length) % reviews.length; renderReviews(); restart(); }
  function restart() { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => go(ci + 1), 5500); }
  $('#carPrev').onclick = () => go(ci - 1); $('#carNext').onclick = () => go(ci + 1);
  dots.onclick = e => { if (e.target.dataset.i) go(+e.target.dataset.i); };
  $('#carousel').addEventListener('mouseenter', () => clearInterval(timer)); $('#carousel').addEventListener('mouseleave', restart);
  renderReviews(); restart();

  let rating = 5; const stars = $$('#starInput button');
  const paintStars = () => stars.forEach(s => s.classList.toggle('on', +s.dataset.v <= rating)); paintStars();
  stars.forEach(s => s.onclick = () => { rating = +s.dataset.v; paintStars(); });
  const flag = el => { el.classList.add('invalid'); setTimeout(() => el.classList.remove('invalid'), 600); };
  $('#reviewForm').onsubmit = e => {
    e.preventDefault(); const n = $('#revName'), t = $('#revText'); let ok = true;
    if (!n.value.trim()) { flag(n); ok = false; } if (!t.value.trim()) { flag(t); ok = false; } if (!ok) return;
    const mine = store.get('reviews', []); mine.push({ n: n.value.trim(), s: rating, t: t.value.trim() }); store.set('reviews', mine);
    reviews.push({ n: n.value.trim(), s: rating, t: t.value.trim() }); n.value = t.value = ''; go(reviews.length - 1);
    confetti(); toast('Thank you for your review 💜');
  };

  /* ---------- Reservation ---------- */
  const rDate = $('#rDate'); rDate.min = new Date().toISOString().split('T')[0];
  let guests = 2; const gOut = $('#gCount');
  $('#gMinus').onclick = () => { guests = Math.max(1, guests - 1); gOut.textContent = guests; };
  $('#gPlus').onclick = () => { guests = Math.min(20, guests + 1); gOut.textContent = guests; };
  $('#reserveForm').onsubmit = e => {
    e.preventDefault();
    const f = ['#rName', '#rPhone', '#rDate', '#rTime'].map(s => $(s)); let ok = true;
    f.forEach(el => { if (!el.value.trim()) { flag(el); ok = false; } }); if (!ok) return toast('Please fill in the highlighted fields');
    const [n, p, d, t] = f.map(x => x.value.trim()), note = $('#rNote').value.trim();
    const msg = `Hi Lavender! Table request:\nName: ${n}\nPhone: ${p}\nDate: ${d}\nTime: ${t}\nGuests: ${guests}${note ? '\nNote: ' + note : ''}`;
    store.set('lastReservation', { n, p, d, t, guests });
    confetti(); modal('🎉', `Table requested, ${n.split(' ')[0]}!`, `${guests} guest${guests > 1 ? 's' : ''} on ${d} at ${t}. We’ll open WhatsApp so you can confirm with us.`);
    $('#modalClose').onclick = () => { $('#modal').classList.remove('show'); window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener'); $('#modalClose').onclick = () => $('#modal').classList.remove('show'); };
    e.target.reset(); guests = 2; gOut.textContent = 2;
  };

  /* ---------- Newsletter ---------- */
  $('#newsletter').onsubmit = e => {
    e.preventDefault(); const em = $('#nlEmail');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)) { flag(em); return toast('Please enter a valid email'); }
    store.set('newsletter', em.value); em.value = ''; confetti(); modal('💌', 'Welcome to the club!', 'Sweet news is on its way to your inbox.');
  };
})();
