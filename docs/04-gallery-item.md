# Challenge 04: Individual Track Page (Dynamic Route)

> **Best for:** Intermediate students who want to understand how Next.js
> routing works — you're comfortable with components but want to understand
> how the framework connects URLs to page files.

---

## What You're Building

Each card in the gallery links to `/gallery/[slug]` — for example,
`/gallery/nirvana-smells-like-teen-spirit`. Right now that URL shows a 404.

Your job is to find the matching track in the data and render its details.

---

## How dynamic routes work in Next.js

When Next.js sees a folder named `[slug]`, it treats that segment of the URL
as a variable — any URL matching `/gallery/___` will load your page file.

**Next.js automatically reads the URL and passes the matched segment to your
page component as a prop called `params`.** You don't write any URL-parsing
code — the framework handles it.

```
URL: /gallery/nirvana-smells-like-teen-spirit
                           ↓
params.slug === "nirvana-smells-like-teen-spirit"
```

The value arrives in your component like this:

```jsx
export default function GalleryItemPage({ params }) {
  // params.slug is available here
}
```

> **Docs:** [Dynamic routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

---

## Step 1: Find the track

Open `app/gallery/[slug]/page.js`. At the top, `allTracks` already combines
all three JSON files into one array.

Replace `const track = null` with an `Array.find()` call:

```jsx
const track = allTracks.find((t) => t.slug === params.slug);
```

`Array.find()` returns the first item where the test function returns `true`,
or `undefined` if nothing matches.

The line `if (!track) notFound()` is already in the file. Once `track` is a
real value, it will only trigger for genuinely missing slugs.

---

## Step 2: Build the detail layout

Once `track` is found, replace the placeholder with the track's actual fields.

Use the same field names as in the JSON files: `strTrack`, `strArtist`,
`strAlbum`, `strGenre`.

A suggested structure:

```jsx
<h1 className="mt-6 text-4xl font-bold text-zinc-900">{track.strTrack}</h1>
<p className="mt-2 text-xl text-zinc-600">{track.strArtist}</p>

{/* dl/dt/dd = definition list — semantic HTML for key/value pairs like "Album: Nevermind" */}
<dl className="mt-6 grid gap-2 text-sm">
  <div>
    <dt className="font-medium text-zinc-500">Album</dt>
    <dd className="text-zinc-800">{track.strAlbum}</dd>
  </div>
  <div>
    <dt className="font-medium text-zinc-500">Genre</dt>
    <dd className="text-zinc-800">{track.strGenre}</dd>
  </div>
</dl>
```

---

## Step 3: Enable static generation (optional)

By default this page is rendered on demand for each request. To pre-render
every track at build time, uncomment `generateStaticParams` in the starter file.

This tells Next.js: "here are all the valid slugs — build a page for each one."
The result is faster page loads and no server needed at runtime.

> **Docs:** [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)

---

## Check Your Work

- [ ] Clicking a card in the gallery navigates to the correct detail page
- [ ] The page shows the track's title, artist, album, and genre
- [ ] Visiting `/gallery/fake-slug` shows a 404 page
- [ ] The back link returns to the gallery
