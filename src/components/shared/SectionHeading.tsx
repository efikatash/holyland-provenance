import { cn } from "@/lib/utils";
import { GoldDivider } from "./GoldDivider";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  size?: "md" | "lg";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
  size = "lg",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow mb-4", light ? "text-gold-400" : "text-gold-700")}>{eyebrow}</span>
      )}
      <h2
        className={cn(
          size === "lg" ? "text-display-sm sm:text-display-md lg:text-display-lg" : "text-2xl sm:text-display-sm",
          "text-balance",
          light ? "text-ivory-100" : "text-navy-700"
        )}
      >
        {title}
      </h2>
      <div className={cn("my-5 w-20", align === "left" && "ml-0")}>
        <GoldDivider />
      </div>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base sm:text-lg leading-relaxed",
            light ? "text-ivory-200/80" : "text-ink-400"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
