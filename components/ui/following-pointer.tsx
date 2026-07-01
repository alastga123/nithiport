"use client";

import { useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValue, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { useHoverDevice } from "@/hooks/useHoverDevice";

export function FollowerPointerCard({
  children,
  className,
  title,
}: {
  children: ReactNode;
  className?: string;
  title?: ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState(false);
  const hasHover = useHoverDevice();

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={ref}
      onPointerEnter={() => setIsInside(true)}
      onPointerLeave={() => setIsInside(false)}
      onPointerMove={handlePointerMove}
      className={cn("relative", hasHover ? "cursor-none" : "", className)}
    >
      {hasHover && (
        <AnimatePresence>{isInside && <FollowPointer x={x} y={y} title={title} />}</AnimatePresence>
      )}
      {children}
    </div>
  );
}

function FollowPointer({
  x,
  y,
  title,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  title?: ReactNode;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute z-50"
      style={{ top: y, left: x }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-5 w-5 -translate-x-1 -translate-y-1 scale-x-[-1] text-lime"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
      </svg>
      {title && (
        <div className="pointer-label ml-4 mt-1 px-4 py-2 whitespace-nowrap rounded-full bg-lime px-3 py-1 text-sm font-medium text-black">
          {title}
        </div>
      )}
    </motion.div>
  );
}
