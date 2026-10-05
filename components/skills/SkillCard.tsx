"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { Tech } from "./techData";
import { Glyph } from "./TechNode";

export function SkillCard({ t, onClose, onPick }: { t: Tech; onClose: () => void; onPick: (name: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
      className="absolute inset-x-4 bottom-4 z-30 rounded-2xl border border-[var(--bd)] bg-[var(--card)]/90 p-5 shadow-[var(--shadow-lg)] backdrop-blur-xl md:right-auto md:w-80"
      role="dialog" aria-label={`${t.name} details`}
    >
      <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 text-[var(--mut)] hover:text-[var(--fg)]"><X size={16} /></button>
      <div className="flex items-center gap-3">
        <Glyph t={t} size={32} />
        <div><h3 className="font-semibold">{t.name}</h3><p className="text-xs text-[var(--soft)]">{t.category}</p></div>
      </div>
      <p className="mut mt-3 text-sm">{t.description}</p>
      {t.usage && <p className="mt-2 text-sm"><span className="mut">Usage: </span>{t.usage}</p>}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {t.related.map((r) => (
          <button key={r} onClick={() => onPick(r)} className="chip">{r}</button>
        ))}
      </div>
    </motion.div>
  );
}