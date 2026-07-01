"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/Container";
import Toast from "@/components/Toast";

const EMAIL = "nithipat.lerts@gmail.com";

const links = [
  { href: "/", label: "Home", id: "home" },
  { href: "/#work", label: "Work", id: "work" },
  { href: "/about", label: "About", id: "about" },
  { href: "/resume", label: "Resume", id: "resume" },
];

function NavLink({ 
  href, 
  label, 
  active, 
  onClick 
}: { 
  href: string; 
  label: string; 
  active: boolean; 
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  if (label === "Resume") {
    return (
      <a
        href="/resume/resume-nithipat-lertsopaphan.pdf"
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
      onClick={onClick}
      className={`group relative py-1 text-sm uppercase tracking-wide transition-colors duration-300 ${
        active ? "text-lime" : "text-body hover:text-lime"
      }`}
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-lime transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showToast, setShowToast] = useState(false);

  const copyEmail = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(EMAIL);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setOpen(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const handler = (e: Event) => setActiveSection((e as CustomEvent<string>).detail);
    window.addEventListener("swiperSlideChange", handler);
    return () => window.removeEventListener("swiperSlideChange", handler);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/" && (id === "home" || id === "work")) {
      e.preventDefault();
      setOpen(false);
      setActiveSection(id);
      window.dispatchEvent(new CustomEvent("swiperNavigate", { detail: id }));
    }
  };

  const checkActive = (link: typeof links[number]) => {
    if (pathname === "/") {
      if (link.id === "home" || link.id === "work") {
        return activeSection === link.id;
      }
    }
    return pathname === link.href;
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-bg/90 backdrop-blur-md">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" aria-label="Home">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} priority />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink 
              key={l.label} 
              href={l.href} 
              label={l.label} 
              active={checkActive(l)} 
              onClick={(e) => handleNavClick(e, l.id)}
            />
          ))}
        </nav>

        <button
          className="relative z-50 text-2xl text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
      {open && (
        <motion.nav
          key="mobile-menu"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-bg px-4 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.label}
              href={l.href}
              label={l.label}
              active={checkActive(l)}
              onClick={(e) => handleNavClick(e, l.id)}
            />
          ))}
          <button
            onClick={copyEmail}
            className="group relative py-1 text-sm uppercase tracking-wide text-body hover:text-lime"
          >
            Connect me via email
            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-lime transition-all duration-300 group-hover:w-full" />
          </button>
          <a
            href="https://www.linkedin.com/in/nithipat-lerts/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="group relative py-1 text-sm uppercase tracking-wide text-body hover:text-lime"
          >
            LinkedIn
            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-lime transition-all duration-300 group-hover:w-full" />
          </a>
        </motion.nav>
      )}
      </AnimatePresence>

      <Toast show={showToast} message="Copied to clipboard!" />
    </header>
  );
}