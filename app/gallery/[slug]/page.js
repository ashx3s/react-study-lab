import rockTracks from "@/data/rock.json";
import jazzTracks from "@/data/jazz.json";
import electronicTracks from "@/data/electronic.json";
import { notFound } from "next/navigation";
import Link from "next/link";

// Combine all genre arrays so we can search across all tracks.
const allTracks = [...rockTracks, ...jazzTracks, ...electronicTracks];

// generateStaticParams tells Next.js which slugs to pre-render at build time.
// Uncomment this once your page is working to enable static generation.
// export function generateStaticParams() {
//   return allTracks.map((track) => ({ slug: track.slug }));
// }

// Next.js reads the URL, matches the [slug] segment in the folder name, and
// automatically passes the matched value to your page as params.slug.
// You don't have to write any URL-parsing code — the framework handles it.
//
// Example: /gallery/nirvana-smells-like-teen-spirit → params.slug === "nirvana-smells-like-teen-spirit"
export default function GalleryItemPage({ params }) {
  // Challenge 04: Replace null with Array.find() to look up the matching track.
  // Hint: use allTracks.find((t) => t.slug === params.slug)
  const track = null;

  // This will show a 404 until you implement the find() above.
  // Once track is found, notFound() won't be called and the page will render.
  if (!track) notFound();

  return (
    <main className="container mx-auto px-4 py-10">

      {/* Back link */}
      <Link href="/gallery" className="text-sm text-zinc-500 hover:text-zinc-900">
        ← Back to Gallery
      </Link>

      {/* Challenge 04: Replace this placeholder with the track's actual fields.
          Use the field names from the JSON data: strTrack, strArtist, strAlbum, strGenre */}
      <p className="mt-6 text-zinc-400">
        Placeholder — looking up slug: <code>{params.slug}</code>
      </p>
    </main>
  );
}
