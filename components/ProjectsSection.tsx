"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, animate, type MotionValue } from "framer-motion";
import Image from "next/image";
import GhostHeading from "@/components/GhostHeading";
import Container from "@/components/Container";
import { CometCard } from "@/components/ui/comet-card";

const projects = [
  { slug: "public-profile", title: "Public Profile", year: "2026", tag: "UX/UI", description: "LivingInsider", image: "/work/publicprofile.png" },
  { slug: "design-system", title: "Design System", year: "2026", tag: "Design System", description: "LivingInsider", image: "/work/lvds.png" },
  { slug: "carbonwealth", title: "Carbonwealth", year: "2024", tag: "UXUI", description: "Witsawa", image: "/work/carbonwealth.png" },
  { slug: "wellkidz", title: "Wellkidz", year: "2024", tag: "UXUI", description: "Witsawa", image: "/work/wellkidz.png" },
  { slug: "voya", title: "Voya", year: "2025", tag: "UXUI | Case Study", description: "Case Study", image: "/work/voya.png" },
  { slug: "eventure", title: "Eventure", year: "2023", tag: "UXUI | Case Study", description: "Case Study", image: "/work/eventure.png" },
];

const N = projects.length;
const SPRING = { type: "spring" as const, stiffness: 220, damping: 26, mass: 1 };

