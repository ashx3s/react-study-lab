# Music Explorer — React Study Lab

A hands-on tutorial project for SAIT students learning React and Next.js.
You'll build a music browsing site using static JSON data and the Next.js App Router.

---

## Get a copy

To work on this project you'll need your own copy of the repository.

**Option 1 — Fork (recommended if you have a GitHub account)**

Click **Fork** at the top of the GitHub page. This creates your own copy under your account so you can commit and push freely.

**Option 2 — Download a ZIP**

Click **Code → Download ZIP** on the GitHub page, then extract it to a folder on your computer.
You won't have git history or the ability to push, but it's fine for working through the challenges locally.

Once you have a copy, open a terminal in the `react-study-lab/` folder and continue below.

---

## Getting started

All commands run from the `react-study-lab/` folder:

```bash
npm run dev     # start the dev server at http://localhost:3000
npm run build   # production build
```

---

## How the challenges work

There are five challenges in the `docs/` folder. Each one targets a different skill level.
Pick the one that fits where you are — you don't need to do all of them.

| File | Challenge | Best for |
|---|---|---|
| `docs/01-home.md` | Build the home page and add components | New to React |
| `docs/02-nav.md` | Make the nav fully responsive | Comfortable with components, exploring Next.js |
| `docs/03-gallery.md` | Wire up search and filter with state | Intermediate — working on state |
| `docs/04-gallery-item.md` | Build the dynamic track detail page | Intermediate — learning Next.js routing |
| `docs/05-refactoring.md` | Clean up messy code and improve app design | Intermediate — thinking about architecture |

If you're not sure where to start: open `01-home.md` and work forward from there.

---

## Project structure

```
react-study-lab/
├── app/
│   ├── layout.js           # wraps every page with header and footer
│   ├── page.js             # home/landing page
│   ├── components/
│   │   ├── SiteHeader.js   # site header with mobile nav toggle
│   │   ├── SiteFooter.js   # footer with copyright and sitemap
│   │   └── MusicCard.js    # card component for one track
│   └── gallery/
│       ├── page.js                 # gallery with search and filter
│       └── [slug]/
│           └── page.js             # individual track detail page
├── data/
│   ├── rock.json           # rock tracks
│   ├── jazz.json           # jazz tracks
│   └── electronic.json     # electronic tracks
└── docs/
    ├── 01-home.md
    ├── 02-nav.md
    ├── 03-gallery.md
    ├── 04-gallery-item.md
    └── 05-refactoring.md
```

---

## About the data

Track data is stored in `data/*.json`. Each file holds an array of track objects
with fields like `strTrack`, `strArtist`, `strAlbum`, `strGenre`, and `slug`.

The field naming convention matches [The Audio DB API](https://www.theaudiodb.com/free_music_api),
so you can swap static JSON for live API data later with minimal refactoring.

---

## Tech stack

- **Next.js 16** with App Router
- **React 19** with React Compiler
- **Tailwind CSS v4**
- Path alias: `@/` → `react-study-lab/` (e.g. `@/app/components/MusicCard`)
