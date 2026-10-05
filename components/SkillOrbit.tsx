"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skills } from "@/data/site";

export function SkillOrbit() {
  const keys = Object.keys(skills);
  const n = keys.length;
  const step = 360 / n;
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const active = ((i % n) + n) % n;

  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") setI(i + 1);
        if (e.key === "ArrowLeft") setI(i - 1);
      }}
      aria-label="Skill categories carousel, use left and right arrow keys"
      className="outline-none"
    >
      <div className="relative mx-auto h-60 w-full max-w-4xl overflow-hidden" style={{ perspective: 1400 }}>
        <motion.div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: -i * step }}
          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 60, damping: 16 }}
        >
          {keys.map((k, idx) => (
            <button
              key={k}
              onClick={() => setI(i + (((idx - active) % n) + n + (idx - active > n / 2 ? -n : 0)) % n)}
              className={`card absolute left-1/2 top-1/2 -ml-24 -mt-14 flex h-28 w-48 flex-col items-center justify-center gap-1 transition-colors ${
                idx === active ? "border-[#7C3AED] shadow-[0_0_30px_-8px_rgba(124,58,237,0.5)]" : "opacity-70"
              }`}
              style={{
                transform: `rotateY(${idx * step}deg) translateZ(300px)`,
                backfaceVisibility: "hidden",
              }}
            >
              <span className="font-semibold">{k}</span>
              <span className="mut text-xs">{skills[k].length} skills</span>
            </button>
          ))}
        </motion.div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button onClick={() => setI(i - 1)} aria-label="Previous category" className="btn btn-s !p-2"><ChevronLeft size={18} /></button>
        <motion.ul
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex min-h-[2.5rem] max-w-xl flex-wrap justify-center gap-2"
        >
          {skills[keys[active]].map((s) => <li key={s} className="chip">{s}</li>)}
        </motion.ul>
        <button onClick={() => setI(i + 1)} aria-label="Next category" className="btn btn-s !p-2"><ChevronRight size={18} /></button>
      </div>
    </div>
  );
}