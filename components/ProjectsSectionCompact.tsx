"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import "swiper/css";
import Container from "@/components/Container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useHoverDevice } from "@/hooks/useHoverDevice";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

const projects = [
  { slug: "public-profile", title: "Public Profile", year: "2026", description: "LivingInsider", image: "/work/publicprofile.png" },
  { slug: "design-system", title: "Design System", year: "2026", description: "LivingInsider", image: "/work/lvds.png" },
  { slug: "carbonwealth", title: "Carbonwealth", year: "2024", description: "Witsawa", image: "/work/carbonwealth.png" },
  { slug: "wellkidz", title: "Wellkidz", year: "2024", description: "Witsawa", image: "/work/wellkidz.png" },
  { slug: "voya", title: "Voya", year: "2025", description: "Case Study", image: "/work/voya.png" },
  { slug: "eventure", title: "Eventure", year: "2023", description: "Case Study", image: "/work/eventure.png" },
];

function CompactCard({ p, index, inView }: { p: (typeof projects)[number]; index: number; inView: boolean }) {
  const router = useRouter();
  const hasHover = useHoverDevice();
  return (
    <motion.div
      className={hasHover ? "w-[310px] cursor-none" : "w-[310px] cursor-pointer"}
      onClick={() => router.push(`/work/${p.slug}`)}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
        <Image src={p.image} alt={p.title} fill className="object-cover rounded-2xl" draggable={false} />
      </div>
      <div className="mt-3 flex flex-col items-start gap-0.5 text-left">
        <span className="font-poppins text-sm font-thin tracking-normal text-body">{p.year}</span>
        <span className="font-poppins text-lg font-semibold uppercase tracking-normal text-white">{p.title}</span>
        <span className="font-poppins text-sm font-thin tracking-normal text-body">{p.description}</span>
      </div>
    </motion.div>
  );
}

export default function ProjectsSectionCompact({ exclude }: { exclude?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0 });
  const filtered = exclude ? projects.filter((p) => p.slug !== exclude) : projects;

  return (
    <section ref={sectionRef} className="py-16 overflow-hidden">
      <Container className="overflow-visible relative">
        <FollowerPointerCard title="Drag!">
          <Swiper
            modules={[Keyboard]}
            slidesPerView="auto"
            slidesPerGroup={1}
            spaceBetween={16}
            keyboard={{ enabled: true }}
            resistanceRatio={0.4}
            className="!overflow-visible w-full"
          >
            {filtered.map((p, i) => (
              <SwiperSlide key={p.slug} className="!w-auto">
                <CompactCard p={p} index={i} inView={inView} />
              </SwiperSlide>
            ))}
          </Swiper>
        </FollowerPointerCard>
      </Container>
    </section>
  );
}
