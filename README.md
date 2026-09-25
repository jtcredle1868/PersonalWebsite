# Thomas Credle — Personal Website

Professional site and publishing platform for J. Thomas Credle: consulting, speaking, teaching, writing, video and books.

```
Direction: Editorial / "private-bank annual report" — warm paper & ink, navy accent, copper hairlines
Brand: Inherited from the J. Thomas Credle · Business Consultant logo (navy #123f58, copper #a2663f)
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
| `/blog` | Blog posts, articles and how-to guides (filterable, with RSS). Old `/writing` links redirect here. | `src/content/writing/*.md` |
| `/#discovery` | "Request a discovery call" form on the home page (also the header button) | `src/components/DiscoveryCall.astro` |
| `/videos` (Training) | Video lessons + the course/workshop catalog | `src/content/videos/*.md`, `src/data/site.ts` |
| `/training-request` | Detailed form for custom workshops, courses and training content | `src/pages/training-request.astro` |
| `/store` | E-books, training materials, tools and templates with Buy buttons | `src/content/products/*.md` |
| `/books` | Books — published, in progress or forthcoming | `src/content/books/*.md` |
| `/contact` | Contact box: name, email, telephone, social profile, message, response request; email info@john-thomas-credle.com | `src/pages/contact/index.astro`, `src/data/site.ts` |
| `/styleguide` | Every design token and component, for review | `src/styles/tokens.css` |
| `/rss.xml`, `/sitemap-index.xml` | Feed for subscribers; sitemap for search engines | generated |

## Posting new content

### Option A — in the browser (no code)

1. Go to **[app.pagescms.org](https://app.pagescms.org)** and sign in with GitHub.
2. Open this repository. You'll see **Blog**, **Videos** and **Books**.
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

## Selling in the Store

The site is static, so checkout happens on a payment service — the **Buy now** button links to it. Recommended: **Stripe Payment Links** (Stripe dashboard → Payment Links → create a product, and under *After payment* add the download link or enable file delivery), or **Gumroad / Lemon Squeezy**, which host the download file and email it to the buyer automatically.

For each product (Pages CMS → *Store products*, or `src/content/products/*.md`):

1. Set **Price**, paste the **Checkout link**, and change **Status** to *Available*.
2. Optionally upload a **Cover image** — otherwise a branded navy cover is generated.

The four starter products are marked *Coming soon* and show a "Notify me" link until you add a price and checkout link.

## Forms

All three forms — **Contact**, **Discovery call** (home page) and **Request custom training** — are delivered the same way, with a subject line that says which form it came from.

## Contact form

Submissions are delivered by [FormSubmit](https://formsubmit.co) to **info@john-thomas-credle.com** (set in `src/data/site.ts`) — no account needed.

1. Make sure the `info@john-thomas-credle.com` mailbox exists and receives mail (set up email hosting with your domain registrar, Google Workspace or Microsoft 365).
2. Submit the form once yourself. FormSubmit emails that inbox a one-time **activation** link — click it. Every submission after that arrives as an email with all fields in a table, and the visitor lands on `/contact/thanks`.

Prefer Formspree? Paste its endpoint into `formEndpoint` in `src/data/site.ts`.

Optional settings in `src/data/site.ts`: `bookingUrl` (Calendly / Cal.com link — adds "Book a call" buttons) and `social.youtube`.

## Publishing & custom domain (john-thomas-credle.com)

The workflow in `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`. `public/CNAME` already contains `john-thomas-credle.com`.

To connect the domain:

1. **GitHub:** Settings → Pages → **Custom domain** → enter `john-thomas-credle.com` → Save.
2. **DNS at your domain registrar** — add these records:

   | Type | Name / Host | Value |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `jtcredle1868.github.io` |

   Remove any existing "parked" or forwarding A/CNAME records for `@` and `www` first. Leave MX (email) records alone.
3. When the DNS check passes (minutes to a few hours), tick **Enforce HTTPS** on the same settings page.
4. Re-run the latest **Deploy site to GitHub Pages** workflow (Actions tab → Re-run) so links are rebuilt for the new domain.

Until the domain is live, the site stays available at `https://jtcredle1868.github.io/PersonalWebsite/`.

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
