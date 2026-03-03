import Link from "next/link";

// MusicCard displays summary information for one track.
// It receives a single track object as a prop and links to the detail page.
//
// Props:
//   track — one item from the music data JSON files
export default function MusicCard({ track }) {
  return (
    <article className="flex flex-col rounded-lg border border-zinc-200 bg-white p-4">

      {/* Track title */}
      <h2 className="text-lg font-semibold text-zinc-900">{track.strTrack}</h2>

      {/* Artist and album */}
      <p className="mt-1 text-zinc-600">{track.strArtist}</p>
      <p className="text-sm text-zinc-500">{track.strAlbum}</p>

      {/* Genre badge */}
      <span className="mt-2 w-fit rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500">
        {track.strGenre}
      </span>

      {/* Link to the individual detail page using the track's slug */}
      <Link
        href={`/gallery/${track.slug}`}
        className="mt-4 text-sm font-medium text-blue-600 hover:underline"
      >
        View details →
      </Link>
    </article>
  );
}
