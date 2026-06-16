import Image from "next/image";
import { cn, resolveImageSrc } from "@/lib/utils";
import type { PlaceholderIcon, PlaceholderTone, ProductImage } from "@/lib/types";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface MediaFrameProps {
  image?: ProductImage;
  icon: PlaceholderIcon;
  tone?: PlaceholderTone;
  label?: string;
  caption?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const aspectClasses: Record<NonNullable<MediaFrameProps["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

/** Renders a real product photo when one is provided in the data, otherwise an ImagePlaceholder. */
export function MediaFrame({
  image,
  icon,
  tone,
  label,
  caption,
  aspect = "square",
  className,
  priority,
  sizes,
}: MediaFrameProps) {
  if (image) {
    return (
      <div className={cn("relative overflow-hidden rounded-lg bg-ivory-300", aspectClasses[aspect], className)}>
        <Image
          src={resolveImageSrc(image.src)}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes ?? "(min-width: 1024px) 33vw, 100vw"}
          className="object-contain p-4 sm:p-6"
        />
      </div>
    );
  }
  return (
    <ImagePlaceholder
      icon={icon}
      tone={tone}
      label={label}
      caption={caption}
      aspect={aspect}
      className={className}
    />
  );
}
