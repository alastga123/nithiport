"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GhostHeading from "@/components/GhostHeading";

const projects = [
  { slug: "voya", title: "Voya", description: "Travel booking platform redesign." },
  { slug: "jira-daily-report", title: "Jira Daily Report", description: "Internal automation tool for daily reporting." },
  { slug: "livinginsider", title: "LivingInsider", description: "Property marketplace UX overhaul." },
  { slug: "design-system", title: "Design System", description: "Scalable component library and tokens." },
  { slug: "research-lab", title: "Research Lab", description: "User research and testing workflows." },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="px-6 pt-24 md:px-12">
      <GhostHeading ghost="SELECTED WORKS" front="WORKS" className="text-[clamp(2rem,7vw,5rem)]" />

      <div className="mt-10 h-[85vh] snap-y snap-mandatory overflow-y-scroll">
        {projects.map((p) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.3 }}
            className="relative h-[85vh] w-full snap-start"
          >
            <Link href={`/work/${p.slug}`} className="block h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-600" />
              <div className="absolute inset-0 flex flex-col justify-end bg-black/30 p-8 md:p-16">
                <h3 className="font-display text-3xl font-bold uppercase text-white md:text-5xl">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-md text-white/80">{p.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
