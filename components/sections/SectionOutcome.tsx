"use client";

import { motion, type Variants } from "framer-motion";

type Block = { label: string; body: string };

type Props = {
  title?: string;
  blocks: Block[];
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function SectionOutcome({ title, blocks }: Props) {
  return (
    <motion.section
      data-section="outcome"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="flex flex-col gap-3 py-8 items-center mx-0 md:mx-[10%]"
    >
      {title && (
        <motion.h2 variants={item} className="self-start text-left font-display text-2xl font-medium text-white">
          {title}
        </motion.h2>
      )}
      {blocks.map((block) => (
        <motion.div key={block.label} variants={container} className="flex flex-col gap-2">
          <motion.h3 variants={item} className="text-lg font-medium text-white">
            {block.label}
          </motion.h3>
          <motion.p variants={item} className="text-base whitespace-pre-line text-body">
            {block.body}
          </motion.p>
        </motion.div>
      ))}
    </motion.section>
  );
}
