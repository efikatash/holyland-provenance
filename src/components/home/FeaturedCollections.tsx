import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { collections } from "@/data/collections";
import { CollectionCard } from "@/components/collections/CollectionCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/shared/Container";
import { Stagger, StaggerItem } from "@/components/shared/Motion";

export function FeaturedCollections() {
  return (
    <section className="bg-ivory-200 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Catalog"
          title="Four collections, one standard of proof"
          description="Every collection is documented to a standard appropriate to its price point and audience — from a flagship shofar to a single bookmark set."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <StaggerItem key={collection.slug} className="h-full">
              <CollectionCard collection={collection} />
            </StaggerItem>
          ))}
          <StaggerItem className="h-full">
            <Link
              href="/provenance-passport"
              className="card-lift flex h-full flex-col justify-between rounded-lg bg-navy-gradient p-6 text-ivory-100 shadow-card"
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/40 text-gold-400">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-lg">Holy Land Provenance Passport</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-300/75">
                  The documentation system behind every collection — serials, QR proof, certificates, and journey
                  logs.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400">
                See how it works <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
