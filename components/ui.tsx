"use client";
import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
  children, delay = 0, className,
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const r = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={r ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal3D({
  children, delay = 0, axis = "x", className,
}: { children: React.ReactNode; delay?: number; axis?: "x" | "y"; className?: string }) {
  const r = useReducedMotion();
  const from =
    axis === "x"
      ? { opacity: 0, y: 60, rotateX: -45, scale: 0.9 }
      : { opacity: 0, x: -60, rotateY: 45, scale: 0.9 };
  return (
    <motion.div
      className={className}
      style={{ transformPerspective: 1000, transformOrigin: axis === "x" ? "50% 100%" : "0% 50%" }}
      initial={r ? false : from}
      whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id, eyebrow, title, sub, children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {sub && <p className="mut mt-3 max-w-2xl">{sub}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-2 font-mono text-xs">
      {steps.map((s, i) => (
        <Reveal key={s} delay={i * 0.08}>
          <li className="flex items-center gap-2">
            <span className="card px-2.5 py-1.5">{s}</span>
            {i < steps.length - 1 && (
              <span className="text-[var(--cyan)]/70" aria-hidden>→</span>
            )}
          </li>
        </Reveal>
      ))}
    </ol>
  );
}