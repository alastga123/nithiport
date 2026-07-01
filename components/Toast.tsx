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
          className="toast-pill fixed bottom-24 left-1/2 z-50 w-fit -translate-x-1/2 whitespace-nowrap bg-lime px-8 py-2 text-sm font-medium rounded-full text-black"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
