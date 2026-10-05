"use client";
import { useState } from "react";
import { Copy, Check, ArrowUp, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function Contact() {
  const [ok, setOk] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setOk(true);
      setTimeout(() => setOk(false), 1800);
    } catch {}
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <div className="card elev relative overflow-hidden p-10 text-center md:p-16">
        <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
        <div
          className="absolute inset-x-0 -top-24 mx-auto h-48 w-96 rounded-full bg-[var(--green)]/20 blur-3xl"
          aria-hidden
        />

        <p className="chip relative mx-auto mb-6 inline-flex items-center gap-1.5 font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
          {site.status}
        </p>

        <h2 className="relative text-4xl font-semibold tracking-tight md:text-5xl">
          Have an idea? <span className="grad">Let&apos;s build it.</span>
        </h2>
        <p className="mut relative mx-auto mt-4 max-w-lg leading-relaxed">
          I&apos;m open to software engineering opportunities, internships and selected freelance projects.
        </p>

        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${site.email}`} className="btn btn-p">
            Email Me
          </a>
          <button onClick={copy} className="btn btn-s" aria-label="Copy email address">
            {ok ? <Check size={16} /> : <Copy size={16} />}
            {ok ? "Copied" : site.email}
          </button>
          <span className="sr-only" aria-live="polite">
            {ok ? "Email copied to clipboard" : ""}
          </span>
        </div>

        <div className="relative mt-6 flex justify-center gap-6 text-sm">
          {[
            { label: "LinkedIn", href: site.linkedin },
            { label: "GitHub", href: site.github },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mut group inline-flex items-center gap-1 transition hover:text-[var(--fg)]"
            >
              {l.label}
              <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const navLinks = ["Projects", "Skills", "About", "Contact"];

export function Footer() {
  return (
    <footer className="border-t border-[var(--bd)] px-5 py-10 text-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
        <div>
          <p className="font-medium text-[var(--fg)]">Parth Khanna</p>
          <p className="mut">Full-Stack Developer · AI</p>
        </div>

        <nav aria-label="Footer" className="mut flex flex-wrap gap-5">
          {navLinks.map((l) => (
            <a key={l} href={`/#${l.toLowerCase()}`} className="transition hover:text-[var(--fg)]">
              {l}
            </a>
          ))}
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--fg)]">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--fg)]">
            LinkedIn
          </a>
        </nav>

        <div className="mut flex items-center gap-4">
          <p>© {new Date().getFullYear()} Parth Khanna</p>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--bd)] transition hover:border-[var(--green)] hover:text-[var(--fg)]"
          >
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}