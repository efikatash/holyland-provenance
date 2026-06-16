import { Globe, QrCode, FileCheck, Ship, Users } from "lucide-react";
import { Container } from "@/components/shared/Container";

const items = [
  { icon: Globe, label: "Made / Prepared in Israel" },
  { icon: QrCode, label: "QR Verified" },
  { icon: FileCheck, label: "Batch Documented" },
  { icon: Ship, label: "Imported to the Philippines" },
  { icon: Users, label: "Church & Reseller Ready" },
];

export function TrustStrip() {
  return (
    <div className="border-b border-stone-200 bg-ivory-50">
      <Container className="grid grid-cols-1 gap-5 py-8 sm:grid-cols-5 sm:gap-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-3 sm:flex-col sm:text-center">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy-700/5 text-gold-700">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium leading-snug text-navy-700 sm:text-[13px]">{item.label}</span>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
