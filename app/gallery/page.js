"use client"; // This page needs state for the search and filter controls

import { useState } from "react";
import MusicCard from "@/app/components/MusicCard";
import rockTracks from "@/data/rock.json";
import jazzTracks from "@/data/jazz.json";
import electronicTracks from "@/data/electronic.json";

// Combine all genre arrays into one list to display in the gallery.
// Each item is a track object with fields like strTrack, strArtist, slug, etc.
const allTracks = [...rockTracks, ...jazzTracks, ...electronicTracks];

export default function GalleryPage() {
  // TODO: Add state for the search input and genre dropdown.
  // const [query, setQuery] = useState("");
  // const [genre, setGenre] = useState("All");

  // TODO: Replace allTracks below with a filtered version based on query and genre.
  // Hint: Array.filter() and String.toLowerCase() will be useful here.
  const visibleTracks = allTracks;

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold text-zinc-900">Music Gallery</h1>

      {/* Search and filter controls */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          placeholder="Search by title or artist..."
          className="flex-1 rounded-lg border border-zinc-300 px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          // TODO: Add value={query} and onChange to update state
        />
        <select
          className="rounded-lg border border-zinc-300 px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          // TODO: Add value={genre} and onChange to update state
        >
          <option value="All">All Genres</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Electronic">Electronic</option>
        </select>
      </div>

      {/* Result count — useful feedback for users once filtering is wired up */}
      <p className="mb-4 text-sm text-zinc-500">{visibleTracks.length} tracks</p>

      {/* Grid of MusicCard components — one per visible track */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleTracks.map((track) => (
          <MusicCard key={track.idTrack} track={track} />
        ))}
      </div>
    </main>
  );
}
