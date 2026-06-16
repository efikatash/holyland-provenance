import { cn } from "@/lib/utils";

/** Decorative monoline olive branch, used as a small flourish near headings and dividers. */
export function OliveBranch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 32"
      className={cn("text-olive-400", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 16C30 4 90 4 118 16" stroke="currentColor" strokeWidth="1" />
      <g stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.18">
        <ellipse cx="20" cy="11" rx="6" ry="2.3" transform="rotate(-25 20 11)" />
        <ellipse cx="38" cy="6.5" rx="6" ry="2.3" transform="rotate(-12 38 6.5)" />
        <ellipse cx="60" cy="5" rx="6" ry="2.3" />
        <ellipse cx="82" cy="6.5" rx="6" ry="2.3" transform="rotate(12 82 6.5)" />
        <ellipse cx="100" cy="11" rx="6" ry="2.3" transform="rotate(25 100 11)" />
        <ellipse cx="20" cy="21" rx="6" ry="2.3" transform="rotate(25 20 21)" />
        <ellipse cx="38" cy="25.5" rx="6" ry="2.3" transform="rotate(12 38 25.5)" />
        <ellipse cx="82" cy="25.5" rx="6" ry="2.3" transform="rotate(-12 82 25.5)" />
        <ellipse cx="100" cy="21" rx="6" ry="2.3" transform="rotate(-25 100 21)" />
      </g>
    </svg>
  );
}
