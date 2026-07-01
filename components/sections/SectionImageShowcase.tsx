"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export default function SectionImageShowcase({ src, alt, caption, className }: Props) {
  return (
    <motion.section
      data-section="image-showcase"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={cn("flex flex-col gap-3 py-8 mx-0 md:mx-[10%]", className)}
    >
      <div className="relative w-full overflow-hidden rounded-2xl">
        <Image src={src} alt={alt} width={1200} height={800} className="h-auto w-full object-cover" />
      </div>
      {caption && <p className="text-center text-sm text-body mx-0 md:mx-[10%]">{caption}</p>}
    </motion.section>
  );
}
