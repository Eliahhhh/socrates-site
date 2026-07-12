"use client";

import { useState } from "react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#order", label: "Order" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur text-cream shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-wide sm:text-2xl"
        >
          Socrates in the Heights
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-cream/90 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:6042993777"
            className="rounded-full bg-gold px-5 py-2 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-gold/90"
          >
            Order Now
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-cream" />
          <span className="h-0.5 w-6 bg-cream" />
          <span className="h-0.5 w-6 bg-cream" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-cream/10 bg-navy px-4 pb-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-semibold uppercase tracking-wide text-cream/90 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:6042993777"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-gold px-5 py-2 text-center text-sm font-bold uppercase tracking-wide text-navy"
          >
            Order Now
          </a>
        </nav>
      )}
    </header>
  );
}
