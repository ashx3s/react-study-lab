# Challenge 01: Build the Home Page

> **Best for:** Students new to React — second semester, web 1 background.
> If you're comfortable with components already, you might start at challenge 02 or 03.

---

## What You're Building

You'll replace the placeholder home page with a landing page that introduces
the Music Explorer site and points visitors toward the Gallery.

---

## Step 0: Scaffold your own Next.js project

Before working inside the study lab, create a fresh Next.js project on your own
machine. This gives you a clear picture of what scaffolding does and where all
the files come from.

Open a terminal in any folder you'd like to work in and run:

```bash
npx create-next-app@latest my-music-site
```

The installer will ask you a series of questions. Answer them like this:

| Prompt | Answer |
|---|---|
| TypeScript? | No |
| ESLint? | Yes |
| Tailwind CSS? | Yes |
| `src/` directory? | No |
| App Router? | Yes |
| Import alias (`@/*`)? | Yes (press Enter to accept the default) |

Once it finishes, move into the folder and start the dev server:

```bash
cd my-music-site
npm run dev
```

Open `http://localhost:3000` — you should see the default Next.js welcome page.

### Explore the files that were created

Take a few minutes to look around before changing anything:

| File / Folder | What it's for |
|---|---|
| `app/layout.js` | Wraps every page — a good place for shared header and footer |
| `app/page.js` | The home page (`/`) |
| `app/globals.css` | Global CSS, including Tailwind's base imports |
| `public/` | Static assets (images, fonts) served at the root URL |
| `next.config.mjs` | Next.js configuration |
| `package.json` | Project dependencies and scripts |

