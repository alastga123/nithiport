"use client";

import { useEffect, useRef } from "react";
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
      className="!h-screen w-full"
      onSwiper={(s) => { swiperRef.current = s; }}
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
