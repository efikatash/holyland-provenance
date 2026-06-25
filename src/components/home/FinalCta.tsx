import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { JerusalemSkyline } from "@/components/shared/JerusalemSkyline";
import { GoldDivider } from "@/components/shared/GoldDivider";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient bg-grain py-20 sm:py-28">
      <JerusalemSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-ivory-100 opacity-[0.06]" />
      <Container className="relative text-center">
        <p className="eyebrow text-gold-400">Begin With Confidence</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-display-sm text-balance text-ivory-100 sm:text-display-md">
          Start with a verified sample set from the Holy Land.
        </h2>
        <div className="my-6 flex justify-center">
          <GoldDivider />
        </div>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-ivory-300/75">
          Request a small documented sample — shofar, oil, or Bible study item — before committing to a larger
          congregational or wholesale order.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <PremiumLinkButton href="/request-quote" variant="gold" size="lg" icon={ArrowRight}>
            Request Quote
          </PremiumLinkButton>
          <PremiumLinkButton href="/contact" variant="outline-light" size="lg">
            Contact Us
          </PremiumLinkButton>
        </div>
      </Container>
    </section>
  );
}
