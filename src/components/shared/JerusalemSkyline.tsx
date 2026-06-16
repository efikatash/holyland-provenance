import { cn } from "@/lib/utils";

/**
 * Stylized, abstract Jerusalem skyline silhouette — a single-tone watermark
 * used at low opacity behind hero sections, CTA bands, and placeholder
 * cards to carry a "Holy Land" visual thread through the whole site
 * without relying on photography.
 */
export function JerusalemSkyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 280"
      preserveAspectRatio="xMidYMax slice"
      className={cn("text-navy-700", className)}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0 280V216L42 210V184H74V162L106 150V192H136V170H168V202H200V178L230 168V202H262V142L294 132V202H326V182H356V212H388V152L420 142V212H452V190H484V172L526 150V212H566V232H588V160L630 128C630 128 632 104 660 100C688 96 692 120 692 120V232H712V162L754 150V212H786V182H818V150L850 138V212H882V190H914V170H946V202H978V160L1010 150V212H1042V182H1074V202H1104V166L1136 176V202H1168V212H1200V280H0Z" />
      <path d="M634 100C634 100 638 70 661 70C684 70 688 100 688 100H634Z" />
      <circle cx="661" cy="60" r="5" />
      <path d="M661 70V46" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
