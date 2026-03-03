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

// params.slug comes from the folder name [slug] — it matches whatever
// the user typed in the URL, e.g. /gallery/nirvana-smells-like-teen-spirit
export default function GalleryItemPage({ params }) {
  // TODO: Find the track in allTracks whose slug matches params.slug.
  // Hint: use Array.find() — it returns the first item that passes your test,
  // or undefined if nothing matches.
  const track = null; // replace this line

  // TODO: Uncomment the line below once you have a real track lookup above.
  // if (!track) notFound();

  return (
    <main className="container mx-auto px-4 py-10">

      {/* Back link */}
      <Link href="/gallery" className="text-sm text-zinc-500 hover:text-zinc-900">
        ← Back to Gallery
      </Link>

      {/* TODO: Replace the placeholder below with the track's actual fields.
          Use the same field names from the JSON data (strTrack, strArtist, etc.) */}
      <p className="mt-6 text-zinc-400">
        Placeholder — looking up slug: <code>{params.slug}</code>
      </p>
    </main>
  );
}
