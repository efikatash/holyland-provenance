import { JerusalemSkyline } from "@/components/shared/JerusalemSkyline";
import { OliveBranch } from "@/components/shared/OliveBranch";
import { cn } from "@/lib/utils";

interface CertificateMockupProps {
  serial?: string;
  batch?: string;
  productName?: string;
  originStatement?: string;
  compact?: boolean;
  className?: string;
}

/** Coded mockup of the printed "Certificate of Holy Land Documentation." */
export function CertificateMockup({
  serial = "HL-SHF-000127",
  batch = "HL-2026-06-001",
  productName = "Yemenite Kudu Shofar",
  originStatement = "This product was sourced from the Holy Land and documented at selected Biblical sites before being imported to the Philippines.",
  compact = false,
  className,
}: CertificateMockupProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md border border-gold-400/40 bg-parchment-gradient shadow-card",
        compact ? "p-5" : "p-6 sm:p-8",
        className
      )}
    >
      <JerusalemSkyline className="absolute inset-x-0 bottom-0 h-1/3 w-full text-navy-700 opacity-[0.06]" />
      <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-gold-600/40" aria-hidden="true" />
      <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-gold-600/40" aria-hidden="true" />

      <div className="relative text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-700">Holy Land Provenance</p>
        <h3 className={cn("mt-2 font-serif text-navy-700", compact ? "text-lg" : "text-2xl sm:text-3xl")}>
          Certificate of Holy Land Documentation
        </h3>
        <div className="my-3 flex justify-center">
          <OliveBranch className="h-4 w-20 text-gold-600" />
        </div>
        {!compact && (
          <p className="mx-auto max-w-sm text-xs leading-relaxed text-ink-400">{originStatement}</p>
        )}
        <div
          className={cn(
            "mx-auto mt-5 grid max-w-xs grid-cols-2 gap-3 text-left",
            compact && "max-w-[230px] text-xs"
          )}
        >
          <div>
            <p className="text-[10px] uppercase tracking-wide text-ink-400/60">Serial No.</p>
            <p className="font-semibold text-navy-700">{serial}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wide text-ink-400/60">Batch No.</p>
            <p className="font-semibold text-navy-700">{batch}</p>
          </div>
          <div className="col-span-2">
            <p className="text-[10px] uppercase tracking-wide text-ink-400/60">Product</p>
            <p className="font-semibold text-navy-700">{productName}</p>
          </div>
        </div>
        <p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-gold-700">
          Prepared in the Holy Land &middot; Imported to the Philippines
        </p>
      </div>
    </div>
  );
}
