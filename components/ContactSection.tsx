"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GhostHeading from "@/components/GhostHeading";
import Toast from "@/components/Toast";

const EMAIL = "nithipat.lerts@gmail.com";

export default function ContactSection() {
  const [showToast, setShowToast] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-screen flex-col items-start justify-center px-6 md:px-12"
    >
      <GhostHeading ghost="HERE IS MY CONTACT" front="LET'S CHAT" className="text-[clamp(2rem,7vw,5rem)]" />

      <div className="mt-10 flex flex-col gap-3 text-lg">
        <button onClick={copyEmail} className="text-left text-lime underline underline-offset-4">
          {EMAIL}
        </button>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime underline underline-offset-4"
        >
          LinkedIn
        </a>
      </div>

      <Toast show={showToast} message="Copied!" />
    </motion.section>
  );
}
