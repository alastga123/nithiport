"use client";

import { motion } from "framer-motion";
import Chip from "./Chip";

type Stat = { label: string; value: string };

export default function SectionStatRow({ stats }: { stats: Stat[] }) {
  return (
    <motion.section
      data-section="stat-row"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-3 py-8"
    >
      {stats.map((stat) => (
        <Chip key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </motion.section>
  );
}
