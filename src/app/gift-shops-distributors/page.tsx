import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Store, Boxes, Truck, ShieldCheck, Tags } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/Motion";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { JerusalemSkyline } from "@/components/shared/JerusalemSkyline";
import { DisclaimerBox } from "@/components/shared/DisclaimerBox";
import { MediaFrame } from "@/components/shared/MediaFrame";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Gift Shops & Distributors",
  description:
    "Wholesale Holy Land products for Christian gift shops, parish and Cathedral counters, and community distributors in the Philippines — display-ready packaging with documentation included.",
};

const reasons = [
  {
    icon: ShieldCheck,
    title: "A verifiable story, not just a label",
    body: "Your customers can scan or look up a serial number themselves — a stronger close than \"imported from the Holy Land\" alone.",
  },
  {
    icon: Tags,
    title: "Small minimum order quantities",
    body: "Sized for a single gift shop counter, not a container load. Reorder as your shelf moves.",
  },
  {
    icon: Boxes,
    title: "Display-ready packaging",
    body: "Clean, premium presentation — not loud religious-souvenir styling — with origin details printed in, not stapled on.",
  },
  {
    icon: Truck,
    title: "Reseller documentation on request",
    body: "Invoice references and batch documentation are available to support your own customer-facing claims.",
  },
];

const steps = [
  "Tell us about your shop, customer base, and approximate budget.",
  "Choose a starter assortment — or let us recommend one across collections.",
  "Request a quote for your minimum order quantity and confirm landed cost.",
  "Receive display-ready inventory with signage and documentation, and reorder as needed.",
];

export default function GiftShopsDistributorsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy-gradient bg-grain py-20 sm:py-28">
        <JerusalemSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-ivory-100 opacity-[0.06]" />
        <Container className="relative max-w-3xl text-center">
          <FadeIn>
            <span className="eyebrow text-gold-400">
              <Store className="h-3.5 w-3.5" /> For Gift Shops &amp; Distributors
            </span>
            <h1 className="mt-5 text-display-md text-balance text-ivory-100 sm:text-display-lg">
              Display-ready Holy Land inventory for your shop
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory-300/80 sm:text-lg">
              We work with Christian gift shops, parish and Cathedral counters, and community distributors across
              the Philippines — small MOQs, premium packaging, and the origin documentation your customers will
              ask about.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <PremiumLinkButton href="/request-quote" variant="gold" size="lg" icon={ArrowRight}>
                Request Quote
              </PremiumLinkButton>
              <PremiumLinkButton href="/request-quote#catalog" variant="outline-light" size="lg">
                Request Wholesale Catalog
              </PremiumLinkButton>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why Resell With Us"
            title="Built to sell itself at the counter"
            description="Customers in this category are already primed to ask, 'Is this really from the Holy Land?' We built an answer for that question into every order."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <StaggerItem key={reason.title}>
                  <div className="h-full rounded-lg border border-stone-200 bg-ivory-100 p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-700/5 text-gold-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-serif text-base text-navy-700">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">{reason.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="bg-ivory-200 py-20 sm:py-28">
        <Container className="grid items-start gap-14 lg:grid-cols-2">
          <FadeIn>
            <p className="eyebrow">How Wholesale Works</p>
            <h2 className="mt-4 text-display-sm text-navy-700 sm:text-display-md">
              From first conversation to a stocked counter
            </h2>
            <ol className="mt-8 space-y-5">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy-700 font-serif text-sm text-ivory-100">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-ink-400">{step}</p>
                </li>
              ))}
            </ol>
          </FadeIn>
          <FadeIn delay={0.1}>
            <MediaFrame
              icon="display-rack"
              tone="navy"
              label="Gift Shop Counter Display Starter Pack"
              caption="Holy Land Provenance"
              aspect="portrait"
            />
            <p className="mt-3 text-center text-xs text-ink-400/70">
              See the{" "}
              <Link
                href="/collections/catholic-devotional-keepsakes/gift-shop-counter-display-pack"
                className="font-semibold text-gold-700 hover:underline"
              >
                Counter Display Starter Pack
              </Link>{" "}
              for a sample assortment.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Stock Across Collections"
            title="Choose inventory by your customer base"
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

      <section className="bg-ivory-200 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <DisclaimerBox title="On minimum order quantities & terms">
            Minimum order quantities, consignment versus wholesale terms, and reseller documentation vary by
            collection and are confirmed directly with our gift shop and distributor team. Request a quote with
            your shop type and estimated volume to receive specific terms.
          </DisclaimerBox>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-gradient bg-grain py-20 sm:py-28">
        <JerusalemSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-ivory-100 opacity-[0.06]" />
        <Container className="relative text-center">
          <h2 className="mx-auto max-w-xl text-display-sm text-balance text-ivory-100 sm:text-display-md">
            Ready to stock your counter?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ivory-300/75">
            Tell us about your shop and customer base — we will recommend a starter assortment and confirm pricing
            for your minimum order quantity.
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
