import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants, type ButtonVariant, type ButtonSize } from "./button-variants";

export interface PremiumLinkButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

/** Use for navigation / CTA links. For form submit buttons, use PremiumButton. */
export function PremiumLinkButton({
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className,
  children,
  ...rest
}: PremiumLinkButtonProps) {
  return (
    <Link href={href} className={cn(buttonVariants(variant, size), className)} {...rest}>
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4" aria-hidden />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="h-4 w-4" aria-hidden />}
    </Link>
  );
}
