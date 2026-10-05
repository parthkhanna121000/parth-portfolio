"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

export function Tilt({
  children, max = 12, className,
}: { children: React.ReactNode; max?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);
  const glare = useTransform(
    [sx, sy],
    ([a, b]: number[]) =>
      `radial-gradient(circle at ${(a + 0.5) * 100}% ${(b + 0.5) * 100}%, rgba(167,139,250,0.16), transparent 55%)`
  );

  const move = (e: React.PointerEvent) => {
    if (reduce || !ref.current) return;
    const b = ref.current.getBoundingClientRect();
    x.set((e.clientX - b.left) / b.width - 0.5);
    y.set((e.clientY - b.top) / b.height - 0.5);
  };
  const leave = () => { x.set(0); y.set(0); };

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <motion.div
        ref={ref}
        onPointerMove={move}
        onPointerLeave={leave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full"
      >
        {children}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[14px]"
          style={{ background: glare }}
        />
      </motion.div>
    </div>
  );
}