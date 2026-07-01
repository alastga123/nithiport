"use client";

import { motion } from "framer-motion";

type Row = { label: string; a: string; b: string };

type Props = {
  columnA: string;
  columnB: string;
  rows: Row[];
};

export default function SectionComparisonTable({ columnA, columnB, rows }: Props) {
  return (
    <motion.section
      data-section="comparison-table"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto py-8 mx-0 md:mx-[10%] items-center"
    >
      <table className="w-full min-w-[480px] text-left">
        <thead>
          <tr>
            <th className="py-3 text-base font-bold text-white"></th>
            <th className="py-3 text-base font-bold text-white">{columnA}</th>
            <th className="py-3 text-base font-bold text-white">{columnB}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-white/10">
              <td className="py-3 text-sm text-body">{row.label}</td>
              <td className="py-3 text-sm text-white">{row.a}</td>
              <td className="py-3 text-sm text-white">{row.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.section>
  );
}
