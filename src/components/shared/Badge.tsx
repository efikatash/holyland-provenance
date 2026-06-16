import { cn } from "@/lib/utils";

export type BadgeTone = "navy" | "gold" | "olive" | "stone" | "outline" | "ivory";

const tones: Record<BadgeTone, string> = {
  navy: "bg-navy-700 text-ivory-100",
  gold: "bg-gold-500 text-navy-900",
  olive: "bg-olive-400 text-ivory-100",
  stone: "bg-stone-200 text-navy-700",
  outline: "border border-navy-700/30 text-navy-700",
  ivory: "bg-ivory-100 text-navy-700 border border-stone-200",
};

export function Badge({
  children,
  tone = "navy",
  className,
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
