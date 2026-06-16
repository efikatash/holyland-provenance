import type { PlaceholderIcon } from "@/lib/types";

/**
 * A small set of monoline icons used inside ImagePlaceholder cards wherever
 * we don't yet have real product photography. Deliberately abstract rather
 * than literal illustration — consistent with a quiet-luxury, editorial look.
 */
type IconProps = { className?: string };

const strokeProps = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ShofarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <path d="M8 32c-.5-7 2.6-13 8.6-16.6 5-3 10.4-2.6 13.6.4 2.4 2.3 2.7 5 1 6.8-1.6 1.8-4 1.7-5.4 0-1-1.2-1-2.7.2-3.7" />
      <path d="M8 32c1 2 3 3.3 5.6 3.2" />
    </svg>
  );
}

export function ShofarStandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <path d="M10 36h28" />
      <path d="M16 36V26l8-4 8 4v10" />
      <path d="M14 26c4 3 16 3 20 0" />
    </svg>
  );
}

export function OilBottleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <path d="M20 8h8" />
      <path d="M21 8v6l-5 6v18a2 2 0 002 2h12a2 2 0 002-2V20l-5-6V8" />
      <path d="M16 26h16" />
    </svg>
  );
}

export function JournalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <rect x="11" y="8" width="26" height="32" rx="2" />
      <path d="M11 12.5c2-1.4 4-1.4 6 0" />
      <path d="M19 18h12M19 24h12M19 30h8" />
    </svg>
  );
}

export function PenSetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <path d="M14 34L31 17a3 3 0 014 4L18 38l-6 1 1-6z" />
      <path d="M27 21l4 4" />
    </svg>
  );
}

export function BookmarkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <path d="M16 8h16v32l-8-6-8 6V8z" />
      <path d="M20 16h8" />
    </svg>
  );
}

export function BibleCoverIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <rect x="10" y="9" width="28" height="30" rx="2" />
      <path d="M24 9v30" />
      <path d="M16 18h4M16 24h4" />
    </svg>
  );
}

export function PouchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <rect x="9" y="17" width="30" height="20" rx="3" />
      <path d="M16 17c0-5 3-8 8-8s8 3 8 8" />
      <path d="M9 24h30" />
    </svg>
  );
}

export function CardSetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <rect x="12" y="11" width="22" height="15" rx="1.5" transform="rotate(-6 12 11)" />
      <rect x="13" y="17" width="22" height="15" rx="1.5" />
      <path d="M18 23h12M18 27h8" />
    </svg>
  );
}

export function PenHolderIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <path d="M14 22h20v14a2 2 0 01-2 2H16a2 2 0 01-2-2V22z" />
      <path d="M14 22c0-2 2-4 4-4h12c2 0 4 2 4 4" />
      <path d="M20 18V11l3-3 3 3v7" />
    </svg>
  );
}

export function CardHolderIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <path d="M11 34c4 2.6 22 2.6 26 0" />
      <path d="M11 34v-4c0-2 2-3 4-2l9 3 9-3c2-1 4 0 4 2v4" />
      <rect x="19" y="9" width="10" height="15" rx="1" transform="rotate(-4 19 9)" />
    </svg>
  );
}

export function KeepsakeBoxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <rect x="10" y="20" width="28" height="16" rx="2" />
      <path d="M10 20l4-8h20l4 8" />
      <path d="M24 20v16" />
    </svg>
  );
}

export function BookStandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <path d="M8 34l16-7 16 7" />
      <path d="M8 34v3l16 6 16-6v-3" />
      <path d="M24 27V13" />
    </svg>
  );
}

export function GiftBoxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <rect x="9" y="19" width="30" height="20" rx="1.5" />
      <path d="M9 26h30" />
      <path d="M24 19v20" />
      <path d="M24 19c-2-5-6-8-9-6-2 1.3-1 5 3 6" />
      <path d="M24 19c2-5 6-8 9-6 2 1.3 1 5-3 6" />
    </svg>
  );
}

