# Challenge: Gallery Page with Filtering

## What You're Building

The gallery page shows all tracks from the music data files in a responsive
card grid. Users can type in a search box to filter by title or artist, and
use a dropdown to filter by genre.

The starter code in `app/gallery/page.js` already:
- imports all three JSON files and combines them into `allTracks`
- renders all cards via the `MusicCard` component
- has the search input and genre dropdown in the JSX (not wired up yet)

Your job is to wire up the state so the displayed tracks update as the user
types or selects a genre.

---

## How the Data Is Structured

Each file in `data/` exports an array of track objects. Here's one example:

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

The fields with `str` prefixes are strings, `int` prefixes are numbers stored
as strings (matching The Audio DB API format).

---

## Core Concepts

### Adding state

Add two pieces of state at the top of `GalleryPage`:

```jsx
const [query, setQuery] = useState("");
const [genre, setGenre] = useState("All");
```

Wire them to the input and select:

```jsx
<input
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  ...
/>

<select
  value={genre}
  onChange={(e) => setGenre(e.target.value)}
  ...
>
```

> **Docs:** [Responding to events](https://react.dev/learn/responding-to-events)
> **Docs:** [State: a component's memory](https://react.dev/learn/state-a-components-memory)

---

### Filtering the array

Replace `const visibleTracks = allTracks` with a filtered version.
`Array.filter()` returns a new array containing only the items that pass your
test function:

```jsx
const visibleTracks = allTracks.filter((track) => {
  // Return true to include this track, false to exclude it.
  const matchesQuery =
    track.strTrack.toLowerCase().includes(query.toLowerCase()) ||
    track.strArtist.toLowerCase().includes(query.toLowerCase());

  const matchesGenre = genre === "All" || track.strGenre === genre;

  return matchesQuery && matchesGenre;
});
```

Both conditions must be true for a track to appear. When `query` is empty,
`includes("")` is always true, so all tracks pass the text filter.

> **Docs:** [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

---

## Extension Tasks

Once basic filtering works, try these:

1. **Sort the results.** Add a sort dropdown with options like "Title A–Z",
   "Artist A–Z". Use `Array.sort()` on `visibleTracks` before rendering.

2. **Show a "no results" message.** If `visibleTracks.length === 0`, render a
   paragraph instead of the grid:

   ```jsx
   {visibleTracks.length === 0 ? (
     <p className="text-zinc-500">No tracks match your search.</p>
   ) : (
     <div className="grid ...">...</div>
   )}
   ```

3. **Clear the filters.** Add a "Clear" button that resets `query` to `""`
   and `genre` to `"All"`. Only show it when a filter is active.

---

## Check Your Work

- [ ] Typing in the search box hides tracks that don't match
- [ ] Selecting a genre shows only tracks from that genre
- [ ] Both filters work together (genre + text search at the same time)
- [ ] The track count updates as you filter
- [ ] Clearing the input shows all tracks again
