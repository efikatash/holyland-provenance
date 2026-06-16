import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CollectionCard } from "@/components/collections/CollectionCard";
import { PremiumLinkButton } from "@/components/shared/PremiumLinkButton";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse Holy Land Provenance collections: Shofars from Israel, Anointing Oils, the Bible Study Collection, and Catholic Devotional Keepsakes — each documented and imported to the Philippines.",
};

export default function CollectionsPage() {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="The Full Catalog"
          title="Collections"
          description="Four collections, each curated and worded for the community it serves. Every item can carry documentation appropriate to its price point — see the Holy Land Provenance Passport for how that works."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {collections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-stone-200 bg-ivory-100 p-8 text-center sm:p-12">
          <h2 className="font-serif text-2xl text-navy-700">Not sure where to start?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-400">
            Tell us about your church, gift shop, or occasion and we will recommend a starting collection —
            including a small verified sample set, if you would like to see our documentation before a larger
            order.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <PremiumLinkButton href="/request-quote" variant="gold" icon={ArrowRight}>
              Request Quote
            </PremiumLinkButton>
            <PremiumLinkButton href="/contact" variant="outline">
              Contact Us
            </PremiumLinkButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