export function RosaryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <circle cx="24" cy="20" r="11" />
      <circle cx="24" cy="9" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="34.8" cy="14.6" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="34.8" cy="25.4" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="24" cy="31" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="13.2" cy="25.4" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="13.2" cy="14.6" r="1.5" fill="currentColor" stroke="none" />
      <path d="M24 31v9" />
      <path d="M20 40h8" />
    </svg>
  );
}

export function CrossIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <path d="M24 8v32" />
      <path d="M15 18h18" />
      <path d="M19 40h10" />
    </svg>
  );
}

export function CommunionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <ellipse cx="24" cy="30" rx="15" ry="4" />
      <path d="M14 30c0-8 4.5-18 10-18s10 10 10 18" />
      <path d="M24 12V9" />
    </svg>
  );
}

export function PlaqueIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <rect x="10" y="11" width="28" height="26" rx="2" />
      <path d="M16 19h16M16 24h16M16 29h10" />
    </svg>
  );
}

export function StoneKeepsakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <path d="M10 32c-1-7 3-16 14-17 11 1 15 10 14 17-1 3-27 3-28 0z" />
      <path d="M18 26h12" />
    </svg>
  );
}

export function CertificateIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <rect x="8" y="9" width="32" height="22" rx="2" />
      <path d="M14 16h20M14 21h20M14 26h12" />
      <circle cx="24" cy="37" r="5" />
      <path d="M21 37l2 2 4-4" />
    </svg>
  );
}

export function QrIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <rect x="9" y="9" width="11" height="11" />
      <rect x="28" y="9" width="11" height="11" />
      <rect x="9" y="28" width="11" height="11" />
      <path d="M28 28h5v5h-5zM35 28h4M28 35h4M35 35h4v4h-4z" />
    </svg>
  );
}

export function MapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <path d="M24 38s11-11.5 11-19.5a11 11 0 10-22 0C13 26.5 24 38 24 38z" />
      <circle cx="24" cy="18.5" r="3.6" />
    </svg>
  );
}

export function SealIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <circle cx="24" cy="20" r="12" />
      <path d="M24 13l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4-3.9-3.8 5.4-.8z" />
      <path d="M17 30l-3 9 5-2 3 4 3-9" />
      <path d="M31 30l3 9-5-2-3 4-3-9" />
    </svg>
  );
}

export function DisplayRackIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <path d="M8 40V12M40 40V12" />
      <path d="M8 12h32" />
      <path d="M13 18h8v8h-8zM27 18h8v8h-8z" />
      <path d="M8 40h32" />
    </svg>
  );
}

export function CameraIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...strokeProps}>
      <rect x="6" y="14" width="36" height="24" rx="3" />
      <path d="M16 14l3-5h10l3 5" />
      <circle cx="24" cy="26" r="7" />
    </svg>
  );
}

export const placeholderIconMap: Record<PlaceholderIcon, (props: IconProps) => JSX.Element> = {
  shofar: ShofarIcon,
  "shofar-stand": ShofarStandIcon,
  "oil-bottle": OilBottleIcon,
  journal: JournalIcon,
  "pen-set": PenSetIcon,
  bookmark: BookmarkIcon,
  "bible-cover": BibleCoverIcon,
  pouch: PouchIcon,
  "card-set": CardSetIcon,
  "pen-holder": PenHolderIcon,
  "card-holder": CardHolderIcon,
  "keepsake-box": KeepsakeBoxIcon,
  "book-stand": BookStandIcon,
  "gift-box": GiftBoxIcon,
  rosary: RosaryIcon,
  cross: CrossIcon,
  communion: CommunionIcon,
  plaque: PlaqueIcon,
  "stone-keepsake": StoneKeepsakeIcon,
  certificate: CertificateIcon,
  qr: QrIcon,
  map: MapIcon,
  seal: SealIcon,
  "display-rack": DisplayRackIcon,
  camera: CameraIcon,
};
