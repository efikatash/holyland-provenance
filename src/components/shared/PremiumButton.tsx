import { forwardRef } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants, type ButtonVariant, type ButtonSize } from "./button-variants";

export interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

/** Use for in-page actions (form submit, toggles). For navigation, use PremiumLinkButton. */
export const PremiumButton = forwardRef<HTMLButtonElement, PremiumButtonProps>(
  (
    { variant = "primary", size = "md", icon: Icon, iconPosition = "right", className, children, ...rest },
    ref
  ) => (
    <button ref={ref} className={cn(buttonVariants(variant, size), className)} {...rest}>
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4" aria-hidden />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="h-4 w-4" aria-hidden />}
    </button>
  )
);
PremiumButton.displayName = "PremiumButton";
