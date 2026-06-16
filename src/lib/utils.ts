import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class lists safely, resolving conflicting utility classes. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prepend NEXT_PUBLIC_BASE_PATH to local image paths.
 *  next/image does not apply basePath to src in static export mode. */
export function resolveImageSrc(src: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return base && src.startsWith("/") ? `${base}${src}` : src;
}

/** Format a JS Date as "Month D, YYYY" for certificates and journey logs. */
export function formatLongDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
