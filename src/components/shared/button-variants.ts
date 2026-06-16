export type ButtonVariant = "primary" | "gold" | "outline" | "outline-light" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-navy-700 text-ivory-100 hover:bg-navy-600 shadow-card hover:shadow-card-hover",
  gold: "bg-gold-500 text-navy-900 hover:bg-gold-400 shadow-gold",
  outline: "border border-navy-700/30 text-navy-700 hover:border-navy-700 hover:bg-navy-700/5",
  "outline-light": "border border-ivory-100/40 text-ivory-100 hover:border-ivory-100 hover:bg-ivory-100/10",
  ghost: "text-navy-700 hover:text-gold-700 underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs rounded-sm",
  md: "px-6 py-3 text-[13px] sm:text-sm rounded-sm",
  lg: "px-8 py-4 text-sm sm:text-base rounded-sm",
};

export function buttonVariants(variant: ButtonVariant = "primary", size: ButtonSize = "md") {
  return `${base} ${variantClasses[variant]} ${sizeClasses[size]}`;
}
