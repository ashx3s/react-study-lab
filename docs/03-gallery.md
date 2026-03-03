# Challenge 03: Gallery Page with Filtering

> **Best for:** Intermediate students working on state — you can build basic
> components and want to practise solving a real problem with `useState`.

---

## What You're Building

The gallery page shows all tracks from the music data files in a card grid.
Users can type in a search box to filter by title or artist, and choose a
genre from a dropdown.

The starter code in `app/gallery/page.js` already imports the data and
renders the UI — but `visibleTracks` is an empty array, so nothing shows yet.
Your job is to add state, wire up the inputs, and write the filter logic.

---

## How the data is structured

Each file in `data/` exports an array of track objects. One example:

```json
{
  "idTrack": "rock-001",
  "slug": "nirvana-smells-like-teen-spirit",
  "strTrack": "Smells Like Teen Spirit",
  "strArtist": "Nirvana",
  "strAlbum": "Nevermind",
  "strGenre": "Rock",
  "intDuration": "301000",
  "strArtistThumb": null
}
```

Fields starting with `str` are strings, `int` fields are numbers stored as
strings (matching The Audio DB API convention).

---

## Part 1: Show all tracks (no filtering yet)

Before adding filters, get all tracks showing on the page.

Replace `const visibleTracks = []` with:

```jsx
const visibleTracks = allTracks;
```

Save and check the browser — you should see all track cards appear.

---

## Part 2: Add state for the inputs

Add two pieces of state near the top of `GalleryPage`. Each `useState` call
returns the current value and a function to update it:

```jsx
const [query, setQuery] = useState("");
const [genre, setGenre] = useState("All");
```

Wire them to the input and select by adding `value` and `onChange` attributes.
`onChange` receives a browser event object — the typed value is at `e.target.value`.

> **Docs:** [Responding to events](https://react.dev/learn/responding-to-events)
> **Docs:** [State: a component's memory](https://react.dev/learn/state-a-components-memory)

---

## Part 3: Filter the tracks

Replace `const visibleTracks = allTracks` with a filtered version.

`Array.filter()` takes a function and returns a new array with only the items
where your function returns `true`:

```js
const filtered = someArray.filter((item) => {
  // return true to keep this item, false to remove it
});
```

You'll need two conditions — one for the text query, one for the genre.
Both should be true for a track to appear in the results.

Useful tools:
- `String.toLowerCase()` — normalise case so "nirvana" matches "Nirvana"
- `String.includes(substring)` — check if a string contains another string

Try to write this yourself before looking at examples.

> **Docs:** [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
> **Docs:** [String.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

---

## Why `"use client"`?

You'll notice `"use client"` at the top of `gallery/page.js`.

In Next.js App Router, pages run on the server by default — they generate HTML
and send it to the browser. But `useState` only works in the browser, so any
component that uses state needs `"use client"` to tell Next.js to render it
client-side.

Your home page doesn't need it because it has no interactivity.

---

## Extension tasks

Once basic filtering works, try these:

1. **Sort the results.** Add a sort dropdown ("Title A–Z", "Artist A–Z").
   Use `Array.sort()` on `visibleTracks` after filtering.

2. **Empty state.** If `visibleTracks.length === 0`, show a "No tracks found"
   message. The starter already has a conditional render set up for this —
   look at how it's structured and make it show your message.

3. **Clear button.** Add a button that resets `query` to `""` and `genre` to
   `"All"`. Only show it when a filter is active.

4. **Read the genre from the URL.** If someone navigates to `/gallery?genre=Rock`,
   initialise the genre filter to `"Rock"` automatically. Use Next.js
   `useSearchParams` to read the query string on load. This unlocks a
   collaboration with the home page — students who finished challenge 01 can
   link their genre cards directly to pre-filtered gallery results.

   ```jsx
   "use client";
   import { useSearchParams } from "next/navigation";

   // Inside your component, before useState:
   const searchParams = useSearchParams();
   const initialGenre = searchParams.get("genre") ?? "All";

   // Then pass initialGenre as the default value to useState:
   const [genre, setGenre] = useState(initialGenre);
   ```

   > **Docs:** [useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)

---

## Check Your Work

- [ ] All tracks show before any filtering
- [ ] Typing in the search box hides non-matching tracks
- [ ] Selecting a genre shows only tracks of that genre
- [ ] Both filters work together at the same time
- [ ] The track count updates as you filter
