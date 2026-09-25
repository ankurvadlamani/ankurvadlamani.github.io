# How to update this site

All the content lives in three data files. You never need to touch the HTML or JavaScript to add or remove items.

| What you want to change | File to edit |
|---|---|
| Projects (home page case studies and the Projects page) | `assets/data/projects.js` |
| Blog posts | `assets/data/posts.js` |
| Headline stats, interests, experience, education, skills, publications, awards | `assets/data/profile.js` |
| Menu links (all pages) | `NAV_LINKS` at the top of `assets/js/site.js` |
| Colours and fonts | the `:root` block at the top of `assets/css/site.css` |
| Hero headline, "Now" line, About paragraphs | `index.html` (they're marked with comments) |

## Add a project
1. Open `assets/data/projects.js` on GitHub and click the pencil (edit) icon.
2. Copy an existing `{ ... },` block and paste it where you want the new project to appear.
3. Change the text. Give it a new `id` with no spaces.
   - `featured: true` also shows it as a large case study on the home page.
   - With no photo, leave out `image` and add `placeholder: ['BIG', 'small text']`.
   - For `video`, use the YouTube **embed** link: `https://www.youtube.com/embed/VIDEO_ID`.
4. Click **Commit changes**. The site updates in about a minute.

To remove a project, delete its whole `{ ... },` block.

## Add a blog post
1. In `assets/data/posts.js`, copy a block to the **top** of the list and give it a new `id`.
2. Write the body in `content` using simple HTML: `<p>…</p>`, `<h2>…</h2>`, `<ul><li>…</li></ul>`.
3. Add images with `${pic("image-url", "caption")}`.
4. To hide an unfinished post, add `draft: true`.

The post's shareable link is `blogs.html#post-ID`.

## Add an experience, award or skill
Open `assets/data/profile.js`, copy a line in the right list, edit it and commit.

## Tips
- Every block needs a comma after its closing `}` except the last one. If the page goes blank after an edit, a missing comma or quote is the usual cause.
- To check an edit before committing, download the repo, open `index.html` in your browser and look for blank sections.
- Case-study pages such as `auv.html` are standalone. Copy `auv.html` to make a new one, then link it from a project with `caseStudy: 'newpage.html'`.
