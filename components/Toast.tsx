"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Toast({ show, message }: { show: boolean; message: string }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-lime px-4 py-2 text-sm font-bold text-black"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
