import { SealIcon } from "@/components/shared/placeholder-icons";
import { cn } from "@/lib/utils";

interface TamperSealBadgeProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes: Record<NonNullable<TamperSealBadgeProps["size"]>, string> = {
  sm: "h-14 w-14",
  md: "h-20 w-20",
  lg: "h-28 w-28",
};

/** Coded mockup of the tamper-evident seal applied to eligible packaging. */
export function TamperSealBadge({ size = "md", className }: TamperSealBadgeProps) {
  return (
    <div
      className={cn(
        "relative flex flex-shrink-0 items-center justify-center rounded-full bg-navy-gradient text-gold-400 shadow-seal",
        sizes[size],
        className
      )}
    >
      <SealIcon className="h-[55%] w-[55%]" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-gold-400/60" aria-hidden="true">
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
      </svg>
    </div>
  );
}
