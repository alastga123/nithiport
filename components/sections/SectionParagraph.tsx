"use client";

import { motion } from "framer-motion";

type Props = {
  lead?: string;
  body: string;
};

export default function SectionParagraph({ lead, body }: Props) {
  return (
    <motion.section
      data-section="paragraph"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-3 py-8 mx-0 md:mx-[10%]"
    >
      {lead && <p className="text-base font-medium text-white">{lead}</p>}
      <p className="text-base font-thin whitespace-pre-line text-body text-[#bfbfbf]">{body}</p>
    </motion.section>
  );
}
