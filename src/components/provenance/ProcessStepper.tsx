import { cn } from "@/lib/utils";

export interface Step {
  title: string;
  description: string;
}

const defaultSteps: Step[] = [
  {
    title: "Prepared in the Holy Land",
    description: "The item is prepared, bottled, or crafted in the Holy Land and assigned to a dated batch.",
  },
  {
    title: "Documented at Biblical sites",
    description: "Photo and video documentation is captured at selected Biblical sites or at the workshop.",
  },
  {
    title: "Quality inspected",
    description: "Each batch is inspected before a serial number and certificate are issued.",
  },
  {
    title: "Imported to the Philippines",
    description: "The batch ships with invoice, waybill, and origin documentation, and clears Philippine customs.",
  },
];

export function ProcessStepper({ steps = defaultSteps, className }: { steps?: Step[]; className?: string }) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {steps.map((step, i) => (
        <div key={step.title} className="relative rounded-md border border-stone-200 bg-ivory-100 p-5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-700 font-serif text-sm text-ivory-100">
            {i + 1}
          </span>
          <h3 className="mt-4 font-serif text-base text-navy-700">{step.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
