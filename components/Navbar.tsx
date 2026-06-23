"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  if (label === "Resume") {
    return (
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative py-1 text-sm uppercase tracking-wide text-body hover:text-lime"
      >
        {label}
        <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-lime transition-all duration-300 group-hover:w-full" />
      </a>
    );
  }
  return (
    <Link
      href={href}
      className={`group relative py-1 text-sm uppercase tracking-wide ${active ? "text-lime" : "text-body hover:text-lime"}`}
    >
      {label}
      <span
        className={`absolute -bottom-0.5 left-0 h-0.5 bg-lime transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent">
      <div className="flex items-center justify-between px-6 py-5 md:px-12">
        <Link href="/" className="font-display text-2xl font-bold lowercase text-white">
          n<span className="block h-0.5 w-4 bg-lime" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.label} href={l.href} label={l.label} active={pathname === l.href} />
          ))}
        </nav>

        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-6 bg-bg px-6 pb-8 md:hidden">
          {links.map((l) => (
            <div key={l.label} onClick={() => setOpen(false)}>
              <NavLink href={l.href} label={l.label} active={pathname === l.href} />
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
