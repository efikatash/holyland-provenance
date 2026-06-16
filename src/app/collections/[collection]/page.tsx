import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { collections, getCollectionBySlug } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import { Container } from "@/components/shared/Container";
import { ProductFilterGrid } from "@/components/products/ProductFilterGrid";
import { Badge } from "@/components/shared/Badge";
import { getCommunityFitMeta } from "@/data/community";
import { MediaFrame } from "@/components/shared/MediaFrame";

interface PageProps {
  params: { collection: string };
}

export function generateStaticParams() {
  return collections.map((c) => ({ collection: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const collection = getCollectionBySlug(params.collection);
  if (!collection) return {};
  return {
    title: collection.name,
    description: collection.description,
  };
}

export default function CollectionListingPage({ params }: PageProps) {
  const collection = getCollectionBySlug(params.collection);
  if (!collection) notFound();

  const collectionProducts = getProductsByCollection(collection.slug);

  return (
    <div className="bg-ivory py-16 sm:py-24">
      <Container>
        <nav className="mb-8 text-xs text-ink-400/70">
          <Link href="/collections" className="hover:text-gold-700">
            Collections
          </Link>{" "}
          / <span className="text-navy-700">{collection.shortName}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">{collection.eyebrow}</p>
            <h1 className="mt-3 text-display-sm text-navy-700 sm:text-display-md">{collection.name}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-400">{collection.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {collection.communityFit.map((fit) => {
                const meta = getCommunityFitMeta(fit);
                return meta ? (
                  <Badge key={fit} tone="stone">
                    {meta.label}
                  </Badge>
                ) : null;
              })}
            </div>
            <div className="mt-6 space-y-3 text-sm leading-relaxed text-ink-400">
              {collection.longDescription.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          <MediaFrame
            image={collection.heroImage}
            icon={collection.placeholderIcon}
            tone={collection.placeholderTone}
            label={collection.name}
            caption="Holy Land Provenance"
            aspect="landscape"
          />
        </div>

        {collection.galleryImages && collection.galleryImages.length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {collection.galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-[3/4] overflow-hidden rounded-md bg-ivory-200">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 50vw" />
              </div>
            ))}
          </div>
        )}

        <div className="mt-16">
          <h2 className="font-serif text-2xl text-navy-700">Browse {collection.shortName}</h2>
          <div className="mt-8">
            <ProductFilterGrid products={collectionProducts} />
          </div>
        </div>
      </Container>
    </div>
  );
}
