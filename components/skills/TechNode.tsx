"use client";
import { Network, KeyRound, Sparkles, Search, Waypoints, Database, Boxes, Binary, Table2, type LucideIcon } from "lucide-react";
import type { Tech } from "./techData";

const sym: Record<string, LucideIcon> = {
  network: Network, key: KeyRound, sparkles: Sparkles, search: Search, waypoints: Waypoints,
  database: Database, boxes: Boxes, binary: Binary, table: Table2,
};

export function Glyph({ t, size = 28 }: { t: Tech; size?: number }) {
  if (t.icon) {
    const white = t.icon.endsWith("/fff");
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={t.icon}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        draggable={false}
        className={white ? "[:root:not(.dark)_&]:invert" : undefined}
      />
    );
  }
  const I = sym[t.symbol ?? "boxes"];
  return <I size={size} strokeWidth={1.6} className="text-[var(--mint)]" />;
}

export function TechNode({
  t, active, selected, onSelect, onHover,
}: { t: Tech; active: boolean; selected: boolean; onSelect: () => void; onHover?: (h: boolean) => void }) {
  return (
    <button
      onClick={onSelect}
      onPointerEnter={() => onHover?.(true)}
      onPointerLeave={() => onHover?.(false)}
      aria-label={`${t.name}, ${t.category}`}
      aria-pressed={selected}
      disabled={!active}
      className={`group relative flex h-14 w-14 items-center justify-center rounded-2xl border bg-[var(--card)]/80 backdrop-blur transition duration-300 hover:scale-110 hover:border-[var(--green)] hover:shadow-[0_0_24px_rgba(124,58,237,0.45)] ${
        selected ? "border-[var(--mint)] shadow-[0_0_24px_rgba(124,58,237,0.45)]" : "border-[var(--bd)]"
      } ${active ? "opacity-100" : "pointer-events-none opacity-15"}`}
    >
      <Glyph t={t} />
      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-[var(--bd)] bg-[var(--bg)]/95 px-2.5 py-1 text-center text-xs opacity-0 transition group-hover:opacity-100">
        <b className="block font-medium text-[var(--fg)]">{t.name}</b>
        <span className="text-[var(--soft)]">{t.category}</span>
      </span>
    </button>
  );
}