import { MapIcon } from "@/components/shared/placeholder-icons";
import { cn } from "@/lib/utils";

export interface JourneyStep {
  label: string;
  date?: string;
}

interface JourneyLogCardProps {
  batch?: string;
  steps?: JourneyStep[];
  compact?: boolean;
  className?: string;
}

const defaultSteps: JourneyStep[] = [
  { label: "Prepared in Israel", date: "May 26, 2026" },
  { label: "Documented at Biblical sites", date: "May 28, 2026" },
  { label: "Quality inspected", date: "June 1, 2026" },
  { label: "Prepared for export", date: "June 3, 2026" },
  { label: "Imported to the Philippines", date: "June 8, 2026" },
];

/** Coded mockup of the printed "Batch Journey Log" card. */
export function JourneyLogCard({
  batch = "HL-2026-06-001",
  steps = defaultSteps,
  compact = false,
  className,
}: JourneyLogCardProps) {
  const visibleSteps = compact ? steps.slice(0, 3) : steps;
  return (
    <div className={cn("rounded-md border border-stone-200 bg-ivory-100 shadow-card", compact ? "p-4" : "p-6", className)}>
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-700">Batch Journey Log</p>
        <MapIcon className="h-4 w-4 text-gold-600" />
      </div>
      <p className="mt-1 text-xs text-ink-400/70">Batch {batch}</p>
      <ol className="mt-4 space-y-3">
        {visibleSteps.map((step, i) => (
          <li key={step.label} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-navy-700 text-[10px] font-semibold text-ivory-100">
              {i + 1}
            </span>
            <span className="flex-1">
              <span className="block text-sm text-navy-700">{step.label}</span>
              {step.date && <span className="block text-xs text-ink-400/60">{step.date}</span>}
            </span>
          </li>
        ))}
        {compact && steps.length > 3 && (
          <li className="pl-8 text-xs italic text-ink-400/60">+ {steps.length - 3} more steps on the full log</li>
        )}
      </ol>
    </div>
  );
}
