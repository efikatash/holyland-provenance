import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { JerusalemSkyline } from "@/components/shared/JerusalemSkyline";
import { VerificationDemo } from "@/components/provenance/VerificationDemo";
import { DisclaimerBox } from "@/components/shared/DisclaimerBox";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";

export const metadata: Metadata = {
  title: "Verify a Product",
  description:
    "Verify the Holy Land origin of your product. Enter your serial number to view its documented batch, origin record, and certificates.",
};

export default function VerifyProductPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy-gradient bg-grain py-16 sm:py-20">
        <JerusalemSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-ivory-100 opacity-[0.06]" />
        <Container className="relative max-w-2xl text-center">
          <span className="eyebrow text-gold-400">
            <ShieldCheck className="h-3.5 w-3.5" /> Verify a Product
          </span>
          <h1 className="mt-5 text-display-sm text-balance text-ivory-100 sm:text-display-md">
            Check your product&rsquo;s Holy Land Provenance record
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ivory-300/80">
            Enter the serial number printed on your certificate or QR card. Eligible products carry an individual
            serial; smaller items are documented at the batch level.
          </p>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <Container className="max-w-4xl">
          <div className="rounded-xl border border-stone-200 bg-ivory-100 p-6 shadow-card sm:p-10">
            <VerificationDemo />
          </div>

          <DisclaimerBox className="mt-8" tone="muted" title="About this demo">
            This page is a structured demo: it recognizes only the sample serial numbers shown above, so you can
            see exactly what a verified record includes. Connect this page to a live database before publishing
            real serial numbers to customers — see README.md for integration notes.
          </DisclaimerBox>

          <div className="mt-10 text-center">
            <p className="text-sm text-ink-400">
              Don&rsquo;t have a serial number yet, or have a question about a record?
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-4">
              <PremiumLinkButton href="/provenance-passport" variant="outline">
                Learn How Verification Works
              </PremiumLinkButton>
              <PremiumLinkButton href="/contact" variant="gold">
                Contact Us
              </PremiumLinkButton>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
