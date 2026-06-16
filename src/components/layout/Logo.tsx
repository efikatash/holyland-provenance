import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="Holy Land Provenance — Home">
      <span
        className={cn(
          "relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border transition-colors",
          light ? "border-gold-400/60" : "border-gold-600/50 group-hover:border-gold-600"
        )}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-500" fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M12 3v18" strokeLinecap="round" />
          <path d="M6 9c0 5 2.5 8 6 9 3.5-1 6-4 6-9-2 1-4.5 1-6 0-1.5 1-4 1-6 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-serif text-lg sm:text-xl tracking-tight", light ? "text-ivory-100" : "text-navy-700")}>
          Holy Land
        </span>
        <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-gold-600">
          Provenance
        </span>
      </span>
    </Link>
  );
}
