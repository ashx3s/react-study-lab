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
//
// In Next.js 15+, params is a Promise, so the function must be async and
// you must await params before reading any property from it.
export default async function GalleryItemPage({ params }) {
  // Await params before reading slug — required in Next.js 15+.
  const { slug } = await params;

  // Challenge 04: Replace null with a lookup that finds the track whose slug
  // matches the slug variable above. Array.find() is the right tool — check MDN for how it works.
  const track = null;

  // This will show a 404 until you implement the find() above.
  // Once track is found, notFound() won't be called and the page will render.
  if (!track) notFound();

  return (
    <main className="container mx-auto px-4 py-10">
      {/* Challenge 04: Build the detail view inside this article element.
          Include a link back to /gallery, the track title, artist,
          album, and genre. Field names are in the JSON data files. */}
      <article>

      </article>
    </main>
  );
}
