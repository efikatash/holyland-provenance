import { FileCheck, QrCode, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/Motion";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Documented, not just described",
    body: "Every collection carries an origin statement worded to match what we can actually verify — never more.",
  },
  {
    icon: QrCode,
    title: "Traceable by design",
    body: "Eligible products carry a serial number and QR proof page, so a customer or church administrator can check the record themselves.",
  },
  {
    icon: FileCheck,
    title: "Paperwork before promises",
    body: "Certificates, batch journey logs, and shipment records exist before we describe a product as Holy Land sourced.",
  },
];

export function TrustNarrativeSection() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Standard"
          title="Built on trust, not claims"
          description="Christian gift markets carry a credibility problem: bold spiritual claims with no paperwork behind them. We built the opposite — every collection can carry proof, documentation, and traceability appropriate to its price point."
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={pillar.title} delay={i * 0.1}>
                <div className="text-center sm:text-left">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy-700/5 text-gold-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg text-navy-700">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{pillar.body}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
