import Link from "next/link";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ p, index = 0 }: { p: Project; index?: number }) {
  const hasLive = p.liveDemo !== "#";
  const hasRepo = p.github !== "#";
  const flow = p.flow.slice(0, 4);
  const shown = p.technologies.slice(0, 4);
  const extra = p.technologies.length - shown.length;
  const secondary =
    "relative z-10 inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--bd)] px-3 py-2.5 text-sm text-[var(--mut)] transition hover:border-[var(--green)]/60 hover:bg-[var(--green)]/10 hover:text-[var(--mint)]";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--bd)] bg-[var(--card)] shadow-[var(--shadow)] transition duration-300 focus-within:border-[var(--mint)] hover:-translate-y-1 hover:border-[var(--green)]/40 hover:shadow-[var(--shadow-lg)] motion-reduce:transform-none motion-reduce:transition-none">
      {/* cover */}
      <div className="relative overflow-hidden border-b border-[var(--bd)] bg-[var(--bg)] px-6 pb-6 pt-5">
        <div
          aria-hidden
          className="absolute inset-0 opacity-70 transition duration-500 group-hover:opacity-100"
          style={{ background: "radial-gradient(circle at 85% 0%, color-mix(in srgb, var(--green) 26%, transparent), transparent 55%)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "linear-gradient(to bottom, #000, transparent 95%)",
            WebkitMaskImage: "linear-gradient(to bottom, #000, transparent 95%)",
          }}
        />

        <div className="relative flex items-center justify-between">
          <span className="font-mono text-xs text-[var(--soft)]">0{index + 1}</span>
          {hasLive ? (
            <span className="flex items-center gap-1.5 rounded-full border border-[var(--green)]/30 bg-[var(--green)]/10 px-2.5 py-0.5 text-[11px] text-[var(--soft)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)] shadow-[0_0_8px_var(--mint)]" />
              Live
            </span>
          ) : (
            <span className="rounded-full border border-[var(--bd)] px-2.5 py-0.5 text-[11px] text-[var(--mut)]">Source available</span>
          )}
        </div>

        <ol aria-label="How it works" className="relative mt-6 flex items-start">
          {flow.map((s, i) => (
            <li key={s} className="relative flex-1 pr-2 text-[11px] leading-tight">
              <span className="relative z-[1] mb-2 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--green)]/60 bg-[var(--bg)] font-mono text-[10px] text-[var(--mint)]">
                {i + 1}
              </span>
              {i < flow.length - 1 && (
                <span aria-hidden className="absolute left-5 right-0 top-2.5 h-px bg-gradient-to-r from-[var(--green)]/50 to-[var(--bd)]" />
              )}
              <span className="block text-[var(--fg)]/85">{s}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-0.5 text-sm font-medium text-[var(--mint)]">{p.subtitle}</p>
          </div>
          <ArrowUpRight
            aria-hidden
            size={20}
            className="mt-1 shrink-0 text-[var(--mut)]/50 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--mint)]"
          />
        </div>

        <p className="mut mt-3 line-clamp-3 text-sm leading-relaxed">{p.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {shown.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
          {extra > 0 && <li className="chip">+{extra} more</li>}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          <Link
            href={`/projects/${p.slug}`}
            className="btn btn-p flex-1 justify-center !py-2.5 after:absolute after:inset-0 after:content-['']"
          >
            View case study
          </Link>
          {hasRepo && (
            <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} source code on GitHub`} className={secondary}>
              <Github size={16} /> Code
            </a>
          )}
          {hasLive && (
            <a href={p.liveDemo} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`} className={secondary}>
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}