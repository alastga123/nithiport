"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GhostHeading from "@/components/GhostHeading";
import Container from "@/components/Container";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen snap-start [scroll-snap-stop:always]">
      <div className="absolute inset-x-0 top-[55%] -translate-y-1/2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
      <Container>

        {/* Combining the text system into a single layout container */}
        <div className="mx-auto w-auto max-w-4xl flex flex-col">
          <GhostHeading
            ghost="SAWASDEE, I'M"
            className="text-[clamp(24px,5vw,72px)]"
            front={
              <>
                {/* 
                  Using 'w-full block' and fluid viewport text ('vw') 
                  forces both text strings to perfectly fill up the width 
                  of this single parent layout row.
                */}
                <span className="flex w-fullitems-start text-[clamp(34px,9vw,101px)] leading-none tracking-tight">
                  <Image
                    src="/Logo-Text.svg"
                    alt=""
                    width={32}
                    height={32}
                    priority
                    className="h-[1em] w-[0.75em] mt-[1.15%]"
                  />
                  ITHIPAT
                </span>
                <span className="block w-full text-[clamp(34px,9vw,101px)] leading-none tracking-tight text-right self-end">
                  LERTSOPAPHAN
                </span>
              </>
            }
          />
        </div>

        {/* Paragraph wrapper sits cleanly under the new single text block */}
        <div className="mx-auto w-auto max-w-4xl items-start">
          <p className="text-xl text-white">UX/UI Designer at LivingInsider,</p>
          <p className="mt-2 text-xl">
          Where business logic meets design aesthetic — crafting experiences that land sharp and feel inevitable.            </p>
        </div>
      </Container>
      </motion.div>
      </div>
    </section>
  );
}