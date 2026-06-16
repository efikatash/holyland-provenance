import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/shared/Container";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { FadeIn } from "@/components/shared/Motion";
import { CertificateMockup } from "./CertificateMockup";
import { QRProofCard } from "./QRProofCard";
import { JourneyLogCard } from "./JourneyLogCard";
import { TamperSealBadge } from "./TamperSealBadge";

/** Compact, homepage-ready preview of the Provenance Passport system. */
export function ProvenancePassportPreview() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient bg-grain py-20 sm:py-28">
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="The Holy Land Provenance Passport"
          title="Proof you can hold, and verify online"
          description="A serial number, a QR proof page, a printed certificate, a batch journey log, and — for eligible items — a tamper-evident seal. Built so a pastor, gift shop owner, or customer can verify origin for themselves."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-start">
          <FadeIn>
            <CertificateMockup compact />
          </FadeIn>
          <FadeIn delay={0.1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <QRProofCard compact />
            <JourneyLogCard compact />
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-row items-center justify-center gap-4 lg:flex-col">
            <TamperSealBadge />
            <p className="max-w-[150px] text-center text-xs text-ivory-300/70">
              Tamper-evident seal on eligible items
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 text-center">
          <PremiumLinkButton href="/provenance-passport" variant="gold" size="lg" icon={ArrowRight}>
            See the Full Provenance System
          </PremiumLinkButton>
        </div>
      </Container>
    </section>
  );
}
