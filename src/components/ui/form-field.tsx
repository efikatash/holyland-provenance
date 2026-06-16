import { Label } from "./label";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}

/** Standardized label + control + hint/error wrapper for form fields. */
export function FormField({ label, htmlFor, required, error, hint, className, children }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <Label htmlFor={htmlFor}>
        {label} {required && <span className="text-gold-700">*</span>}
      </Label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-ink-400/70">{hint}</p>}
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
