"use client"; // Needed because this component uses state for the nav toggle

import { useState } from "react";
import Link from "next/link";

// SiteHeader renders at the top of every page via app/layout.js.
// It includes the site name and a nav menu that collapses on mobile.
export default function SiteHeader() {
  // isMenuOpen controls whether the mobile nav is visible or hidden.
  // useState returns [currentValue, functionToUpdateIt].
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        {/* Site name — links back to home */}
        <Link href="/" className="text-xl font-bold text-zinc-900">
          Music Explorer
        </Link>

        {/* Desktop nav — hidden on small screens, visible on sm: and up */}
        <nav className="hidden gap-6 sm:flex">
          <Link href="/" className="text-zinc-600 hover:text-zinc-900">
            Home
          </Link>
          <Link href="/gallery" className="text-zinc-600 hover:text-zinc-900">
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
        <nav className="flex flex-col border-t border-zinc-200 px-4 py-2 sm:hidden">
          <Link href="/" className="py-2 text-zinc-600 hover:text-zinc-900">
            Home
          </Link>
          <Link href="/gallery" className="py-2 text-zinc-600 hover:text-zinc-900">
            Gallery
          </Link>
        </nav>
      )}
    </header>
  );
}
