"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { Code2, GraduationCap, Layers } from "lucide-react";
import { Reveal } from "./ui";

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [v, setV] = useState(0);

  useEffect(() => {
    if (reduce) { setV(to); return; }
    if (!inView) return;
    const c = animate(0, to, { duration: 1.2, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to, reduce]);

  return <span ref={ref}>{v}</span>;
}

export function InfoStrip() {
  return (
    <section aria-label="Quick info" className="mx-auto max-w-6xl px-5 py-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <Reveal className="h-full">
          <Stat icon={GraduationCap} label="Education">
            <p className="text-2xl font-semibold tracking-tight">B.Tech CSE</p>
            <p className="mut mt-1 text-sm">IILM University</p>
            <span className="chip mt-4 inline-block">CGPA 8.05 / 10</span>
          </Stat>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <Stat icon={Layers} label="Featured projects">
            <p className="text-2xl font-semibold tracking-tight">
              <span className="grad text-4xl"><CountUp to={3} /></span>
            </p>
            <p className="mut mt-1 text-sm">Full-stack &amp; AI</p>
          </Stat>
        </Reveal>

        <Reveal delay={0.2} className="h-full">
          <Stat icon={Code2} label="Primary focus">
            <p className="text-2xl font-semibold tracking-tight">React · Node · AI</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {["React.js", "Node.js", "Gemini API"].map((t) => (
                <li key={t} className="chip">{t}</li>
              ))}
            </ul>
          </Stat>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon, label, children,
}: { icon: typeof Code2; label: string; children: React.ReactNode }) {
  return (
    <div className="card group relative h-full overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--green)]/50 motion-reduce:transform-none">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--green)]/10 blur-2xl transition duration-500 group-hover:bg-[var(--green)]/20"
      />
      <div className="relative">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--green)]/30 bg-[var(--green)]/10 text-[var(--green)]">
            <Icon size={18} />
          </span>
          <span className="mut font-mono text-xs uppercase tracking-wider">{label}</span>
        </div>
        {children}
      </div>
    </div>
  );
}