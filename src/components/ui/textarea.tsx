import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, rows = 5, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          "w-full rounded-sm border bg-ivory-100 px-3.5 py-2.5 text-sm text-navy-700 placeholder:text-ink-400/50 transition-colors",
          "focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40",
          hasError ? "border-red-400" : "border-stone-300",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
