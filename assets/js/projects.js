// Builds the Projects page from assets/data/projects.js.
// You shouldn't need to edit this file to change content.

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('grid');
  const filters = document.getElementById('filters');
  const modal = document.getElementById('project-modal');
  const body = document.getElementById('m-body');
  let current = 'All';

  function render() {
    filters.innerHTML = PROJECT_FILTERS.map(c => {
      const n = c === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.categories.includes(c)).length;
      return n ? `<button class="chip ${c === current ? 'on' : ''}" data-c="${esc(c)}" aria-pressed="${c === current}">${esc(c)}<span>${n}</span></button>` : '';
    }).join('');
    grid.innerHTML = PROJECTS.filter(p => current === 'All' || p.categories.includes(current)).map(p => `
      <button class="card" data-id="${esc(p.id)}">
        <div class="media"><span class="badge" style="left:14px;top:14px;font-size:11.5px;padding:5px 9px">${esc(p.label)}</span>${projectMedia(p)}</div>
        <div class="card-body">
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.summary)}</p>
          <div class="tags">${p.tags.slice(0, 4).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          <span class="go">Details →</span>
        </div>
      </button>`).join('');
  }

  function open(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    document.getElementById('m-cat').textContent = p.categories.join(' · ');
    document.getElementById('m-title').textContent = p.title;
    document.getElementById('m-sum').textContent = p.summary;
    const media = p.video ? `<div class="video"><iframe src="${p.video}" title="${esc(p.title)} video" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`
      : p.image ? `<img class="pic" src="${p.image}" alt="${esc(p.title)}">` : '';
    const buttons = [
      p.caseStudy ? `<a class="btn btn-ink btn-sm" href="${p.caseStudy}">Read the full case study →</a>` : '',
      p.link ? `<a class="btn btn-line btn-sm" href="${p.link.href}">${esc(p.link.text)} →</a>` : ''
    ].join('');
    body.innerHTML = `${media}
      <dl class="prr">
        <div><dt>Problem</dt><dd>${esc(p.problem)}</dd></div>
        <div><dt>My role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Result</dt><dd>${esc(p.result)}</dd></div>
      </dl>
      <div class="tags">${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      ${buttons ? `<div class="actions">${buttons}</div>` : ''}`;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    history.replaceState(null, '', '#' + p.id);
    modal.querySelector('.x').focus();
  }

  function close() {
    modal.classList.remove('open');
    body.innerHTML = '';
    document.body.style.overflow = '';
    history.replaceState(null, '', location.pathname);
  }

  filters.addEventListener('click', e => { const b = e.target.closest('[data-c]'); if (b) { current = b.dataset.c; render(); } });
  grid.addEventListener('click', e => { const c = e.target.closest('[data-id]'); if (c) open(c.dataset.id); });
  modal.querySelector('.x').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });

  render();
  if (location.hash) open(location.hash.slice(1));
});
