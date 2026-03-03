"use client"; // This page needs state for the search and filter controls.
// In Next.js App Router, components are server-rendered by default.
// "use client" opts this page into the browser where useState can work.

import { useState } from "react";
import MusicCard from "@/app/components/MusicCard";
import rockTracks from "@/data/rock.json";
import jazzTracks from "@/data/jazz.json";
import electronicTracks from "@/data/electronic.json";

// Combine all genre arrays into one list.
// Each item has fields like strTrack, strArtist, strAlbum, strGenre, slug.
const allTracks = [...rockTracks, ...jazzTracks, ...electronicTracks];

export default function GalleryPage() {
  // Challenge 03: Add state for the search input and genre dropdown.
  // You need two pieces of state: one to hold the current text input value,
  // and one to hold the currently selected genre. Think about what initial
  // values make sense before any user interaction has happened.

  // Challenge 03: Replace this empty array with a filtered version of allTracks.
  // Right now nothing renders — that's intentional. Add state and filtering to fix it.
  const visibleTracks = [];

  // Tip: if visibleTracks is empty after you add your filter, add a fallback so
  // you can tell whether filtering is working or returning no matches.
  // Example pattern (uncomment and place in your JSX to try it):
  // {visibleTracks.length === 0 && <p>No tracks match your search.</p>}

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Music Gallery</h1>

      {/* Challenge 03: Add a text input (search by title or artist) and a
          genre select dropdown (options: All, Rock, Jazz, Electronic).
          Wire each to its state value and setter using value and onChange. */}

      {/* Challenge 03: Render the visibleTracks array as a card grid.
          Use the MusicCard component for each item — it expects a track prop.
          Each track has a unique idTrack field you can use as the key. */}
    </main>
  );
}
