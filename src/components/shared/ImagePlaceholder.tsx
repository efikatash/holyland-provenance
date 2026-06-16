import { cn } from "@/lib/utils";
import type { PlaceholderIcon, PlaceholderTone } from "@/lib/types";
import { placeholderIconMap } from "./placeholder-icons";
import { JerusalemSkyline } from "./JerusalemSkyline";

export interface ImagePlaceholderProps {
  icon: PlaceholderIcon;
  tone?: PlaceholderTone;
  label?: string;
  caption?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
  iconClassName?: string;
  showSkyline?: boolean;
}

const toneStyles: Record<PlaceholderTone, { bg: string; icon: string; ring: string; dark: boolean }> = {
  navy: { bg: "bg-navy-gradient", icon: "text-gold-400", ring: "ring-1 ring-inset ring-gold-500/20", dark: true },
  olive: {
    bg: "bg-gradient-to-br from-olive-100 via-ivory-200 to-stone-100",
    icon: "text-olive-500",
    ring: "ring-1 ring-inset ring-olive-300/40",
    dark: false,
  },
  stone: {
    bg: "bg-gradient-to-br from-stone-100 via-ivory-200 to-ivory-300",
    icon: "text-wood-300",
    ring: "ring-1 ring-inset ring-stone-300/50",
    dark: false,
  },
  wood: { bg: "bg-wood-gradient", icon: "text-stone-100", ring: "ring-1 ring-inset ring-gold-500/20", dark: true },
  ivory: {
    bg: "bg-parchment-gradient",
    icon: "text-gold-700",
    ring: "ring-1 ring-inset ring-gold-400/30",
    dark: false,
  },
};

const aspectClasses: Record<NonNullable<ImagePlaceholderProps["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

/**
 * Polished, on-brand stand-in for real product photography. Used wherever
 * a Product/Collection has no `images` entry yet — swap in real photos by
 * adding an `images` array to the relevant entry in /src/data/products.ts.
 */
export function ImagePlaceholder({
  icon,
  tone = "ivory",
  label,
  caption,
  aspect = "square",
  className,
  iconClassName,
  showSkyline = true,
}: ImagePlaceholderProps) {
  const Icon = placeholderIconMap[icon];
  const styles = toneStyles[tone];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-grain",
        styles.bg,
        styles.ring,
        aspectClasses[aspect],
        className
      )}
    >
      {showSkyline && (
        <JerusalemSkyline
          className={cn(
            "absolute inset-x-0 bottom-0 h-1/2 w-full opacity-[0.08]",
            styles.dark ? "text-ivory-100" : "text-navy-700"
          )}
        />
      )}
      <span
        className={cn(
          "absolute left-3 top-3 h-4 w-4 border-l border-t",
          styles.dark ? "border-gold-400/50" : "border-gold-600/40"
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "absolute bottom-3 right-3 h-4 w-4 border-b border-r",
          styles.dark ? "border-gold-400/50" : "border-gold-600/40"
        )}
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
        <Icon className={cn("h-12 w-12 sm:h-14 sm:w-14", styles.icon, iconClassName)} />
        {label && (
          <p
            className={cn(
              "font-serif text-sm leading-snug sm:text-base",
              styles.dark ? "text-ivory-100" : "text-navy-700"
            )}
          >
            {label}
          </p>
        )}
        {caption && (
          <p
            className={cn(
              "text-[10.5px] uppercase tracking-[0.14em] sm:text-[11px]",
              styles.dark ? "text-ivory-300/70" : "text-ink-400/70"
            )}
          >
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
