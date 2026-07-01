"use client";

import { motion } from "framer-motion";

type Props = {
  headline: string;
  body: string;
};

export default function SectionHeader({ headline, body }: Props) {
  return (
    <motion.section
      data-section="header"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-3 py-8 mx-0 md:mx-[10%]"
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-medium text-white">{headline}</h2>
      </div>
      <p className="text-base font-thin whitespace-pre-line text-body text-[#C9C9C9]">{body}</p>
    </motion.section>
  );
}
