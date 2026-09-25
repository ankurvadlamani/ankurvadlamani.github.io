// Builds the home page sections from assets/data/profile.js and assets/data/projects.js.
// You shouldn't need to edit this file to change content.

function fill(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }

function timelineItem(i) {
  const body = i.points ? `<ul>${i.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>` : `<p>${esc(i.text)}</p>`;
  return `<li class="${i.current ? 'current' : ''}"><time>${esc(i.when)}</time><b>${esc(i.title)}</b>${body}</li>`;
}

function caseStudy(p) {
  const buttons = [
    p.caseStudy ? `<a class="btn btn-ink btn-sm" href="${p.caseStudy}">Read case study ${ICON.arrow}</a>` : '',
    p.video ? `<button class="btn btn-line btn-sm" data-video="${p.video}">▶ Watch video</button>` : '',
    !p.caseStudy ? `<a class="btn btn-line btn-sm" href="portfolio.html#${p.id}">Project details</a>` : ''
  ].join('');
  return `<article class="case reveal">
    <div class="case-media">${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ''}${projectMedia(p)}</div>
    <div class="case-body">
      <p class="eyebrow">${esc(p.eyebrow || p.categories.join(' · '))}</p>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.summary)}</p>
      <dl class="prr">
        <div><dt>Problem</dt><dd>${esc(p.problem)}</dd></div>
        <div><dt>My role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Result</dt><dd>${esc(p.result)}</dd></div>
      </dl>
      <div class="tags">${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      <div class="actions">${buttons}</div>
    </div>
  </article>`;
}

document.addEventListener('DOMContentLoaded', () => {
  fill('proof', PROFILE.proof.map(s => `<div><strong>${s.big}</strong><span>${esc(s.small)}</span></div>`).join(''));
  fill('interests', PROFILE.interests.map(i => `<li><div><b>${esc(i.title)}</b><span>${esc(i.text)}</span></div></li>`).join(''));
  fill('facts', PROFILE.facts.map(f => `<div class="fact"><small>${esc(f.label)}</small><b>${esc(f.value)}</b></div>`).join(''));

  fill('cases', PROJECTS.filter(p => p.featured).map(caseStudy).join(''));
  fill('more-projects', PROJECTS.filter(p => !p.featured).slice(0, 4).map(p =>
    `<a href="portfolio.html#${p.id}"><small>${esc(p.label)}</small><b>${esc(p.title)}</b><span>${esc(p.summary)}</span></a>`).join(''));

  fill('experience', PROFILE.experience.map(timelineItem).join(''));
  fill('education', PROFILE.education.map(timelineItem).join(''));
  fill('skills', PROFILE.skills.map(s =>
    `<div class="skill reveal"><h3>${esc(s.group)}</h3><div class="tags">${s.items.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div></div>`).join(''));

  fill('publications', PROFILE.publications.map(p => `<div class="paper reveal">
    <div class="icon">${ICON.paper}</div>
    <div><small>${esc(p.venue)}</small><b>${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">${esc(p.title)}</a>` : esc(p.title)}</b>
    <span>${p.authors}. ${esc(p.note)}</span></div></div>`).join(''));
  fill('awards', PROFILE.awards.map(a =>
    `<div class="award reveal"><strong>${esc(a.big)}</strong><b>${esc(a.title)}</b><span>${esc(a.text)}</span></div>`).join(''));

  watchReveals();
});
