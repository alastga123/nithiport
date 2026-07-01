"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function BackgroundGradientAnimation({
  className,
  children,
  gradientBackgroundStart = "rgb(20, 26, 20)",
  gradientBackgroundEnd = "rgb(18, 22, 18)",
  firstColor = "80, 140, 30",
  secondColor = "140, 220, 50",
  thirdColor = "40, 90, 15",
  fourthColor = "100, 180, 40",
  fifthColor = "55, 70, 30",
  pointerColor = "130, 210, 60",
  size = "80%",
  blendingValue = "hard-light",
}: {
  className?: string;
  children?: React.ReactNode;
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
}) {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const curX = useRef(0);
  const curY = useRef(0);
  const tgX = useRef(0);
  const tgY = useRef(0);

  useEffect(() => {
    const el = interactiveRef.current;
    if (!el) return;
    const move = () => {
      curX.current += (tgX.current - curX.current) / 20;
      curY.current += (tgY.current - curY.current) / 20;
      el.style.transform = `translate(${Math.round(curX.current)}px, ${Math.round(curY.current)}px)`;
      requestAnimationFrame(move);
    };
    move();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    tgX.current = e.clientX - window.innerWidth / 2;
    tgY.current = e.clientY - window.innerHeight / 2;
  };

  return (
    <>
      {/* Fixed full-viewport background layer — pointer-events-none so scroll/touch pass through */}
      <div
        className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
        style={{
          background: `linear-gradient(40deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
        }}
      >
        <svg className="hidden">
          <defs>
            <filter id="blurMe">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="absolute inset-0 overflow-hidden" style={{ filter: "url(#blurMe)" }}>
          {[
            { color: firstColor, anim: "moveVertical", dur: "30s", origin: "center center" },
            { color: secondColor, anim: "moveInCircle", dur: "20s", origin: "calc(50% - 400px)", delay: "-5s" },
            { color: thirdColor, anim: "moveInCircle", dur: "40s", origin: "calc(50% + 400px)", delay: "-10s" },
            { color: fourthColor, anim: "moveHorizontal", dur: "40s", origin: "calc(50% - 200px)", delay: "-5s" },
            { color: fifthColor, anim: "moveInCircle", dur: "20s", origin: "calc(50% - 800px)", delay: "0s" },
          ].map((blob, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                width: size,
                height: size,
                top: "calc(50% - " + size + " / 2)",
                left: "calc(50% - " + size + " / 2)",
                background: `radial-gradient(circle at center, rgba(${blob.color}, 0.8) 0%, rgba(${blob.color}, 0) 50%)`,
                mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
                transformOrigin: blob.origin,
                animation: `${blob.anim} ${blob.dur} ease infinite`,
                animationDelay: blob.delay ?? "0s",
              }}
            />
          ))}
          <div
            ref={interactiveRef}
            className="absolute"
            style={{
              width: "100%",
              height: "100%",
              top: "-50%",
              left: "-50%",
              background: `radial-gradient(circle at center, rgba(${pointerColor}, 0.8) 0%, rgba(${pointerColor}, 0) 50%)`,
              mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
            }}
          />
        </div>
      </div>

      {/* Content scrolls over fixed background */}
      <div onMouseMove={handleMouseMove} className={cn("relative z-10", className)}>{children}</div>
    </>
  );
}
