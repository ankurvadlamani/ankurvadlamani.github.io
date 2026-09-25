// Shared helpers used by every page: navigation bar, footer, video pop-up and scroll animations.
// Edit NAV_LINKS to change the menu on all pages at once.

document.documentElement.classList.add('js');

const NAV_LINKS = [
  { text: 'Work', href: 'index.html#work' },
  { text: 'About', href: 'index.html#about' },
  { text: 'Experience', href: 'index.html#journey' },
  { text: 'Projects', href: 'portfolio.html', page: 'projects' },
  { text: 'Blog', href: 'blogs.html', page: 'blog' },
  { text: 'Contact', href: 'index.html#contact' }
];
const CV_FILE = 'ankurvadlamani_resume.pdf';

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ICON = {
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-6-6l6 6-6 6"/></svg>',
  menu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  paper: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h6"/></svg>'
};

// Images in blog posts: ${pic("url", "caption")}
function pic(src, caption = '') {
  return `<figure><img src="${src}" alt="${esc(caption)}" loading="lazy">${caption ? `<figcaption>${esc(caption)}</figcaption>` : ''}</figure>`;
}

function renderNav() {
  const el = document.getElementById('site-nav');
  if (!el) return;
  const page = document.body.dataset.page;
  const onHome = page === 'home';
  const links = NAV_LINKS.map(l => {
    const href = onHome && l.href.startsWith('index.html#') ? l.href.slice(10) : l.href;
    return `<a href="${href}" class="${l.page === page ? 'on' : ''}">${l.text}</a>`;
  }).join('');
  el.className = 'nav';
  el.innerHTML = `<div class="wrap">
    <a href="${onHome ? '#top' : 'index.html'}" class="logo"><i>AV</i>Ankur Vadlamani</a>
    <button class="menu-btn" aria-label="Open menu" aria-expanded="false">${ICON.menu}</button>
    <nav class="nav-links" aria-label="Main">${links}</nav>
    <a class="btn btn-copper" href="${CV_FILE}" download="Ankur_Vadlamani_Resume.pdf">${ICON.download}CV</a>
  </div>`;
  const btn = el.querySelector('.menu-btn'), nav = el.querySelector('.nav-links');
  btn.addEventListener('click', () => btn.setAttribute('aria-expanded', nav.classList.toggle('open')));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `<div class="wrap"><span>© ${new Date().getFullYear()} Ankur Vadlamani</span><span>Integrating hardware and software, one jumper at a time.</span></div>`;
}

// Any element with data-video="https://www.youtube.com/embed/..." opens the video in a pop-up.
function setupVideoModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = '<div class="video-box"><button class="x" aria-label="Close video" style="position:static;margin:0 0 10px auto;display:block">✕</button><div class="video" style="margin:0"></div></div>';
  document.body.appendChild(modal);
  const slot = modal.querySelector('.video');
  const close = () => { modal.classList.remove('open'); slot.innerHTML = ''; document.body.style.overflow = ''; };
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-video]');
    if (!b) return;
    slot.innerHTML = `<iframe src="${b.dataset.video}?autoplay=1" title="Project video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  modal.querySelector('.x').onclick = close;
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
}

// Fade sections in as they scroll into view. Call again after adding new .reveal elements.
const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); } }), { threshold: .12 })
  : null;
function watchReveals() {
  document.querySelectorAll('.reveal:not(.in)').forEach(el => revealObserver ? revealObserver.observe(el) : el.classList.add('in'));
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  setupVideoModal();
  watchReveals();
});
