import Link from "next/link";

// Home page — the landing page for Music Explorer.
// Students: replace or extend this content as part of the home page challenge.
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-zinc-900">Music Explorer</h1>

      <p className="mt-4 max-w-xl text-lg text-zinc-600">
        Browse a curated collection of songs and artists across rock, jazz, and
        electronic music. Search and filter to discover new favourites.
      </p>

      <p className="mt-4 max-w-xl text-zinc-500">
        This site uses static data modelled after the{" "}
        <a
          href="https://www.theaudiodb.com/free_music_api"
          className="text-blue-600 hover:underline"
        >
          Audio DB API
        </a>
        , so you can practice swapping in live data later.
      </p>

      <Link
        href="/gallery"
        className="mt-8 inline-block rounded-lg bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-700"
      >
        Browse the Gallery
      </Link>
    </main>
  );
}
