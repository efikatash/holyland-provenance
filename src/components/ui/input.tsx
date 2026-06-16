import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, hasError, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-sm border bg-ivory-100 px-3.5 py-2.5 text-sm text-navy-700 placeholder:text-ink-400/50 transition-colors",
        "focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40",
        hasError ? "border-red-400" : "border-stone-300",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
