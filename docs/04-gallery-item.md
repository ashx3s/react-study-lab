# Challenge: Individual Track Page (Dynamic Route)

## What You're Building

Each card in the gallery links to `/gallery/[slug]` — for example,
`/gallery/nirvana-smells-like-teen-spirit`. The `[slug]` part of the folder
name is a dynamic segment: Next.js captures whatever the user typed in the URL
and passes it to your page as `params.slug`.

Your job is to look up the matching track in the data and render a full detail
page for it.

---

## How Dynamic Routes Work

When Next.js sees a folder named `[slug]`, it matches any URL that fits that
pattern. The value in the brackets is available in the `params` prop:

```
URL: /gallery/nirvana-smells-like-teen-spirit
params.slug === "nirvana-smells-like-teen-spirit"
```

> **Docs:** [Dynamic routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

---

## Step 1: Find the track

The starter file in `app/gallery/[slug]/page.js` already imports all tracks
and combines them into `allTracks`. Replace the `null` placeholder with an
`Array.find()` call:

```jsx
const track = allTracks.find((t) => t.slug === params.slug);
```

`Array.find()` returns the first item where your test returns `true`, or
`undefined` if nothing matches.

---

## Step 2: Handle a missing track

If a user visits `/gallery/some-made-up-slug`, `track` will be `undefined`.
Calling `notFound()` tells Next.js to render the built-in 404 page:

```jsx
if (!track) notFound();
```

`notFound` is already imported in the starter file — just uncomment the line.

> **Docs:** [notFound()](https://nextjs.org/docs/app/api-reference/functions/not-found)

---

## Step 3: Build the detail layout

Once you have a `track` object, render its fields on the page. Use the same
field names as in the JSON files (`strTrack`, `strArtist`, `strAlbum`,
`strGenre`, `intDuration`).

A suggested layout:

```jsx
<main className="container mx-auto px-4 py-10">
  <Link href="/gallery" className="text-sm text-zinc-500 hover:text-zinc-900">
    ← Back to Gallery
  </Link>

  <h1 className="mt-6 text-4xl font-bold text-zinc-900">{track.strTrack}</h1>
  <p className="mt-2 text-xl text-zinc-600">{track.strArtist}</p>

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
</main>
```

---

## Step 4: Enable static generation (optional)

By default, Next.js generates this page on demand. To pre-render every track
at build time, uncomment the `generateStaticParams` function in the starter
file. This tells Next.js exactly which slugs to build.

> **Docs:** [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)

---

## Check Your Work

- [ ] Clicking a card in the gallery navigates to the correct detail page
- [ ] The page shows the track's title, artist, album, and genre
- [ ] Visiting `/gallery/fake-slug` shows the 404 page
- [ ] The back link returns to the gallery
