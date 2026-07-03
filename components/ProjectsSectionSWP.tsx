"use client";

import { useRouter } from "next/navigation";
import { useHoverDevice } from "@/hooks/useHoverDevice";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import "swiper/css";
import GhostHeading from "@/components/GhostHeading";
import Container from "@/components/Container";
import { CometCard } from "@/components/ui/comet-card";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  { slug: "public-profile", title: "Public Profile", year: "2026", tag: "UX/UI", description: "LivingInsider", image: "/work/publicprofile.png" },
  { slug: "design-system", title: "Design System", year: "2026", tag: "Design System", description: "LivingInsider", image: "/work/lvds.png" },
  { slug: "carbonwealth", title: "Carbonwealth", year: "2024", tag: "UXUI", description: "Witsawa", image: "/work/carbonwealth.png" },
  { slug: "wellkidz", title: "Wellkidz", year: "2024", tag: "UXUI", description: "Witsawa", image: "/work/wellkidz.png" },
  { slug: "voya", title: "Voya", year: "2025", tag: "UXUI | Case Study", description: "Case Study", image: "/work/voya.png" },
  { slug: "eventure", title: "Eventure", year: "2023", tag: "UXUI | Case Study", description: "Case Study", image: "/work/eventure.png" },
];

function ProjectCard({ p, index, inView }: { p: (typeof projects)[number]; index: number; inView: boolean }) {
  const router = useRouter();
  const hasHover = useHoverDevice();

  return (
    <motion.div
      className={`card-fluid ${hasHover ? "group/card" : ""}`}
      onClick={() => router.push(`/work/${p.slug}`)}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: .4, delay: .5 + index * .3 }}
    >
      <div className="relative w-full aspect-square overflow-visible">
        <CometCard className="absolute inset-0 overflow-visible rounded-2xl">
          <div className={`block h-full w-full relative overflow-hidden rounded-2xl ${hasHover ? "cursor-none" : "cursor-pointer"}`}>
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover pointer-events-none rounded-2xl"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover/card:opacity-70 pointer-events-none" />
          </div>
        </CometCard>

        <div className="absolute inset-0 z-[100] p-10 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-all duration-300">
          <div className="w-full h-full flex flex-col items-center justify-center gap-0">
            <span
              className="text-white text-[20px] font-thin tracking-normal text-center scale-90 group-hover/card:scale-100 transition-transform duration-300 font-poppins -mb-3"
              style={{ filter: "drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.6))" }}
            >
              {p.year}
            </span>
            <span
              className="text-white text-[42px] font-semibold tracking-normal whitespace-nowrap text-center uppercase scale-90 group-hover/card:scale-100 transition-transform duration-300 font-poppins"
              style={{ filter: "drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.6))" }}
            >
              {p.title}
            </span>
            <span
              className="text-white text-[20px] font-thin tracking-normal text-center scale-90 group-hover/card:scale-100 transition-transform duration-300 font-poppins"
              style={{ filter: "drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.6))" }}
            >
              {p.description}
            </span>
          </div>

          <div className="absolute -bottom-8 -right-8">
            <Image
              className="scale-90 group-hover/card:scale-100 transition-transform duration-300"
              src="/ArrowRight.svg"
              alt="Arrow Icon"
              width={90}
              height={90}
              priority
            />
          </div>
        </div>
      </div>

      {/* text below card — shown on touch devices (no hover), hidden on mouse devices */}
      {!hasHover && (
        <div className="mt-3 flex flex-col items-start gap-0.5 text-left">
          <span className="font-poppins text-sm font-thin tracking-normal text-body">{p.year}</span>
          <span className="font-poppins text-lg font-semibold uppercase tracking-normal text-white">{p.title}</span>
          <span className="font-poppins text-sm font-thin tracking-normal text-body">{p.description}</span>
        </div>
      )}
    </motion.div>
  );
}

export default function ProjectsSectionSWP() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0 });

  return (
    <section ref={sectionRef} id="work" className="flex min-h-screen flex-col justify-center snap-start [scroll-snap-stop:always] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
      <Container className="overflow-visible relative">
        <GhostHeading ghost="THE SELECTED" front="WORKS" className="text-[clamp(32px,7vw,80px)]" />

        <FollowerPointerCard title="Drag!" className="!mt-[24px] !mb-[-10%]">
          <Swiper
            modules={[Keyboard]}
            slidesPerView="auto"
            slidesPerGroup={1}
            breakpoints={{ 768: { spaceBetween: 40 } }}
            spaceBetween={16}
            keyboard={{ enabled: true }}
            resistanceRatio={0.4}
            touchAngle={30}
            className="!overflow-visible w-full"
          >
            {projects.map((p, i) => (
              <SwiperSlide key={p.slug} className="!w-auto">
                <ProjectCard p={p} index={i} inView={inView} />
              </SwiperSlide>
            ))}
          </Swiper>
        </FollowerPointerCard>
      </Container>
      </motion.div>
    </section>
  );
}
