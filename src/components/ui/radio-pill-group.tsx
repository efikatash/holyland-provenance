"use client";

import { cn } from "@/lib/utils";

export interface RadioPillOption {
  label: string;
  value: string;
}

interface RadioPillGroupProps {
  name: string;
  options: RadioPillOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

/** Segmented pill selector built on native radio inputs (e.g. customer type, yes/no toggles). */
export function RadioPillGroup({ name, options, value, onChange, className }: RadioPillGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)} role="radiogroup">
      {options.map((opt) => {
        const checked = value === opt.value;
        return (
          <label
            key={opt.value}
            className={cn(
              "cursor-pointer select-none rounded-full border px-4 py-2 text-sm transition-colors",
              checked
                ? "border-navy-700 bg-navy-700 text-ivory-100"
                : "border-stone-300 bg-ivory-100 text-navy-700 hover:border-navy-700/50"
            )}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={checked}
              onChange={() => onChange?.(opt.value)}
              className="sr-only"
            />
            {opt.label}
          </label>
        );
      })}
    </div>
  );
}
