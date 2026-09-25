# Thomas Credle — Personal Website

Professional site and publishing platform for J. Thomas Credle: consulting, speaking, teaching, writing, video and books.

```
Direction: Editorial / "private-bank annual report" — paper & ink, one ledger-green accent, brass hairlines
Brand: Created fresh (personal brand, deliberately separate from UGA/SBDC marks)
References: Stripe Press, Bloomberg Businessweek online, The Browser
One-line promise: A banker's inside view, explained by a teacher — "Twenty years on the lender's side of the desk. Now on yours."
```

Built with [Astro](https://astro.build) — a fast, static site with no server or database to maintain.

## What's on the site

| Page | What it's for | Where the content lives |
| --- | --- | --- |
| `/` Home | Positioning, track record, services, case studies, testimonials, latest writing | `src/data/site.ts` |
| `/about` | Bio, career timeline, education, certifications, awards, advisory service | `src/data/site.ts` |
| `/services` | Consulting offers and process | `src/data/site.ts` |
| `/speaking` | Signature topics and past talks | `src/pages/speaking.astro`, `src/data/site.ts` |
| `/writing` | Blog posts, articles and how-to guides (filterable, with RSS) | `src/content/writing/*.md` |
| `/videos` | Video lessons + the course/workshop catalog | `src/content/videos/*.md`, `src/data/site.ts` |
| `/books` | Books — published, in progress or forthcoming | `src/content/books/*.md` |
| `/contact` | Contact form (Formspree), email, LinkedIn | `src/data/site.ts` |
| `/styleguide` | Every design token and component, for review | `src/styles/tokens.css` |
| `/rss.xml`, `/sitemap-index.xml` | Feed for subscribers; sitemap for search engines | generated |

## Posting new content

### Option A — in the browser (no code)

1. Go to **[app.pagescms.org](https://app.pagescms.org)** and sign in with GitHub.
2. Open this repository. You'll see **Writing**, **Videos** and **Books**.
3. Click **Add entry**, fill in the form, upload a cover image if you like, and **Save**.
4. Saving commits to GitHub; the site rebuilds and publishes automatically in about a minute.

Tick **Draft** to save something without publishing it.

### Option B — Markdown files

Copy the `_template.md` in `src/content/writing/`, `src/content/videos/` or `src/content/books/`, rename it (the filename becomes the URL), remove the leading underscore, and edit. Files starting with `_` are ignored.

- **Blog vs. article vs. how-to:** set `type: blog`, `article` or `instruction`.
- **Videos:** paste the YouTube ID (`youtube.com/watch?v=THIS_PART`) into `youtubeId`, or use `vimeoId` / `videoUrl`.
- **Books:** set `status` and add buy links under `links`.
- **Linking to an article published elsewhere** (LinkedIn, a journal, SBDC annual report): set `externalUrl` and it will link out.

### Editing profile, services, stats, talks, testimonials

All of it is in **`src/data/site.ts`** — plain text you can edit in GitHub's web editor.

## Before launch — fill these in

In `src/data/site.ts`:

- `email` — a public contact email (enables the email link and the mailto fallback for the form).
- `formEndpoint` — create a free form at [formspree.io](https://formspree.io) and paste its URL so the contact form delivers to your inbox. Until one of these two is set, `/contact` directs visitors to LinkedIn.
- `bookingUrl` — optional Calendly / Cal.com / Microsoft Bookings link; adds "Book a call" buttons.
- `social.youtube` — optional channel URL once videos are posted.

Also recommended: a professional headshot. Save it as `public/images/headshot.jpg` and replace the panel photo in the home hero (`src/pages/index.astro`) and the About page.

## Publishing (GitHub Pages)

The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

1. Merge this branch into `main`.
2. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The site will be live at `https://jtcredle1868.github.io/PersonalWebsite/`.

**Custom domain (recommended):** buy a domain (e.g. `thomascredle.com`), add it under **Settings → Pages → Custom domain**, and follow GitHub's DNS instructions. The build picks up the new address automatically.

> Images placed *inside* a post's body should use a full URL, or be used as the post's **cover** image, when the site is served from the `/PersonalWebsite/` sub-path. On a custom domain this doesn't matter.

## Running locally

```bash
npm install
npm run dev       # http://localhost:4321 — drafts are visible in dev
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Design system

- **Tokens:** `src/styles/tokens.css` — colors (light + dark), fluid type scale, spacing, motion. Components never hard-code values.
- **Type:** Fraunces (display) + Manrope (body), via Google Fonts.
- **Signature motion:** a staggered reveal of hero lines on load; disabled for `prefers-reduced-motion`.
- **Dark mode:** follows the system setting; the footer has a manual toggle.

## Content sources

Profile content was compiled from Thomas's promotion dossier (CV, achievements, letters of evaluation), his "Facilitation: Enhancement of Student Engagement" presentation, and the public UGA SBDC story on CARGO Columbus. The three starter articles are adapted from his own presentations and courses and should be reviewed before launch. Photos are from his own event materials.
