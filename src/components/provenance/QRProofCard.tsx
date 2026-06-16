import { QrIcon } from "@/components/shared/placeholder-icons";
import { cn } from "@/lib/utils";

interface QRProofCardProps {
  serial?: string;
  compact?: boolean;
  className?: string;
}

/** Coded mockup of the printed/digital QR proof card linked to /verify-product. */
export function QRProofCard({ serial = "HL-SHF-000127", compact = false, className }: QRProofCardProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-navy-900/20 bg-navy-gradient text-ivory-100 shadow-card",
        compact ? "p-4" : "p-6",
        className
      )}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-400">Holy Land Provenance</p>
      <div
        className={cn(
          "mx-auto mt-4 flex items-center justify-center rounded-md bg-ivory-100 p-4",
          compact ? "h-20 w-20" : "h-32 w-32 sm:h-36 sm:w-36"
        )}
      >
        <QrIcon className="h-full w-full text-navy-700" />
      </div>
      <p className="mt-4 text-center text-sm font-semibold tracking-wide">{serial}</p>
      {!compact && (
        <p className="mt-1 text-center text-[11px] leading-relaxed text-ivory-300/70">
          Scan for proof — view the full Provenance Passport, photo and video documentation, and certificate.
        </p>
      )}
    </div>
  );
}
