import type { Metadata } from "next";
import { ArrowRight, ClipboardList, MessageSquare, PackageCheck, ShieldCheck, Users, Heart } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/Motion";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { JerusalemSkyline } from "@/components/shared/JerusalemSkyline";
import { DisclaimerBox } from "@/components/shared/DisclaimerBox";
import { MediaFrame } from "@/components/shared/MediaFrame";
import { Badge } from "@/components/shared/Badge";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "For Churches",
  description:
    "Holy Land worship items, pastor appreciation gifts, and Bible study collections for churches and ministry leaders across the Philippines — bulk ordering with documentation included.",
};

const steps = [
  {
    icon: MessageSquare,
    title: "Tell us about your church",
    body: "Denomination, occasion, and approximate quantity — by Contact, Request Quote, or WhatsApp.",
  },
  {
    icon: ClipboardList,
    title: "We recommend a fitting collection",
    body: "We point you to the collection worded and selected for your community, never a one-size-fits-all catalog.",
  },
  {
    icon: ShieldCheck,
    title: "Review documentation & landed cost",
    body: "See an estimated all-in cost and which Provenance documentation applies before you commit.",
  },
  {
    icon: PackageCheck,
    title: "Receive your order, documented",
    body: "Your shipment arrives with the certificates, journey log, and care instructions appropriate to the order.",
  },
];

export default function ForChurchesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy-gradient bg-grain py-20 sm:py-28">
        <JerusalemSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-ivory-100 opacity-[0.06]" />
        <Container className="relative max-w-3xl text-center">
          <FadeIn>
            <span className="eyebrow text-gold-400">
              <Users className="h-3.5 w-3.5" /> For Churches
            </span>
            <h1 className="mt-5 text-display-md text-balance text-ivory-100 sm:text-display-lg">
              Holy Land gifts and worship items for your congregation
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory-300/80 sm:text-lg">
              From a single pastor appreciation gift to a congregation-wide order, we recommend collections fitted
              respectfully to your church&rsquo;s tradition — Pentecostal and Evangelical, Catholic, or Iglesia Ni
              Cristo — and document every batch behind it.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <PremiumLinkButton href="/request-quote" variant="gold" size="lg" icon={ArrowRight}>
                Request Quote
              </PremiumLinkButton>
              <PremiumLinkButton href="/request-quote#catalog" variant="outline-light" size="lg">
                Request Catalog
              </PremiumLinkButton>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Respectful By Design"
            title="One catalog, worded for every tradition"
            description="We do not present the same items the same way to every church. Each collection is curated and labeled for the community it serves, so what you receive — and how it's described — fits your congregation."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => (
              <div key={collection.slug} className="flex flex-col rounded-lg border border-stone-200 bg-ivory-100 p-5">
                <MediaFrame
                  image={collection.heroImage}
                  icon={collection.placeholderIcon}
                  tone={collection.placeholderTone}
                  aspect="square"
                  className="mb-4"
                />
                <h3 className="font-serif text-base text-navy-700">{collection.shortName}</h3>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-ink-400">{collection.description}</p>
                <PremiumLinkButton href={`/collections/${collection.slug}`} variant="ghost" size="sm" className="mt-3 !px-0">
                  View Collection &rarr;
                </PremiumLinkButton>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory-200 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How Bulk Ordering Works"
            title="From first message to documented delivery"
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.title}>
                  <div className="relative h-full rounded-lg border border-stone-200 bg-ivory-100 p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-700 text-ivory-100">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold-700">Step {i + 1}</p>
                    <h3 className="mt-1.5 font-serif text-lg text-navy-700">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">{step.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <FadeIn>
            <MediaFrame icon="gift-box" tone="navy" label="Pastor Appreciation Gift Set" caption="Holy Land Provenance" aspect="landscape" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="eyebrow">
              <Heart className="h-3.5 w-3.5" /> Pastor &amp; Ministry Leader Gifting
            </p>
            <h2 className="mt-4 text-display-sm text-navy-700 sm:text-display-md">
              Recognize the people who lead your church
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-400">
              Anniversaries, ordinations, retirements, and appreciation Sundays are common occasions for a
              documented Holy Land gift. We can recommend a set by budget and occasion, sized for a single leader
              or an entire pastoral team.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="stone">Single-gift quantities welcome</Badge>
              <Badge tone="stone">Documentation included</Badge>
            </div>
            <div className="mt-8">
              <PremiumLinkButton href="/collections/anointing-oils" variant="outline" icon={ArrowRight}>
                See Anointing Oils
              </PremiumLinkButton>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-ivory-200 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <DisclaimerBox title="On bulk pricing and timelines">
            Because landed cost depends on size, weight, shipping method, and quantity, we confirm bulk and
            congregational orders through a quote rather than published prices. Most quotes are returned within a
            few business days; production and import lead time varies by item and quantity.
          </DisclaimerBox>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-gradient bg-grain py-20 sm:py-28">
        <JerusalemSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-ivory-100 opacity-[0.06]" />
        <Container className="relative text-center">
          <h2 className="mx-auto max-w-xl text-display-sm text-balance text-ivory-100 sm:text-display-md">
            Ready to order for your church?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ivory-300/75">
            Tell us your denomination, occasion, and estimated quantity — we&rsquo;ll recommend a fitting collection
            and confirm documentation and landed cost before you order.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <PremiumLinkButton href="/request-quote" variant="gold" size="lg" icon={ArrowRight}>
              Request Quote
            </PremiumLinkButton>
            <PremiumLinkButton href="/contact" variant="outline-light" size="lg">
              Contact Us
            </PremiumLinkButton>
          </div>
        </Container>
      </section>
    </div>
  );
}
