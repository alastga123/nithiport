"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{
              opacity: { duration: 0.3, ease: "easeOut" },
              scale:   { duration: 0.3, ease: "easeOut" },
              rotate:  { duration: 0.9, delay: 0.5, ease: [0.76, 0, 0.24, 1] },
            }}
          >
            <Image src="/logo.svg" alt="" width={72} height={72} priority />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
