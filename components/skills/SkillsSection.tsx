"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui";
import { techs, type Cat, type Tech } from "./techData";
import { SkillFilters } from "./SkillFilters";
import { SkillCard } from "./SkillCard";
import { TechNode } from "./TechNode";

const TechGalaxy = dynamic(() => import("./TechGalaxy"), { ssr: false });

export function SkillsSection() {
  const reduced = !!useReducedMotion();
  const [filter, setFilter] = useState<"All" | Cat>("All");
  const [sel, setSel] = useState<Tech | null>(null);
  const [mode, setMode] = useState<"3d" | "list" | null>(null);

  useEffect(() => {
    let gl = false;
    try { const c = document.createElement("canvas"); gl = !!(c.getContext("webgl2") || c.getContext("webgl")); } catch {}
    setMode(gl && window.matchMedia("(min-width: 768px)").matches ? "3d" : "list");
  }, []);

  const pick = (name: string) => setSel(techs.find((t) => t.name === name) ?? null);

  return (
    <Section id="skills" title="Technical Skills" sub="Technologies I use to build modern, scalable and intelligent applications.">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <SkillFilters value={filter} onChange={(v) => { setFilter(v); setSel(null); }} />
        {mode && (
          <button className="btn btn-s !py-1.5" onClick={() => setMode(mode === "3d" ? "list" : "3d")}>
            {mode === "3d" ? "List view" : "3D view"}
          </button>
        )}
      </div>
      <div className="card relative overflow-hidden" style={{ minHeight: 560 }}>
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
        {mode === "3d" && (
          <div className="absolute inset-0">
            <TechGalaxy filter={filter} selected={sel} onSelect={setSel} reduced={reduced} />
          </div>
        )}
        {mode === "list" && (
          <ul className="relative grid grid-cols-3 gap-6 p-6 pb-44 sm:grid-cols-4 md:grid-cols-6">
            {techs.map((t) => (
              <li key={t.name} className="flex flex-col items-center gap-2 text-center text-xs">
                <TechNode t={t} active={filter === "All" || filter === t.category} selected={sel?.name === t.name} onSelect={() => setSel(t)} />
                <span className="mut">{t.name}</span>
              </li>
            ))}
          </ul>
        )}
        <AnimatePresence>{sel && <SkillCard key={sel.name} t={sel} onClose={() => setSel(null)} onPick={pick} />}</AnimatePresence>
      </div>
    </Section>
  );
}