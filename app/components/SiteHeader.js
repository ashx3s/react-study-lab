"use client"; // Needed because this component uses state for the nav toggle

import { useState } from "react";
import Link from "next/link";

// ─── Challenge 02 orientation ────────────────────────────────────────────────
// Already implemented (don't need to touch these to get started):
//   • useState toggle — isMenuOpen / setIsMenuOpen
//   • Desktop nav hidden on mobile, shown on sm: and up (Tailwind responsive classes)
//   • Mobile nav shown/hidden via conditional rendering ({isMenuOpen && ...})
//   • Hamburger button with aria-label
//
// Your tasks for Challenge 02 (see docs/02-nav.md):
//   1. Replace the "Menu" button text with an Iconify icon
//   2. Add styling to make the nav visually polished (colours, spacing, hover states)
//   3. Close the mobile menu when a nav link is clicked (add onClick to each Link)
//   4. Highlight the active link using usePathname from next/navigation
// ─────────────────────────────────────────────────────────────────────────────

// SiteHeader renders at the top of every page via app/layout.js.
// It includes the site name and a nav menu that collapses on mobile.
export default function SiteHeader() {
  // isMenuOpen controls whether the mobile nav is visible or hidden.
  // useState returns [currentValue, functionToUpdateIt].
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        {/* Site name — links back to home */}
        <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
          Music Explorer
        </Link>

        {/* Desktop nav — hidden on small screens, visible on sm: and up */}
        <nav className="hidden gap-6 sm:flex">
          <Link href="/" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50">
            Home
          </Link>
          <Link href="/gallery" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50">
            Gallery
          </Link>
        </nav>

        {/* Hamburger button — only visible on small screens */}
        {/* TODO: Replace this button text with an icon using Iconify */}
        {/* Iconify docs: https://iconify.design/docs/icon-components/react/ */}
        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile nav — shown only when isMenuOpen is true */}
      {isMenuOpen && (
        <nav className="flex flex-col border-t border-zinc-200 px-4 py-2 sm:hidden dark:border-zinc-700 dark:bg-zinc-900">
          <Link href="/" className="py-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50">
            Home
          </Link>
          <Link href="/gallery" className="py-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50">
            Gallery
          </Link>
        </nav>
      )}
    </header>
  );
}
