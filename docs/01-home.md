# Challenge 01: Build the Home Page

> **Best for:** Students new to React — second semester, web 1 background.
> If you're comfortable with components already, you might start at challenge 02 or 03.

---

## What You're Building

You'll replace the placeholder home page with a landing page that introduces
the Music Explorer site and points visitors toward the Gallery.

---

## Before you start: run the dev server

Open a terminal, navigate to the `react-study-lab/` folder, and start the
development server:

```bash
cd react-study-lab
npm run dev
```

Then open `http://localhost:3000` in your browser. You should see a placeholder page.
The server watches your files — every time you save, the browser updates automatically.

---

## Step 1: Update the page metadata

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

## Step 2: Replace the home page content

Open `app/page.js` and replace the placeholder with your own markup.
Your page should include:

- A site heading (`<h1>`)
- A short paragraph describing what Music Explorer is
- A link or button pointing to `/gallery`

> **Docs:** [Writing markup with JSX](https://react.dev/learn/writing-markup-with-jsx)

---

## Step 3: Add Tailwind CSS classes

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

## Step 4: Import and render SiteHeader and SiteFooter

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

## A note on `"use client"`

If you open `app/components/SiteHeader.js` you'll see `"use client"` at the top.

In Next.js App Router, components are **server-rendered by default** — they run
on the server and send HTML to the browser. `"use client"` opts a component into
the browser instead, which is required for interactive features like `useState`.
SiteHeader needs it because the mobile menu toggle uses state.

Your `app/page.js` doesn't need `"use client"` because it has no interactivity.

---

## Check Your Work

- [ ] Run `npm run dev` and open `http://localhost:3000`
- [ ] The browser tab title reads "Music Explorer"
- [ ] The home page shows a heading and a short description
- [ ] There's a working link to `/gallery`
- [ ] `SiteHeader` appears at the top of every page
- [ ] `SiteFooter` appears at the bottom
- [ ] On a narrow browser window, a "Menu" button appears in the header
- [ ] Clicking "Menu" opens and closes the mobile navigation