function ProjectCard({
  p,
  cardIndex,
  index,
  itemWidthMV,
  registerCardRef,
}: {
  p: (typeof projects)[number];
  cardIndex: number;
  index: MotionValue<number>;
  itemWidthMV: MotionValue<number>;
  registerCardRef: (el: HTMLDivElement | null) => void;
}) {
  const x = useMotionValue((cardIndex - index.get()) * itemWidthMV.get());

  useEffect(() => {
    const recompute = () => {
      const w = itemWidthMV.get();
      if (w === 0) return;
      x.set((cardIndex - index.get()) * w);
    };
    recompute();
    const unsubIndex = index.on("change", recompute);
    const unsubWidth = itemWidthMV.on("change", recompute);
    return () => {
      unsubIndex();
      unsubWidth();
    };
  }, [cardIndex, index, itemWidthMV, x]);

  return (
    <motion.div
      ref={registerCardRef}
      style={{
        x,
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
      className="card-fluid absolute left-0 top-0 overflow-visible group" // 🟢 ใส่ group ตรงนี้เพื่อให้ Hover แล้ว Text ข้างนอกตื่นพร้อมกัน
      data-project-slug={p.slug}
    >
      <div className="relative w-full aspect-square overflow-visible">

        {/* 1. กล่อง CometCard (คุมเฉพาะแผ่นรูปภาพให้เอียง 3D อย่างเดียวโดดๆ) */}
        <CometCard className="absolute inset-0 overflow-visible rounded-2xl">
          <div className="block h-full w-full cursor-pointer relative overflow-hidden rounded-2xl">
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover pointer-events-none rounded-2xl"
              draggable={false}
            />
            {/* ฟิล์มสีดำคลุมโทนภาพตอน Hover */}
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-70 pointer-events-none" />
          </div>
        </CometCard>

        {/* 2. 🟢 TEXT LAYER: อยู่นอก CometCard เป็นเอกเทศอย่างแท้จริง */}
        {/* ไม่เอียงตามเมาส์ แต่อาศัยจังหวะ Hover ของการ์ดเพื่อเฟดและขยายขนาดขึ้นมาลวงตาอย่างสวยงาม */}
        <div
          className="absolute inset-0 z-30 p-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          {/* 🟢 [A] YEAR: ตรึงพิกัดไว้มุมบนซ้ายแยกเป็นเอกเทศ */}
          {/* <div className="absolute -top-4 -left-4">
            <span 
              className="text-white text-[24px] font-thin tracking-normal block scale-90 group-hover:scale-100 transition-transform duration-300 font-poppins"
              style={{ filter: "drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.6))" }}
            >
              {p.year}
            </span>
          </div> */}

          {/* 🟢 [B] CENTER CONTENT: ปรับความสูงเต็มพิกัด ยึดพื้นที่จัดกลุ่ม Title + Description ไว้กึ่งกลางเป๊ะเหมือนเดิม */}
          <div className="w-full h-full flex flex-col items-center justify-center gap-0">
            
            <span 
              className="text-white text-[20px] font-thin tracking-normal text-center scale-90 group-hover:scale-100 transition-transform duration-300 font-poppins -mb-3"
              style={{ filter: "drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.6))" }}
            >
              {p.year}
            </span>

            <span
              className="text-white text-[42px] font-semibold tracking-normal whitespace-nowrap text-center uppercase scale-90 group-hover:scale-100 transition-transform duration-300 font-poppins"
              style={{ filter: "drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.6))" }}
            >
              {p.title}
            </span>
            <span 
              className="text-white text-[20px] font-thin tracking-normal text-center scale-90 group-hover:scale-100 transition-transform duration-300 font-poppins"
              style={{ filter: "drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.6))" }}
            >
              {p.description}
            </span>
            
          </div>

          {/* 🟢 [C] ARROW: ตรึงพิกัดไว้มุมล่างขวาแยกเป็นเอกเทศ */}
          <div className="absolute -bottom-8 -right-8">
            <Image 
              className="scale-90 group-hover:scale-100 transition-transform duration-300" 
              src="/ArrowRight.svg" 
              alt="Arrow Icon" 
              width={90} 
              height={90}  
              priority 
            />
          </div>
         
        </div>

      </div>

      {/* 3. 🟢 MOBILE/TABLET TEXT: แสดงใต้การ์ดแทน Hover Overlay บนจอที่ไม่มี hover จริง (md และเล็กกว่า) */}
      <div className="md:hidden mt-3 flex flex-col items-start gap-0.5 text-left">
        <span className="font-poppins text-sm font-thin tracking-normal text-body">{p.year}</span>
        <span className="font-poppins text-lg font-semibold uppercase tracking-normal text-white">{p.title}</span>
        <span className="font-poppins text-sm font-thin tracking-normal text-body">{p.description}</span>
      </div>
    </motion.div>
  );
}

const DEAD_ZONE = 8;
const RUBBER_BAND = 0.4;

function clampWithRubberBand(value: number, max: number) {
  const clamped = Math.min(Math.max(value, 0), max);
  const overflow = value - clamped;
  return clamped + overflow * RUBBER_BAND;
}

export default function ProjectsSection() {
  const router = useRouter();
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const index = useMotionValue(0);
  const itemWidthMV = useMotionValue(0);
  const wheelAccum = useRef(0);
  const hasDragged = useRef(false);
  const isAnimating = useRef(false);
  const drag = useRef({ startX: 0, startY: 0, startIndex: 0, startTime: 0, lastX: 0, dragging: false, pointerDownTarget: null as HTMLElement | null });
  
  const [viewportHeight, setViewportHeight] = useState("auto");
  const [maxIndexState, setMaxIndexState] = useState(N - 1);

  const measure = () => {
    const card = cardRefs.current[0];
    const viewport = viewportRef.current;
    if (!card || !viewport) return;

    const gap = parseFloat(getComputedStyle(viewport).getPropertyValue("--gap")) || 40;
    const cardWidth = card.offsetWidth;
    const currentItemWidth = cardWidth + gap;
    
    itemWidthMV.set(currentItemWidth);
    setViewportHeight(`${card.offsetHeight + 60}px`);

    // 1. ความกว้างแท้จริงของคอนเทนต์ทั้งหมดรวมกันตั้งแต่ใบแรกถึงใบสุดท้าย
    const totalContentWidth = N * cardWidth + (N - 1) * gap;
    
    // 2. 🟢 ดึงความกว้างของ Bounding Box จริงของ Container ที่โดน CSS บีบไว้ (ไม่ใช่ความกว้างจอ)
    const containerActualWidth = viewport.getBoundingClientRect().width;
    
    if (totalContentWidth <= containerActualWidth) {
      setMaxIndexState(0);
    } else {
      // 3. 🟢 คำนวณหาพิกเซลที่ล้นออกนอกขอบขวาของ Container จริงๆ
      const maxScrollPx = totalContentWidth - containerActualWidth;
      
      // 4. แปลงกลับมาเป็นสัดส่วนของ Index ทศนิยมเพื่อส่งให้ Framer Motion ล็อกเป้า
      const calculatedMaxIndex = maxScrollPx / currentItemWidth;
      setMaxIndexState(calculatedMaxIndex);
    }
  };

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (cardRefs.current[0]) ro.observe(cardRefs.current[0]);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // ในไฟล์ ProjectsSection.tsx

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handleWheelRaw = (e: WheelEvent) => {
      // 🟢 1. ตรวจสอบก่อนเลย: ถ้าเป็นการสกรอลล์แนวตั้ง (Vertical Scroll) ให้ปล่อยผ่าน (Return) 
      // เพื่อให้ผู้ใช้สามารถสกรอลล์หน้าเว็บหลักขึ้น-ลงได้ตามปกติเมื่อเมาส์อยู่บนการ์ด
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        return; 
      }

      // 🟢 2. ดักหยุด Back/Forward Gesture ของเบราว์เซอร์เฉพาะเมื่อเป็นการสกรอลล์แนวนอน (แกน X)
      e.preventDefault();

      // 🟢 3. ดึงค่าจากแกน X (deltaX) มาใช้งานตรงๆ เพียงแกนเดียวเท่านั้น
      const delta = e.deltaX;
      
      if (delta === 0 || isAnimating.current) return;

      wheelAccum.current += delta;
      const THRESHOLD = 30; // ความไวในการดักจับการปัดนิ้วซ้าย-ขวา

      if (Math.abs(wheelAccum.current) > THRESHOLD) {
        const dir = wheelAccum.current > 0 ? 1 : -1;
        wheelAccum.current = 0;
        
        const currentIndex = index.get();
        let targetIndex = dir > 0 ? Math.ceil(currentIndex) : Math.floor(currentIndex);
        
        if (targetIndex === currentIndex) {
          targetIndex += dir;
        }
        
        const finalTarget = Math.min(Math.max(targetIndex, 0), maxIndexState);
        
        isAnimating.current = true;
        animate(index, finalTarget, {
          ...SPRING,
          onComplete: () => { isAnimating.current = false; }
        });
      }
    };

    viewport.addEventListener("wheel", handleWheelRaw, { passive: false });
    return () => viewport.removeEventListener("wheel", handleWheelRaw);
  }, [maxIndexState, itemWidthMV]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!viewportRef.current) return;
    drag.current = {
      startX: e.clientX,
      startY: e.clientY,
      startIndex: index.get(),
      startTime: performance.now(),
      lastX: e.clientX,
      dragging: true,
      pointerDownTarget: (e.target as HTMLElement).closest<HTMLElement>("[data-project-slug]"),
    };
    hasDragged.current = false;
  };

  // 🟢 จุดที่ 2: ปรับฟังก์ชัน onPointerMove() ให้ Clamp ค่าตามระดับพิกเซลที่คำนวณใหม่
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.dragging) return;
    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;

    if (!hasDragged.current) {
      // ponytail: bias toward horizontal (this carousel's primary gesture) so a single noisy sample on a mostly-horizontal
      // swipe doesn't misread as vertical and permanently abandon the drag — only a clearly vertical gesture bails
      if (Math.abs(dy) > Math.abs(dx) * 1.5 && Math.abs(dy) > DEAD_ZONE) {
        d.dragging = false;
        return;
      }
      if (Math.abs(dx) < DEAD_ZONE) return;
      hasDragged.current = true;
      // ponytail: capture only once we've committed to a horizontal drag, so the browser still gets first crack at native vertical scroll
      viewportRef.current?.setPointerCapture(e.pointerId);
    }

    const w = itemWidthMV.get() || 1;
    const sign = dx < 0 ? -1 : 1;
    const adjustedDx = dx - sign * DEAD_ZONE;
    
    // คำนวณตำแหน่งดัชนีเป้าหมายจากการลากนิ้ว
    const target = d.startIndex - adjustedDx / w;
    
    // 🟢 สั่งล็อกขอบเขตไม่ให้ลากเกินค่า maxIndexState ที่คำนวณหักลบช่องว่างขวาสุดไปแล้ว
    index.set(clampWithRubberBand(target, maxIndexState));
    d.lastX = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.dragging || !viewportRef.current) return;
    d.dragging = false;
    try {
      viewportRef.current.releasePointerCapture(e.pointerId);
    } catch {}

    if (!hasDragged.current) {
      const card = d.pointerDownTarget;
      if (card) router.push(`/work/${card.dataset.projectSlug}`);
      return;
    }

    const elapsed = Math.max((performance.now() - d.startTime) / 1000, 0.001);
    const w = itemWidthMV.get() || 1;
    const velocityCardsPerSec = (d.lastX - d.startX) / elapsed / w;
    const projected = index.get() - velocityCardsPerSec * 0.15;
    
    // 🟢 เปลี่ยนจุดล็อกตรงนี้: ปล่อยให้มันไหลไปชนเพดาน maxIndexState ที่เป็นทศพิกเซลได้โดยตรง ไม่ต้องปัดเศษจำนวนเต็ม
    const targetIndex = Math.min(Math.max(Math.round(projected), 0), maxIndexState);

    isAnimating.current = true;
    animate(index, targetIndex, { 
      ...SPRING, 
      velocity: -velocityCardsPerSec,
      onComplete: () => { isAnimating.current = false; }
    });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      animate(index, Math.min(Math.round(index.get()) + 1, maxIndexState), SPRING);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      animate(index, Math.max(Math.round(index.get()) - 1, 0), SPRING);
    }
  };

  return (
    <section id="work" className="flex min-h-screen flex-col justify-center snap-start overflow-hidden">
      <Container className="overflow-visible relative">
        <GhostHeading ghost="SELECTED WORKS" front="WORKS" className="text-[clamp(32px,7vw,80px)]" />

        <div
          ref={viewportRef}
          tabIndex={0}
          role="region"
          aria-label="Project carousel"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onKeyDown={onKeyDown}
          style={{ 
            "--gap": "40px", 
            touchAction: "pan-y",
            height: viewportHeight,
          } as React.CSSProperties}
          className="carousel-viewport mt-[24px] mb-[-10%] cursor-grab select-none outline-none active:cursor-grabbing relative overflow-visible w-full"
        >
          {projects.map((p, i) => (
            <ProjectCard
              key={p.slug}
              p={p}
              cardIndex={i}
              index={index}
              itemWidthMV={itemWidthMV}
              registerCardRef={(el) => {
                cardRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}