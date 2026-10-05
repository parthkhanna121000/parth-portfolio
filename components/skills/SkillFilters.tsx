"use client";
import { categories, type Cat } from "./techData";

export function SkillFilters({ value, onChange }: { value: "All" | Cat; onChange: (v: "All" | Cat) => void }) {
  return (
    <div role="tablist" aria-label="Filter skills by category" className="flex gap-2 overflow-x-auto pb-1">
      {(["All", ...categories] as const).map((c) => (
        <button
          key={c}
          role="tab"
          aria-selected={value === c}
          onClick={() => onChange(c)}
          className={`shrink-0 rounded-full border px-4 py-1.5 text-sm transition ${
            value === c
              ? "border-[var(--green)] bg-[var(--green)] text-[var(--btn-text)]"
              : "border-[var(--bd)] text-[var(--mut)] hover:border-[var(--green)]/50 hover:text-[var(--fg)]"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}