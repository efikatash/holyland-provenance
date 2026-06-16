import { cn } from "@/lib/utils";

/** Short ornamental gold rule with a centered diamond, used beneath headings. */
export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)} aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500/80" />
      <svg width="9" height="9" viewBox="0 0 14 14" className="flex-shrink-0 text-gold-500">
        <path d="M7 0L9.5 7L7 14L4.5 7Z" fill="currentColor" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500/80" />
    </div>
  );
}
