import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { MediaFrame } from "@/components/shared/MediaFrame";
import { FadeIn } from "@/components/shared/Motion";

export function ResellersSection() {
  return (
    <section className="bg-ivory-200 py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn className="order-2 lg:order-1">
          <p className="eyebrow">For Resellers &amp; Gift Shops</p>
          <h2 className="mt-4 text-display-sm text-navy-700 sm:text-display-md">
            Display-ready inventory, built for your counter
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-400">
            We work with Christian gift shops, parish and Cathedral counters, and community distributors across the
            Philippines — with small minimum order quantities, clean packaging, and the origin documentation your
            customers will ask about.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink-400">
            <li className="flex gap-2.5">
              <span className="text-gold-600">—</span> Small MOQs suited to a single gift shop counter
            </li>
            <li className="flex gap-2.5">
              <span className="text-gold-600">—</span> Clean, display-ready packaging with origin details
            </li>
            <li className="flex gap-2.5">
              <span className="text-gold-600">—</span> Reseller documentation available on request
            </li>
          </ul>
          <div className="mt-8">
            <PremiumLinkButton href="/gift-shops-distributors" variant="outline" icon={ArrowRight}>
              Visit Gift Shops &amp; Distributors
            </PremiumLinkButton>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="order-1 lg:order-2">
          <MediaFrame
            icon="display-rack"
            tone="stone"
            label="Counter Display Starter Pack"
            caption="Holy Land Provenance"
            aspect="landscape"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
