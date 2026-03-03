import Link from "next/link";

// SiteFooter renders at the bottom of every page via app/layout.js.
// It includes a simple sitemap nav and a copyright line.
export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white">
      <div className="container mx-auto px-4 py-8">

        {/* Sitemap links */}
        <nav className="mb-4 flex gap-6">
          <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900">
            Home
          </Link>
          <Link href="/gallery" className="text-sm text-zinc-600 hover:text-zinc-900">
            Gallery
          </Link>
        </nav>

        <p className="text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} Music Explorer. Built for learning.
        </p>
      </div>
    </footer>
  );
}
