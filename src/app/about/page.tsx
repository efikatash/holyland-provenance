import type { Metadata } from "next";
import { ArrowRight, Sparkles, Layers, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "@/components/shared/Motion";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { JerusalemSkyline } from "@/components/shared/JerusalemSkyline";
import { GoldDivider } from "@/components/shared/GoldDivider";

export const metadata: Metadata = {
  title: "About",
  description:
    "Holy Land Provenance is a Philippines-based initiative connecting Christian communities with documented, Holy Land-origin products — built on authenticity, documentation, and honest import practices.",
};

const timeline = [
  {
    year: "Year One",
    title: "Church community demand for shofars and anointing oils",
    body: "What began as informal requests from a handful of churches for shofars and anointing oils from the Holy Land revealed a clear, underserved need across the Philippines.",
  },
  {
    year: "Expansion",
    title: "Community-specific collections",
    body: "As more churches, gift shops, and individual believers reached out, it became clear that a single generic catalog could not respectfully serve Pentecostal, Catholic, and Iglesia Ni Cristo communities alike. We built distinct, appropriately worded collections for each.",
  },
  {
    year: "The Trust Problem",
    title: "Building the Holy Land Provenance Passport",
    body: "Bold, undocumented claims of “Holy Land origin” are common in this market, and rarely backed by paperwork. We built the Provenance Passport system so our claims could be checked, not just trusted.",
  },
  {
    year: "Today",
    title: "Serving churches, members, gift shops, and distributors",
    body: "We now work with pastors and ministry leaders, individual believers, Christian gift shops, and community distributors across the Philippines, with every order documented to a standard appropriate to its size.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Documented over claimed",
    body: "If we cannot back a claim with paperwork, we do not make the claim.",
  },
  {
    icon: Users,
    title: "Respectful of every tradition",
    body: "Pentecostal, Catholic, and Iglesia Ni Cristo communities are served with collections worded for their context, never a one-size-fits-all catalog.",
  },
  {
    icon: Layers,
    title: "Honest about import realities",
    body: "Customs, duties, and shipping are explained plainly, not glossed over until after you order.",
  },
  {
    icon: Sparkles,
    title: "Built for relationship, not one sale",
    body: "Most of our partners reorder. We would rather earn that than oversell a first order.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy-gradient bg-grain py-20 sm:py-28">
        <JerusalemSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-ivory-100 opacity-[0.06]" />
        <Container className="relative max-w-3xl text-center">
          <FadeIn>
            <span className="eyebrow text-gold-400">About Holy Land Provenance</span>
            <h1 className="mt-5 text-display-md text-balance text-ivory-100 sm:text-display-lg">
              From the Holy Land to your hands, documented with integrity.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory-300/80 sm:text-lg">
              Holy Land Provenance is a Philippines-based initiative connecting Christian communities with
              carefully selected, documented products from the Holy Land — built on authenticity, respectful packaging,
              and honest import practices.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Our Story" title="How this began" align="left" />
          <div className="mt-12 space-y-10 border-l border-stone-200 pl-8">
            {timeline.map((item) => (
              <FadeIn key={item.title} className="relative">
                <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-gold-500 bg-ivory" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">{item.year}</p>
                <h3 className="mt-2 font-serif text-xl text-navy-700">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400 sm:text-base">{item.body}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory-200 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="What We Believe" title="The principles behind every order" />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="h-full rounded-lg border border-stone-200 bg-ivory-100 p-6 text-center sm:text-left">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy-700/5 text-gold-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-serif text-base text-navy-700">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">{value.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="bg-ivory py-20 text-center sm:py-28">
        <Container className="max-w-2xl">
          <h2 className="font-serif text-2xl text-navy-700 sm:text-3xl">Who we serve</h2>
          <div className="my-6 flex justify-center">
            <GoldDivider />
          </div>
          <p className="text-base leading-relaxed text-ink-400">
            Pentecostal and Evangelical churches, pastors and ministry leaders, Catholic gift shops and
            church-adjacent outlets, Iglesia Ni Cristo members and families, Christian gift shops and distributors,
            and individual Filipino Christians looking for a meaningful, documented gift from the Holy Land.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <PremiumLinkButton href="/collections" variant="gold" icon={ArrowRight}>
              Explore Collections
            </PremiumLinkButton>
            <PremiumLinkButton href="/contact" variant="outline">
              Contact Us
            </PremiumLinkButton>
          </div>
        </Container>
      </section>
    </div>
  );
}
