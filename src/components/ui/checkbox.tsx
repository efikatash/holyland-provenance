import { forwardRef, type InputHTMLAttributes } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => {
  return (
    <span className="relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center">
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          "peer h-5 w-5 cursor-pointer appearance-none rounded-sm border border-stone-300 bg-ivory-100 transition-colors",
          "checked:border-navy-700 checked:bg-navy-700",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50",
          className
        )}
        {...props}
      />
      <Check
        className="pointer-events-none absolute h-3.5 w-3.5 text-ivory-100 opacity-0 peer-checked:opacity-100"
        aria-hidden="true"
      />
    </span>
  );
});
Checkbox.displayName = "Checkbox";
