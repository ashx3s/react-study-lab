# Challenge: Code Design and Refactoring

## What You're Improving

Below is a version of the gallery page written quickly without much thought
for maintainability. It works, but it has several common problems that make
it harder to read, test, and change over time.

Your job is to identify the problems and clean the code up.

---

## The Messy Starting Point

Read through this code carefully before changing anything. What do you notice?

```jsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const [query, setQuery] = useState("");

  const tracks = [
    { id: 1, title: "Smells Like Teen Spirit", artist: "Nirvana", album: "Nevermind", genre: "Rock", slug: "nirvana-smells-like-teen-spirit" },
    { id: 2, title: "Creep", artist: "Radiohead", album: "Pablo Honey", genre: "Rock", slug: "radiohead-creep" },
    { id: 3, title: "So What", artist: "Miles Davis", album: "Kind of Blue", genre: "Jazz", slug: "miles-davis-so-what" },
    { id: 4, title: "Take Five", artist: "Dave Brubeck Quartet", album: "Time Out", genre: "Jazz", slug: "dave-brubeck-take-five" },
    { id: 5, title: "Get Lucky", artist: "Daft Punk", album: "Random Access Memories", genre: "Electronic", slug: "daft-punk-get-lucky" },
  ];

  const results = tracks.filter((t) => t.title.includes(query) || t.artist.includes(query));

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="search" />
      <div>
        {results.map((t) => (
          <div key={t.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
            <h2>{t.title}</h2>
            <p>{t.artist}</p>
            <p>{t.album}</p>
            <p>{t.genre}</p>
            <Link href={"/gallery/" + t.slug}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Problems to Find and Fix

Work through these one at a time. After each change, check that the page still
works correctly.

### 1. Data hardcoded in the component

The track array is defined inside the component. This means:
- Adding a new track requires editing a page component
- The data can't be reused elsewhere

**Fix:** Import the data from the JSON files in `data/` instead. Combine all
three genre arrays into one `allTracks` variable outside the component.

---

### 2. Card markup is duplicated (by design right now, but will be)

The card JSX (`<div style=...>`, heading, paragraphs, link) is repeated for
every track via the `.map()`. If you need to change how a card looks, you'd
have to find every place it's used.

**Fix:** The `MusicCard` component in `app/components/MusicCard.js` already
exists. Replace the inline card markup inside `.map()` with:

```jsx
<MusicCard key={track.idTrack} track={track} />
```

Note that the JSON data uses different field names than the hardcoded array
(`strTrack` not `title`, `idTrack` not `id`) — update your map accordingly.

---

### 3. Inline styles instead of Tailwind

The card uses `style={{ border: "1px solid gray", ... }}`. This bypasses the
design system and is harder to make responsive.

**Fix:** `MusicCard` already uses Tailwind classes. Once you switch to it,
this problem goes away. If you spot other inline styles, replace them with
Tailwind utility classes.

---

### 4. Filter is case-sensitive

```js
t.title.includes(query)
```

If the user types "nirvana" (lowercase), this won't match "Nirvana".

**Fix:** Normalise both sides to lowercase before comparing:

```js
t.strTrack.toLowerCase().includes(query.toLowerCase())
```

---

### 5. No empty-state handling

If the search returns no results, nothing is rendered — the user sees a blank
area with no explanation.

**Fix:** Check `results.length === 0` and render a message:

```jsx
{results.length === 0 && (
  <p className="text-zinc-500">No tracks match your search.</p>
)}
```

---

### 6. Missing semantic markup

The outer `<div>` should be a `<main>`. The card container should be a
semantic grid. The input needs a `<label>` for accessibility.

**Fix:** Wrap content in `<main>`, add a `<label htmlFor="search">` paired
with `id="search"` on the input, and swap the card container `<div>` for the
Tailwind grid layout used in the real gallery page.

---

## Stretch: Think About What Else Could Be Extracted

Once the above is clean, look at the whole page and ask:

- Is there any logic that could move out of the component into a helper
  function? (Hint: the filtering logic)
- Should the search input + genre dropdown live in their own component?
- What would need to change to add a second page that also searches tracks?

There are no right answers here — the goal is to practise thinking about
where logic belongs and how to make components reusable.

---

## Check Your Work

- [ ] Data comes from the JSON files, not a hardcoded array
- [ ] Card markup uses `MusicCard` — no repeated card JSX in the page
- [ ] Searching "nirvana" (lowercase) still finds "Nirvana"
- [ ] A clear message appears when no tracks match
- [ ] The page uses semantic HTML (`<main>`, labelled inputs)
