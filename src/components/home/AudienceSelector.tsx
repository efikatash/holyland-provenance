import Link from "next/link";
import { Flame, BookOpen, Store, ArrowRight } from "lucide-react";
import { CrossIcon } from "@/components/shared/placeholder-icons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/shared/Container";
import { Stagger, StaggerItem, HoverLift } from "@/components/shared/Motion";
import { cn } from "@/lib/utils";

const audiences = [
  {
    title: "Pentecostal & Evangelical Churches",
    description: "Shofars, anointing oils, and worship gifts prepared in the Holy Land for pastors and congregations.",
    href: "/collections/shofars",
    icon: Flame,
    tone: "wood",
  },
  {
    title: "Iglesia Ni Cristo Bible Study Gifts",
    description: "Text-only, Bible-centered study and appreciation gifts — no icons or ritual objects.",
    href: "/collections/bible-study-collection",
    icon: BookOpen,
    tone: "olive",
  },
  {
    title: "Catholic Devotional Keepsakes",
    description: "Olive wood rosaries, crosses, and keepsakes for parish gift shops and personal devotion.",
    href: "/collections/catholic-devotional-keepsakes",
    icon: CrossIcon,
    tone: "stone",
  },
  {
    title: "Gift Shops & Distributors",
    description: "Wholesale assortments, display-ready packaging, and reseller documentation.",
    href: "/gift-shops-distributors",
    icon: Store,
    tone: "navy",
  },
];

const toneClasses: Record<string, string> = {
  wood: "bg-wood-gradient text-stone-100",
  olive: "bg-gradient-to-br from-olive-400 to-olive-500 text-ivory-100",
  stone: "bg-gradient-to-br from-stone-300 to-stone-400 text-navy-800",
  navy: "bg-navy-gradient text-gold-300",
};

export function AudienceSelector() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Choose By Community"
          title="Built for the way your community worships"
          description="Each collection is curated and worded for the community it serves, so churches, members, and gift shops receive items that fit respectfully."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <StaggerItem key={audience.title} className="h-full">
                <HoverLift className="h-full">
                  <Link
                    href={audience.href}
                    className="card-lift group flex h-full flex-col rounded-lg border border-stone-200 bg-ivory-100 p-6 shadow-card"
                  >
                    <span className={cn("flex h-12 w-12 items-center justify-center rounded-full", toneClasses[audience.tone])}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-serif text-lg text-navy-700">{audience.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-400">{audience.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 transition-all group-hover:gap-2.5">
                      Explore <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </HoverLift>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
