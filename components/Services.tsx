"use client";
import { ArrowRight, Blocks, Bot, LayoutTemplate, Server, type LucideIcon } from "lucide-react";
import { Section, Reveal } from "./ui";
import { site } from "@/data/site";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
  wide?: boolean;
  visual?: "stack" | "chat";
};

const services: Service[] = [
  {
    icon: Blocks,
    title: "Full-Stack Web Applications",
    wide: true,
    visual: "stack",
    desc: "Modern web applications with React, Next.js, Node.js, APIs and databases.",
    tags: ["React.js", "Next.js", "Node.js", "MongoDB"],
  },
  {
    icon: LayoutTemplate,
    title: "Frontend Development",
    desc: "Responsive and interactive interfaces built with React and modern frontend technologies.",
    tags: ["React.js", "Tailwind CSS", "TypeScript"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    desc: "REST APIs, authentication, database integration, file uploads and application workflows.",
    tags: ["Express.js", "REST APIs", "JWT"],
  },
  {
    icon: Bot,
    title: "AI-Powered Features",
    wide: true,
    visual: "chat",
    desc: "AI integrations, document processing, AI chat experiences and intelligent application features.",
    tags: ["Gemini API", "RAG", "Embeddings"],
  },
];

function Visual({ type }: { type: "stack" | "chat" }) {
  if (type === "stack") {
    return (
      <div aria-hidden className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs">
        {["Client", "API", "Database"].map((s, i) => (
          <span key={s} className="flex items-center gap-2">
            <span className="rounded-lg border border-[var(--bd)] bg-[var(--bg)] px-3 py-2 text-[var(--soft)]">{s}</span>
            {i < 2 && <ArrowRight size={14} className="text-[var(--green)]" />}
          </span>
        ))}
      </div>
    );
  }
  return (
    <div aria-hidden className="mt-6 space-y-2 text-xs">
      <div className="ml-auto w-fit rounded-xl rounded-br-sm border border-[var(--bd)] bg-[var(--bg)] px-3 py-2 text-[var(--mut)]">
        Ask a question about your document
      </div>
      <div className="w-fit rounded-xl rounded-bl-sm border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-3 py-2 text-[var(--soft)]">
        Answer grounded in the retrieved context
      </div>
    </div>
  );
}

function ServiceCard({ s, n }: { s: Service; n: number }) {
  const Icon = s.icon;
  const move = (e: React.MouseEvent<HTMLElement>) => {
    const b = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - b.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - b.top}px`);
  };
  return (
    <article
      onMouseMove={move}
      className="card group relative h-full overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/50"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--x,50%) var(--y,50%), rgba(124,58,237,0.14), transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="flex items-start justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[var(--green)]">
            <Icon size={20} />
          </span>
          <span className="font-mono text-xs text-[var(--mut)] opacity-60 transition group-hover:text-[var(--green)] group-hover:opacity-100">
            0{n}
          </span>
        </div>
        <h3 className="mt-6 text-lg font-semibold tracking-tight text-[var(--fg)]">{s.title}</h3>
        <p className="mut mt-2 max-w-md text-sm leading-relaxed">{s.desc}</p>
        {s.visual && <Visual type={s.visual} />}
        <ul className="mt-6 flex flex-wrap gap-2">
          {s.tags.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <Section id="services" title="What I Can Build" sub="From interface to API to AI features, end to end.">
      <div className="grid gap-4 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className={s.wide ? "lg:col-span-2" : ""}>
            <ServiceCard s={s} n={i + 1} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#7C3AED]/30 bg-gradient-to-r from-[#7C3AED]/10 to-transparent p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-semibold text-[var(--fg)]">Have a project in mind?</p>
            <p className="mut text-sm">Tell me what you want to build.</p>
          </div>
          <a href={`mailto:${site.email}`} className="btn btn-p group">
            Let&apos;s talk <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}