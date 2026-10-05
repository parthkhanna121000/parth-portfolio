"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { site } from "@/data/site";
import { Tilt } from "./Tilt";

const up = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: i * 0.1 },
});

const badges = [
  { label: "Next.js", pos: "-right-3 -top-4", z: 70 },
  { label: "Node.js", pos: "-left-4 top-1/2", z: 50 },
  { label: "Gemini API", pos: "-bottom-3 right-8", z: 90 },
];

const S = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[var(--mint)]">&quot;{children}&quot;</span>
);

const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div
        className="absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-[var(--green)]/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-36 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p {...up(0)} className="mb-5 flex flex-wrap items-center gap-3 font-mono text-xs tracking-widest">
            <span className="mut">FULL-STACK DEVELOPER · AI</span>
            <span className="chip flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cyan)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--cyan)] shadow-[0_0_10px_var(--cyan)]" />
              </span>
              {site.status}
            </span>
          </motion.p>

          <motion.h1 {...up(1)} className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            I build web applications <span className="grad-accent">that solve real problems.</span>
          </motion.h1>

          <motion.p {...up(2)} className="mut mt-6 max-w-xl text-lg leading-relaxed">
            I&apos;m Parth Khanna, a Computer Science Engineering graduate focused on building full-stack
            applications and AI-powered products using React, Next.js, Node.js and modern backend technologies.
          </motion.p>

          <motion.div {...up(3)} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-p group">
              View My Work
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a href={site.resume} download className="btn btn-s">
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div {...up(4)} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="mut group inline-flex items-center gap-1 transition hover:text-[var(--cyan)]"
              >
                {s.label}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div {...up(3)} className="hidden lg:block" aria-hidden>
          <Tilt max={14}>
            <div className="card elev relative overflow-visible font-mono text-xs" style={{ transformStyle: "preserve-3d" }}>
              <div className="flex items-center gap-1.5 border-b border-[var(--bd)] px-4 py-3">
                <i className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <i className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <i className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="mut ml-3">profile.ts</span>
              </div>
              <pre className="mut p-6 leading-6">
                <code>
                  <span className="text-[var(--cyan)]">const</span> <span className="text-[var(--fg)]">parth</span>
                  {" = {\n  role: "}
                  <S>Full-Stack Developer</S>
                  {",\n  focus: ["}
                  <S>React</S>, <S>Next.js</S>, <S>Node.js</S>
                  {"],\n  ai: ["}
                  <S>RAG</S>, <S>Gemini API</S>
                  {"],\n  status: "}
                  <S>{site.status}</S>
                  {",\n};"}
                </code>
              </pre>

              {badges.map((b) => (
                <span
                  key={b.label}
                  className={`chip absolute bg-[var(--card)] ${b.pos}`}
                  style={{ transform: `translateZ(${b.z}px)` }}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}