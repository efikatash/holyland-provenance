import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface DisclaimerBoxProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "gold" | "muted";
}

/** Used for religious-sensitivity, customs, and "informational only" disclaimers throughout the site. */
export function DisclaimerBox({ title, children, className, tone = "gold" }: DisclaimerBoxProps) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-md border px-4 py-4 sm:px-5 sm:py-5",
        tone === "gold" ? "border-gold-300/60 bg-gold-50/60" : "border-stone-200 bg-stone-50/80",
        className
      )}
    >
      <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-700" aria-hidden="true" />
      <div className="text-sm leading-relaxed">
        {title && <p className="mb-1 font-semibold text-navy-700">{title}</p>}
        <div className="text-ink-400">{children}</div>
      </div>
    </div>
  );
}
