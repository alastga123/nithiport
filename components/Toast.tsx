"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Toast({ show, message }: { show: boolean; message: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-24 left-1/2 z-[9999] w-fit -translate-x-1/2 whitespace-nowrap bg-lime px-8 py-2 text-sm font-medium rounded-full text-black"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
