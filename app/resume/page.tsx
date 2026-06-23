"use client";

import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    window.open("/resume.pdf", "_blank");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-display text-2xl font-bold text-lime">Opening your resume…</p>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-body underline underline-offset-4 hover:text-lime">
        Click here if it didn&apos;t open automatically.
      </a>
    </main>
  );
}
