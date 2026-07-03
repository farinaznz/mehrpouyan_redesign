# Mehrpouyan Sabz Andisheh — New Website

A complete redesign of the MSANGO website: modern, mobile-responsive, bilingual
(Persian default / English toggle), with no build tools required. Just plain
HTML, CSS, and a little JavaScript.

## What's inside

```
index.html, about.html, activities.html, gallery.html, donate.html, contact.html   → Persian (default)
en/index.html, en/about.html, en/activities.html, en/gallery.html, en/donate.html, en/contact.html → English
assets/css/style.css   → all styling (colors, layout, components)
assets/js/main.js      → mobile menu + small interactions
assets/img/            → logo, hero illustration, and a custom icon set (all SVG, so they stay crisp at any size and are easy to recolor later)
```

Every Persian page has a "🌐 English" button in the header that links to its
English twin, and vice versa, so visitors can switch language on any page.

## How to preview it

Just open `index.html` in a browser — no server or build step needed. (Some
browsers block local fonts/scripts when opening files directly with
`file://`; if anything looks off, run `python3 -m http.server` inside this
folder and open `http://localhost:8000`.)

## How to publish it

Upload this whole folder to wherever the current site is hosted (replacing
the old WordPress files), or to any static host — Netlify, Cloudflare Pages,
GitHub Pages, or a plain shared-hosting FTP account all work, since there's
no database or server-side code involved.

## Content recovered from the live WordPress site

The public WordPress API for `mehrpouyanandishe.ir` was reachable, so the
site now includes recovered public content:

- **Phone, email, and address** from the live Contact page.
- **Bank account, IBAN, and card number** from the live Support page.
- **Recent news cards** from the latest public posts.
- **Gallery images** copied locally from the WordPress media library into
  `assets/img/live/`.
- **Telegram link** remains `https://telegram.me/jampa96`; it appeared on the
  existing redesign and should still be manually verified before publishing.

## About the images

Given that many of the original site's photos include community members and
children, the site still uses custom SVG graphics for the main visual identity
and only a small set of public WordPress images in the Gallery/News page. To
swap or add another real photo, replace a gallery block like this:

```html
<div class="photo-slot photo-slot--image">
  <img src="assets/img/live/example.jpg" alt="Descriptive caption">
  <span>Visible caption</span>
</div>
```

Recommended: landscape photos, at least 1200px wide, consistently cropped/
color-graded for a cohesive look (I'm happy to do that treatment once real
photos are available).

## Content sources

Text content was carried over and polished/translated from the current live
pages (About, Activities) that were reachable during this session. The
Gallery, Donate, and Contact pages now use public content fetched from the
existing WordPress site. A raw snapshot of the fetched content is kept in
`work/live-site/` for reference.
