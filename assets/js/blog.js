// Builds the Blog page from assets/data/posts.js.
// You shouldn't need to edit this file to change content.

document.addEventListener('DOMContentLoaded', () => {
  const posts = POSTS.filter(p => !p.draft);
  const list = document.getElementById('posts');
  const article = document.getElementById('article');
  const meta = p => `<div class="meta"><span class="cat">${esc(p.category)}</span><span>${esc(p.date)}</span><span>${esc(p.readTime)}</span></div>`;

  list.innerHTML = posts.length ? posts.map(p => `
    <a class="post" href="#post-${p.id}">
      <img src="${p.image}" alt="${esc(p.imageAlt || p.title)}" loading="lazy">
      <div class="post-body">${meta(p)}<h2>${esc(p.title)}</h2><p>${esc(p.excerpt)}</p><span class="go">Read the post →</span></div>
    </a>`).join('') : '<p class="empty">New posts are on the way.</p>';

  function route() {
    const m = location.hash.match(/^#post-(\d+)$/);
    const p = m && posts.find(x => x.id === Number(m[1]));
    if (!p) {
      document.body.classList.remove('reading');
      article.innerHTML = '';
      document.title = 'Blog | Ankur Vadlamani';
      return;
    }
    article.innerHTML = `<a class="back" href="#">← All posts</a>${meta(p)}<h1>${esc(p.title)}</h1>
      <div class="prose">${p.content}</div>
      <div class="endnote"><span>Questions or ideas about this? I'd like to hear them.</span><a class="btn btn-line btn-sm" href="mailto:ankurvadlamani@gmail.com">Email me</a></div>`;
    document.body.classList.add('reading');
    document.title = p.title + ' | Ankur Vadlamani';
    scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();
});
