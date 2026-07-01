"use client";

import { motion } from "framer-motion";

interface DisplaytextProps {
  display: string;
}

export default function SectionDisplaytext({ display }: DisplaytextProps) {
  return (
    <motion.section
      data-section="displaytext"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6 py-7 mx-0 md:mx-[10%] items-center"
    >
      <h4 className="font-display text-base font-regular text-white">{display}</h4>
    </motion.section>
  );
}
