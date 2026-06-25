import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { MediaFrame } from "@/components/shared/MediaFrame";
import { FadeIn } from "@/components/shared/Motion";

export function PastorsSection() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <MediaFrame
            icon="shofar"
            tone="wood"
            label="Pastor Appreciation"
            caption="Holy Land Provenance"
            aspect="landscape"
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="eyebrow">For Pastors &amp; Ministry Leaders</p>
          <h2 className="mt-4 text-display-sm text-navy-700 sm:text-display-md">
            Gifts worthy of the calling you&rsquo;re honoring
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-400">
            Whether you are recognizing a pastor&rsquo;s anniversary, equipping a new ministry leader, or simply
            saying thank you, we help you choose something documented, respectful, and fitting for the occasion —
            without overstating what any gift can do.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink-400">
            <li className="flex gap-2.5">
              <span className="text-gold-600">—</span> Pastor appreciation sets with documentation included
            </li>
            <li className="flex gap-2.5">
              <span className="text-gold-600">—</span> Worship and prayer items prepared in the Holy Land
            </li>
            <li className="flex gap-2.5">
              <span className="text-gold-600">—</span> Bulk and single-gift quantities, with quotes confirmed before
              ordering
            </li>
          </ul>
          <div className="mt-8">
            <PremiumLinkButton href="/for-churches" variant="outline" icon={ArrowRight}>
              Visit For Churches
            </PremiumLinkButton>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
