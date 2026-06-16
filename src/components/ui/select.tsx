import { forwardRef, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, hasError, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "w-full appearance-none rounded-sm border bg-ivory-100 px-3.5 py-2.5 pr-10 text-sm text-navy-700 transition-colors",
            "focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40",
            hasError ? "border-red-400" : "border-stone-300",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400/60"
          aria-hidden="true"
        />
      </div>
    );
  }
);
Select.displayName = "Select";
