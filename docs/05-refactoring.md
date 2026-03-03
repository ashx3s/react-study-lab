# Challenge 05: Code Design and Refactoring

> **Best for:** Intermediate students who want to think about app architecture —
> you can implement features but want to practise making code that's maintainable
> and easier for a team to work with.

---

## Why this matters

In a real project, code like the example below creates real problems: adding a
feature breaks something unrelated, a teammate can't follow the logic, and bugs
hide in duplicated sections. Working through these improvements will help you
develop the instinct for *what to fix first* when you inherit messy code — a
skill that matters more as projects grow.

---

## Your starting point

Copy the code below into `app/gallery/page.js`, replacing what's there.
Verify it still runs in the browser (all tracks should show, search should work),
then work through each problem listed further down.

```jsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const [query, setQuery] = useState("");

  const tracks = [
    { id: 1, strTrack: "Smells Like Teen Spirit", strArtist: "Nirvana", strAlbum: "Nevermind", strGenre: "Rock", slug: "nirvana-smells-like-teen-spirit" },
    { id: 2, strTrack: "Creep", strArtist: "Radiohead", strAlbum: "Pablo Honey", strGenre: "Rock", slug: "radiohead-creep" },
    { id: 3, strTrack: "So What", strArtist: "Miles Davis", strAlbum: "Kind of Blue", strGenre: "Jazz", slug: "miles-davis-so-what" },
    { id: 4, strTrack: "Take Five", strArtist: "Dave Brubeck Quartet", strAlbum: "Time Out", strGenre: "Jazz", slug: "dave-brubeck-take-five" },
    { id: 5, strTrack: "Get Lucky", strArtist: "Daft Punk", strAlbum: "Random Access Memories", strGenre: "Electronic", slug: "daft-punk-get-lucky" },
  ];

  const results = tracks.filter((t) => t.strTrack.includes(query) || t.strArtist.includes(query));

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="search" />
      <div>
        {results.map((t) => (
          <div key={t.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
            <h2>{t.strTrack}</h2>
            <p>{t.strArtist}</p>
            <p>{t.strAlbum}</p>
            <p>{t.strGenre}</p>
            <Link href={"/gallery/" + t.slug}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Problems to find and fix

Work through these one at a time. After each change, verify the page still works.

### 1. Data hardcoded in the component

The track array is defined inside the component. Adding a new track requires
editing a page component, and the data can't be shared with other pages.

**Fix:** Remove the hardcoded array and import the JSON files from `data/` instead.
The three import lines and the `allTracks = [...]` spread pattern are shown in
the original `gallery/page.js` — you can reference that file for the imports.

---

### 2. Card markup belongs in a component

The card `<div>` is rendered inline for every result. If the card design changes,
every copy of that markup needs updating.

**Fix:** Replace the inline card markup with the `MusicCard` component:

```jsx
import MusicCard from "@/app/components/MusicCard";

// inside .map():
<MusicCard key={track.idTrack} track={track} />
```

Note: the hardcoded array uses `id` as the key, but the JSON data uses `idTrack`.

---

### 3. Inline styles instead of Tailwind

`style={{ border: "1px solid gray", ... }}` bypasses the Tailwind design system
and is harder to make responsive.

**Fix:** `MusicCard` already uses Tailwind classes. This problem disappears once
you switch to it. If you spot other inline styles, replace them too.

---

### 4. Search is case-sensitive

```js
t.strTrack.includes(query)
```

Typing "nirvana" won't match "Nirvana".

**Fix:** Normalise both sides to lowercase before comparing:

```js
t.strTrack.toLowerCase().includes(query.toLowerCase())
```

---

### 5. No empty-state feedback

When the search returns nothing, the results area is blank — users don't know
if the search ran or there's a bug.

**Fix:** Check `results.length === 0` and render a message. The `gallery/page.js`
starter shows one pattern for this using a ternary — look at it for reference.

---

### 6. Missing semantic markup

The outer `<div>` should be a `<main>`. The search input should have a `<label>`
so screen readers and keyboard users know what it's for:

```jsx
<label htmlFor="search">Search</label>
<input id="search" ... />
```

---

## Stretch: think about what else could be extracted

Once the above is clean, ask:

- Should the search input live in its own component? What would its props be?
- Is there logic that could move into a helper function outside the component?
- What would need to change to reuse this filtering behaviour on another page?

There are no right answers here — the goal is to practise thinking about where
logic belongs and how to make it reusable.

---

## Check Your Work

- [ ] Data comes from the JSON files, not a hardcoded array
- [ ] Card markup uses `MusicCard` — no repeated card JSX in the page
- [ ] Searching "nirvana" (lowercase) still finds "Nirvana"
- [ ] A message appears when no tracks match
- [ ] The page uses `<main>` and a labelled search input