> **Docs:** [Next.js project structure](https://nextjs.org/docs/getting-started/project-structure)

---

## Step 1: Switch to the study lab

Now that you know what a scaffolded project looks like, open the `react-study-lab/`
folder — this is where the rest of the challenges live. It was scaffolded the same
way, and it already has a couple of pre-built components (`SiteHeader`, `SiteFooter`)
waiting for you in `app/components/`.

Open a new terminal, navigate to `react-study-lab/`, and start the dev server:

```bash
cd react-study-lab
npm run dev
```

Open `http://localhost:3000`. You should see a placeholder page.
The server watches your files — every time you save, the browser updates automatically.

---

## Step 2: Update the page metadata

Open `app/layout.js`. Find the `metadata` export near the top and update the
title and description to reflect your music site.

```js
export const metadata = {
  title: "Music Explorer",
  description: "Browse and search a curated collection of songs and artists.",
};
```

Save the file and check the browser tab — the title should update.

> **Docs:** [Metadata in Next.js](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

---

## Step 3: Replace the home page content

Open `app/page.js` and replace the placeholder with your own markup.
Your page should include:

- A site heading (`<h1>`)
- A short paragraph describing what Music Explorer is
- A link or button pointing to `/gallery`

Not sure what to write? Open `data/home-page-data.md` — it has ready-to-use
headings, body text, and link labels you can copy straight into your JSX.

> **Docs:** [Writing markup with JSX](https://react.dev/learn/writing-markup-with-jsx)

---

## Step 4: Add Tailwind CSS classes

Use Tailwind utility classes to style your page. Here are some to get you started:

| Class | What it does |
|---|---|
| `container mx-auto px-4` | Centers content with side padding |
| `text-4xl font-bold` | Large, bold heading |
| `text-zinc-600` | Muted body text colour |
| `mt-8` | Adds top margin |
| `py-20` | Adds top and bottom padding |

> **Docs:** [Tailwind CSS utility-first fundamentals](https://tailwindcss.com/docs/utility-first)

---

## Step 5: Import and render SiteHeader and SiteFooter

The `SiteHeader` and `SiteFooter` components are already built in `app/components/`.

Open `app/layout.js`. You'll see two commented-out import lines and two
`{/* Challenge 01 */}` comments in the JSX. Uncomment the imports and replace
the TODO comments with `<SiteHeader />` and `<SiteFooter />`:

```js
// app/layout.js
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
```

The `@/` is a shortcut for the project root folder (`react-study-lab/`).
So `@/app/components/SiteHeader` points to the file at
`react-study-lab/app/components/SiteHeader.js`.

> **Docs:** [Layouts and Templates](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates)

---

## Step 6: Add a genre cards section

Below the gallery link, add a section with one card for each genre.
Each card should contain:

- An `<h3>` with the genre name
- A `<p>` with a short description
- A `<ul>` listing three featured artists

Open `data/home-page-data.md` for the text content to use in each card.

### Tailwind layout hint

A three-column grid on wider screens, one column on mobile:

| Class | What it does |
|---|---|
| `grid grid-cols-1 md:grid-cols-3 gap-6` | Responsive 3-column grid |
| `rounded-lg border border-zinc-200 p-6` | Card border and padding |
| `text-xl font-semibold mb-2` | Card heading |
| `text-sm text-zinc-500` | Artist list text |

> **Docs:** [Tailwind grid](https://tailwindcss.com/docs/grid-template-columns)

### A smarter approach: render from an array

Instead of writing three card blocks by hand, try storing the genre data as an
array of objects and using `.map()` to render each card:

```jsx
const genres = [
  {
    name: "Rock",
    description: "Guitar-driven energy and anthems that defined generations.",
    artists: ["Nirvana", "Radiohead", "Foo Fighters"],
  },
  // ... add Jazz and Electronic
];

// Then inside your JSX:
{genres.map((genre) => (
  <div key={genre.name}>
    <h3>{genre.name}</h3>
    <p>{genre.description}</p>
    <ul>
      {genre.artists.map((artist) => (
        <li key={artist}>{artist}</li>
      ))}
    </ul>
  </div>
))}
```

This is a foundational React pattern — rendering a list of elements from data
rather than duplicating markup. The `key` prop helps React track which element
is which when the list changes.

> **Docs:** [Rendering lists](https://react.dev/learn/rendering-lists)

---

## A note on `"use client"`

If you open `app/components/SiteHeader.js` you'll see `"use client"` at the top.

In Next.js App Router, components are **server-rendered by default** — they run
on the server and send HTML to the browser. `"use client"` opts a component into
the browser instead, which is required for interactive features like `useState`.
SiteHeader needs it because the mobile menu toggle uses state.

Your `app/page.js` doesn't need `"use client"` because it has no interactivity.

---

## Check Your Work

- [ ] You ran `npx create-next-app@latest` and can describe what each file does
- [ ] Run `npm run dev` inside `react-study-lab/` and open `http://localhost:3000`
- [ ] The browser tab title reads "Music Explorer"
- [ ] The home page shows a heading and a short description
- [ ] There's a working link to `/gallery`
- [ ] Three genre cards appear below the gallery link
- [ ] Each card has a heading, description, and a list of three artists
- [ ] `SiteHeader` appears at the top of every page
- [ ] `SiteFooter` appears at the bottom
- [ ] On a narrow browser window, a "Menu" button appears in the header
- [ ] Clicking "Menu" opens and closes the mobile navigation

---

## Add-on: Link genre cards directly to filtered gallery results

> This add-on is best tackled near the end of the session once someone has
> finished challenge 03 (Gallery). Find a classmate who built the gallery
> filtering and ask them what URL format their filter reads from — then come
> back here.

If the gallery page is wired to read a genre from the URL, you can make each
genre card a link that opens the gallery with that genre pre-selected.

The URL would look like this:

```
/gallery?genre=Rock
/gallery?genre=Jazz
/gallery?genre=Electronic
```

Update each card so that instead of a plain `<div>`, the outer element is an
`<a>` (or Next.js `<Link>`) pointing to the right URL.

If you stored genres as an array, you can add a `path` field to each object:

```jsx
const genres = [
  {
    name: "Rock",
    description: "...",
    artists: ["Nirvana", "Radiohead", "Foo Fighters"],
    path: "/gallery?genre=Rock",
  },
  // ...
];
```

Then use `genre.path` as the `href` on the card.

> **Docs:** [Next.js Link component](https://nextjs.org/docs/app/api-reference/components/link)

This is a small change on the home page side — the real work is in the gallery
(reading `useSearchParams` and initialising state from the URL). That's why
collaborating pays off here.

- [ ] Each genre card links to `/gallery?genre=<GenreName>`
- [ ] Clicking a card opens the gallery with that genre pre-filtered
