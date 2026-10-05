import Link from "next/link";

export function Logo() {
  return (
    <Link href="/#home" aria-label="Parth Khanna, home" className="group flex items-center gap-2.5">
      <span
        aria-hidden
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--green)]/40 bg-gradient-to-br from-[var(--green)]/25 to-[var(--card)] font-mono text-[13px] font-bold tracking-tighter text-[var(--mint)] shadow-[0_0_18px_-6px_rgba(124,58,237,0.6)] transition group-hover:border-[var(--mint)] group-hover:shadow-[0_0_22px_-4px_rgba(167,139,250,0.7)]"
      >
        PK
      </span>
      <span className="text-sm font-semibold tracking-tight">Parth Khanna</span>
    </Link>
  );
}