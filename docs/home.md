# Challenge: Build the Home Page

## What You're Building

You'll replace the default Next.js page with a landing page that introduces
the Music Explorer site. The page explains what the site is and points visitors
toward the Gallery.

---

## Step 1: Update the page metadata

Open `app/layout.js`. Find the `metadata` export and update the title and
description to reflect your music site.

```js
export const metadata = {
  title: "Music Explorer",
  description: "Browse and search a curated collection of songs and artists.",
};
```

> **Docs:** [Metadata in Next.js](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

---

## Step 2: Replace the home page content

Open `app/page.js` and replace everything inside the `return` with your own markup.
Your page should include:

- A site heading (`<h1>`)
- A short paragraph describing what Music Explorer is
- A link or button pointing to `/gallery`

Keep it simple — you'll style it with Tailwind in the next step.

> **Docs:** [Writing markup with JSX](https://react.dev/learn/writing-markup-with-jsx)

---

## Step 3: Add Tailwind CSS classes

Use Tailwind utility classes to give the page a clean layout. Here are some
useful ones to get you started:

| Class | What it does |
|---|---|
| `container mx-auto px-4` | Centers content with side padding |
| `text-4xl font-bold` | Large, bold heading |
| `text-zinc-600` | Muted body text colour |
| `mt-8` | Adds top margin |
| `py-20` | Adds top and bottom padding |

> **Docs:** [Tailwind CSS utility-first fundamentals](https://tailwindcss.com/docs/utility-first)

---

## Step 4: Import and render SiteHeader

The `SiteHeader` component is already in `components/SiteHeader.js`. Import it
into `app/layout.js` and place it above `{children}` inside `<body>`.

```js
// app/layout.js
import SiteHeader from "@/app/components/SiteHeader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
```

The `@/` alias points to the root of the `react-study-lab/` folder, so
`@/components/SiteHeader` resolves to `react-study-lab/components/SiteHeader.js`.

> **Docs:** [Layouts and Templates](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates)

---

## Check Your Work

- [ ] The browser tab title reads "Music Explorer"
- [ ] The home page has a heading and a short description
- [ ] There's a working link to `/gallery` (it's okay if the page is 404 for now)
- [ ] `SiteHeader` appears at the top of every page
- [ ] On a narrow browser window, a "Menu" button appears instead of the nav links
- [ ] Clicking "Menu" opens and closes the mobile navigation
