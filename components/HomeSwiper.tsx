"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSectionSWP";
import ContactSection from "@/components/ContactSection";

const SLIDE_IDS = ["home", "work", "contact"];

export default function HomeSwiper() {
  const swiperRef = useRef<SwiperType | null>(null);

  const [initialSlide] = useState(() => {
    if (typeof window === "undefined") return 0;
    const target = sessionStorage.getItem("targetSlide");
    if (!target) return 0;
    const idx = SLIDE_IDS.indexOf(target);
    return idx >= 0 ? idx : 0;
  });

  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      const idx = SLIDE_IDS.indexOf(id);
      if (idx >= 0) swiperRef.current?.slideTo(idx);
    };
    window.addEventListener("swiperNavigate", handler);
    return () => window.removeEventListener("swiperNavigate", handler);
  }, []);

  return (
    <Swiper
      direction="vertical"
      modules={[Mousewheel]}
      mousewheel={{ thresholdDelta: 30 }}
      speed={1000}
      slidesPerView={1}
      initialSlide={initialSlide}
      className="!h-screen w-full"
      onSwiper={(s) => {
        swiperRef.current = s;
        if (initialSlide > 0) {
          sessionStorage.removeItem("targetSlide");
          window.dispatchEvent(new CustomEvent("swiperSlideChange", { detail: SLIDE_IDS[initialSlide] }));
        }
      }}
      onSlideChange={(s) => {
        window.dispatchEvent(
          new CustomEvent("swiperSlideChange", { detail: SLIDE_IDS[s.activeIndex] })
        );
      }}
    >
      <SwiperSlide><HeroSection /></SwiperSlide>
      <SwiperSlide><ProjectsSection /></SwiperSlide>
      <SwiperSlide><ContactSection /></SwiperSlide>
    </Swiper>
  );
}
