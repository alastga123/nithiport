"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GhostHeading from "@/components/GhostHeading";
import Toast from "@/components/Toast";
import Container from "@/components/Container";
import ArrowIcon from "@/components/icons/ArrowIcon";

const EMAIL = "Connect me via email";

export default function ContactSection({ compact = false }: { compact?: boolean }) {
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
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <section className={`relative flex flex-col justify-center ${compact ? "h-[50vh]" : "min-h-screen snap-start [scroll-snap-stop:always]"}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
      <Container>
        <GhostHeading ghost="HERE IS MY CONTACT" front="LET'S CHAT" className="text-[clamp(32px,7vw,80px)]" />

        <div className="mt-10 flex flex-col gap-3 text-lg">
          <button
            onClick={copyEmail}
            className="group flex w-fit items-center gap-2 text-left text-lime underline-offset-4 hover:underline"
          >
            {EMAIL}
            <ArrowIcon className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
          </button>
          <a
            href="https://www.linkedin.com/in/nithipat-lerts/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit items-center gap-2 text-lime underline-offset-4 hover:underline"
          >
            LinkedIn
            <ArrowIcon className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
          </a>
        </div>
      </Container>
      </motion.div>

      <Toast show={showToast} message="Copied email to clipboard!" />

      <p className="absolute inset-x-0 bottom-10 text-center text-base font-regular text-body">
        © 2026 Nithipat Lertsopaphan.
      </p>
    </section>
  );
}
